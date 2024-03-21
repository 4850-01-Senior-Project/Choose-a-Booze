from flask import Flask,jsonify, request
from google.cloud  import firestore
from google.cloud.firestore import CollectionReference
from google.cloud.firestore_v1.base_query import FieldFilter
from filterData import filterDataDontInclude, filterDataInclude
from flask_cors import CORS
# import requests

firestore_client = firestore.Client.from_service_account_json('../server/database/env.json')
collection_ref = firestore_client.collection('Drinks')
collection_ref_tags = firestore_client.collection('Tags')
app = Flask(__name__)
CORS(app)

@app.route('/api/alldrinks', methods=['GET'])
def get_mixeddrink_data():
    documents = collection_ref.get()
    data = []
    for doc in documents:
        data.append(doc.to_dict())
    return jsonify(data)

'''
@app.route('/api/mixeddrinkwith', methods=['GET'])
def get_mixeddrink_data_with_filtersOR():
    filter = request.args.get('filter').split('-')
    dont_want = request.args.get('dontwant').split('-')
    distinct_ids = set()
    if filter[0] == "" and dont_want[0]=="":
        return get_mixeddrink_data()
    if filter:
        results = []
        for i in range(1,16):
            query = collection_ref.where(filter=FieldFilter(f'Ingredient{i}', 'in', [value for value in filter])).stream()
            for doc in query:
            # Check if the ID is unique
                document = doc.to_dict()
                if (doc.id not in distinct_ids and filterData(list(document.values()), dont_want)):
                    results.append({'id': doc.id, 'drink': document})
                    distinct_ids.add(doc.id)
    return jsonify(results)
'''

# Add a description here
@app.route('/api/mixeddrinkwith', methods=['GET'])
def getDrinkList():
    filter = request.args.get('filter').split('-')
    dont_want = request.args.get('dontwant').split('-')
    distinct_ids = set()
    documents = collection_ref.get()
    data = []
    for doc in documents:
        document = doc.to_dict()
        templist = list(document.values())
        if (doc.id not in distinct_ids and filterDataDontInclude(templist , dont_want) and filterDataInclude(templist, filter)):
            data.append({'id' : doc.id, 'drink' : document})
            distinct_ids.add(doc.id)
    return jsonify(data)


@app.route('/api/alltags', methods=['GET'])
def get_tag_data():
    documents = collection_ref_tags.get()
    data = []
    for doc in documents:
        data.append({'id': doc.id, 'tag': doc.to_dict()})
    return jsonify(data)

# Run the Flask application
if __name__ == '__main__':
    app.run(port=8081)


