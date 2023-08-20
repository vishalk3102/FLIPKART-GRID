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
    data_csv_path = ""
    featureModel = ""
    model_path=""
    if category == 'Apparel':
        data_csv_path = "./Dataset/Apparel.csv"
        featureModel = "../Models/recommender-apparal.ckpt"
        model_path = '../Models/ApparelNew2.h5'
    elif category == 'Jewellery':
        data_csv_path = "./Dataset/Augmented_Jewelry.csv"
        featureModel = "../Models/recommender-jewellery-v1.ckpt"
        model_path = '../Models/AugJewelry.h5'
    elif category == 'Luggage':
        data_csv_path = "./Dataset/Luggage.csv"
        featureModel = "../Models/recommender-luggage.ckpt"
        model_path = '../Models/Luggage.h5'
    elif category == 'Watches':
        data_csv_path = "./Dataset/Watches.csv"
        featureModel = "../Models/recommender-watches.ckpt"
        model_path = '../Models/Watches.h5'
    elif category == 'Shoes':
        data_csv_path = "./Dataset/Shoes.csv"
        featureModel = "../Models/recommender-shoes.ckpt"
        model_path = '../Models/Shoes.h5'
    elif category == 'Beauty':
        data_csv_path = "./Dataset/Beauty.csv"
        featureModel = "../Models/recommender-beauty.ckpt"
        model_path = '../Models/Beauty.h5'
    elif category == 'Gift Card':
        data_csv_path = "./Dataset/GiftCard.csv"
        featureModel = "../Models/recommender-gift-card.ckpt"
        model_path = '../Models/AugGiftCard.h5'
    else:
        data_csv_path = "./Dataset/Dataset.csv"
        featureModel = "../Models/recommender-main.ckpt"
        model_path = '../Models/WholeDatasetModel.h5'

    
   
    # response = top_products
    # response = top_products
    data_csv_path = "./Dataset/Augmented_Jewelry.csv"
    featureModel = "../Models/recommender-jewellery-v1.ckpt"
    model_path = '../Models/AugJewelry.h5'
    model = load_model(model_path)
    response_by_category = processing(data_csv_path, featureModel, requestedData1,model)
    data_csv_path = "./Dataset/Dataset.csv"
    featureModel = "../Models/recommender-main.ckpt"
    model_path = '../Models/WholeDatasetModel.h5'
    model = load_model(model_path)
    response_by_global = processing(data_csv_path, featureModel, requestedData1,model)

    # return jsonify({"productIds":response})
    return jsonify({"categoryProductIds":response_by_category,"globalProductIds":response_by_global})
  
        

def processing(data_csv_path, featureModel, requestedData1,modelRating):
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
    
    item_encoder = LabelEncoder()
    data['items'] = item_encoder.fit_transform(data['product_id'])
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
    user_ids = np.full(num_items, encoded_user_id)
    predictions = modelRating.predict([user_ids, encoded_item_ids]).flatten()
    # user_ids = np.full(num_items, encoded_user_id)
    predictions = model_predictions[encoded_user_id]

    # Predict ratings for the chosen user and all items
    # user_ids = np.full(num_items, encoded_user_id)
    # predictions = model_predictions[encoded_user_id]

    # Get top N recommendations
    N = 3 # Number of recommendations you want to provide
    recommended_item_indices = predictions.argsort()[::-1][:N]
    decoded_items = item_encoder.inverse_transform(items)
    return decoded_items.tolist()[:3]
    # return top_products



if __name__ == '__main__':
    api.run(debug=True)

