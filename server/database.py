from flask import Flask,jsonify, request
from google.cloud import firestore

firestore_client = firestore.Client.from_service_account_json('../server/env.json')
collection_ref = firestore_client.collection('Drinks')
app = Flask(__name__)

@app.route('/api/allmixeddrinks')
def get_mixeddrink_data():
    documents = collection_ref.get()
    data = []
    for doc in documents:
        data.append(doc.to_dict())
    return jsonify(data)

@app.route('/api/mixeddrinkbyliquor', methods=['GET'])
def get_mixeddrink_data_by_base():
    filter = request.args.get('filter')

    if filter:
        query_ref = []
        for i in range(1,16):
            query_ref.append(collection_ref.where(f'Ingredient{i}', '==', filter).stream())
    data = []
    for query in query_ref:
        query_result = [{**doc.to_dict(), "id": doc.id} for doc in query]
        data.append(query_result)

    data = [item for sublist in data for item in sublist]   
    print(data)
    return jsonify(data)

# Run the Flask application
if __name__ == '__main__':
    app.run(port=8180)


