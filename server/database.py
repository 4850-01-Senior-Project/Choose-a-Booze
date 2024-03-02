from flask import Flask,jsonify
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

# Run the Flask application
if __name__ == '__main__':
    app.run(port=8180)


