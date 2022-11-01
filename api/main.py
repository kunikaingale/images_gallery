from flask import Flask,request
import os
import requests
import dotenv

dotenv.load_dotenv(dotenv_path="./.env.local")

UNSPLASH_URL="https://api.unsplash.com/photos/random/"
UNSPLASH_KEY=os.environ.get('UNSPLASH_KEY',"")
if not UNSPLASH_KEY:
    raise EnvironmentError("create .env.local and insert UNSPLASH_KEY")
app=Flask(__name__)
@app.route('/new_image')
def new_image():
    word=request.args.get("query")
    headers={
        "Accept-Version": "v1",
        "Authorization" : "Client-ID "+ UNSPLASH_KEY
    }
    params={
        "query": f"{word}"
    }
    response=requests.get(UNSPLASH_URL,headers=headers,params=params )
    return response.json()
if __name__=="__main__":
    app.run(debug=True,port=5050)
    