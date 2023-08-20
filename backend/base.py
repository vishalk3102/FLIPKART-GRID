from flask import Flask, request, jsonify
from flask_cors import CORS

api = Flask(__name__)
CORS(api)


@api.route('/recommend' ,methods=['POST'])
def getRecommend():
    data = request.json['interaction']
    # interaction = data.get('interaction', [])

    # result = data[0]*10
    result = sum(data)

    # response = 'Received an interaction array with {len(interaction)} elements.'
    response = result
    return jsonify({'message': response})
  
        





if __name__ == '__main__':
    api.run(debug=True)



#  @app.route('/api/send-interaction', methods=['POST'])
# def receive_interaction():
#     data = request.json
#     interaction = data.get('interaction', [])
    
#     # Process the interaction array (you can add your logic here)
#     response = f'Received an interaction array with {len(interaction)} elements.' 
#     return jsonify({'message': response})



