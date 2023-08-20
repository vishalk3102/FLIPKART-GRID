from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import pytorch_lightning as pl
import torch
import torch.nn as nn
from torch.nn import Linear
from torch.nn import functional as F
from utils import map_column,predictId,masked_accuracy,masked_ce,Recommender
import json
import tensorflow as tf
from tensorflow.keras.layers import Input, Embedding, Flatten, Concatenate, Dense
from tensorflow.keras.models import Model
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from numpy import loadtxt
from tensorflow.keras.models import load_model


api = Flask(__name__)
CORS(api)

PAD = 0
MASK = 1

def predictId(list_products, model, id2mapid, map2id):
    
    ids = [PAD] * (120 - len(list_products) - 1) + [id2mapid[a] for a in list_products] + [MASK]
    
    src = torch.tensor(ids, dtype=torch.long).unsqueeze(0)
    
    with torch.no_grad():
        prediction = model(src)
    
    masked_pred = prediction[0, -1].numpy()
    
    sorted_predicted_ids = np.argsort(masked_pred).tolist()[::-1]
    
    sorted_predicted_ids = [a for a in sorted_predicted_ids if a not in ids]
    
    return [map2id[a] for a in sorted_predicted_ids[:5] if a in map2id]

# API ROUTING 
@api.route('/recommend' ,methods=['POST'])
def getRecommend():
    requestedData = request.json['interaction']
    requestedData2 = json.dumps(requestedData)
    requestedData1  = json.loads(requestedData2)
    data = request.json
    category = data.get('category')

    if category == 'Apparel':
        data_csv_path = "./Dataset/Apparel.csv"
        featureModel = "../Models/recommender-apparal.ckpt"
    elif category == 'Jewellery':
        data_csv_path = "./Dataset/Augmented_Jewelry.csv"
        featureModel = "../Models/recommender-jewellery-v1.ckpt"
    elif category == 'Luggage':
        data_csv_path = "./Dataset/Luggage.csv"
        featureModel = "../Models/recommender-luggage.ckpt"
    elif category == 'Watches':
        data_csv_path = "./Dataset/Watches.csv"
        featureModel = "../Models/recommender-watches.ckpt"
    elif category == 'Shoes':
        data_csv_path = "./Dataset/Shoes.csv"
        featureModel = "../Models/recommender-shoes.ckpt"
    elif category == 'Beauty':
        data_csv_path = "./Dataset/Beauty.csv"
        featureModel = "../Models/recommender-beauty.ckpt"
    elif category == 'Gift Card':
        data_csv_path = "./Dataset/GiftCard.csv"
        featureModel = "../Models/recommender-gift-card.ckpt"
    else:
        data_csv_path = "./Dataset/Dataset.csv"
        featureModel = "../Models/recommender-main.ckpt"
    

    # data_csv_path = "./Dataset/Apparel.csv"
    # data_csv_path = "./Dataset/Augmented_Jewelry.csv"
    data_csv_path = "./Dataset/Dataset.csv"
    # featureModel = "../Models/recommender-apparal.ckpt"
    # featureModel = "../Models/recommender-jewellery-v1.ckpt"
    featureModel = "../Models/recommender-main.ckpt"
    # ratingModel = load_model('../Models/recommender-apparal.ckpt')
    data = pd.read_csv(data_csv_path)
    data, mapping, inverse_mapping = map_column(data, col_name="product_id")
    model = Recommender(
        vocab_size=len(mapping) + 2,
        lr=1e-4,
        dropout=0.3,
    )
    
    model.eval()
    model.load_state_dict(torch.load(featureModel,map_location ='cpu')["state_dict"])
    id2mapid = {a: mapping[b] for a, b in zip(data.product_id.tolist(), data.product_id.tolist()) if b in mapping}
    map2id = {v: k for k, v in id2mapid.items()}


    # top_products = predictId(list_id_products, model, id2mapid, map2id)
    top_products = predictId(requestedData1, model, id2mapid, map2id)

    # 2nd model
    model = load_model('../Models/WholeDatasetModel.h5')
    item_encoder = LabelEncoder()
    # data['items'] = item_encoder.fit_transform(data['product_id'])
    items = item_encoder.fit_transform(top_products)
    # Example user and item data
    target_user_id = 32158956

    # Assuming data is your DataFrame containing item data



    # Create and fit the user encoder
    user_encoder = LabelEncoder()
    user_encoder.fit([target_user_id])

    # Create a dictionary to map original item IDs to numeric encodings
    item_mapping = {item: index for index, item in enumerate(items)}

    # Create an inverse mapping to retrieve original item IDs from numeric encodings
    inverse_item_mapping = {index: item for item, index in item_mapping.items()}

    # Encode the user ID
    encoded_user_id = user_encoder.transform([target_user_id])[0]

    # Encode all items
    encoded_item_ids = np.array([item_mapping[item] for item in items])

    # Simulated model predictions (replace this with your actual model)
    num_users = 1
    num_items = len(items)
    model_predictions = np.random.rand(num_users, num_items)

    # Predict ratings for the chosen user and all items
    user_ids = np.full(num_items, encoded_user_id)
    predictions = model_predictions[encoded_user_id]

    # Get top N recommendations
    N = 3 # Number of recommendations you want to provide
    recommended_item_indices = predictions.argsort()[::-1][:N]
    decoded_items = item_encoder.inverse_transform(items)

    
   
    # response = top_products
    # response = top_products
    response = decoded_items.tolist()[:3] 
    return jsonify({"productIds":response})
  
        





if __name__ == '__main__':
    api.run(debug=True)

