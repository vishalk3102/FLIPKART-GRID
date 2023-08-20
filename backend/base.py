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
    data_csv_path = "./Dataset/Apparel.csv"
    featureModel = "../Models/recommender-apparal.ckpt"
    ratingModel = load_model('../Models/recommender-apparal.ckpt')
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
    list_id_products = ["B01FWRXN0Y",
                "B01DXHX81O",
                "B01B3Q4Q0O",
                "B01ADDSL9U"]

    # top_products = predictId(list_id_products, model, id2mapid, map2id)
    top_products = predictId(requestedData1, model, id2mapid, map2id)

   
    # response = top_products
    response = top_products
    return jsonify({"products":response})
  
        





if __name__ == '__main__':
    api.run(debug=True)

