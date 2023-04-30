from typing import Optional
from DataModel import DataModel
from fastapi import FastAPI
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

import uvicorn


import numpy as np
import pandas as pd
import sys
import json
import dill

from fastapi import File, UploadFile

import re
import unicodedata
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from stanza.pipeline.processor import Processor, register_processor

import stanza
stanza.download('es')
from num2words import num2words
from langdetect import detect

nltk.download('stopwords')
from nltk.corpus import stopwords

app = FastAPI()


filename = "C:/Users/andre/Downloads/modelo_cp.joblib"
with open(filename, 'rb') as f:
        pipeline = dill.load(f)



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"InteligenciaNegocios": "Proyecto1Etapa2"}


@app.post("/predictText")
def make_predictions(data: dict):
    text = data['review_es']
    df = pd.DataFrame({'review_es': [text]})
    result = pipeline.predict(df)
    return {"review_es": [text] , "sentimiento": result.tolist()}

@app.post("/predict")
def make_predictions(file: UploadFile = File(...)):
    df = pd.read_csv(file.file, sep = ',')
    df = df.sample(10)
    result = pipeline.predict(df)
    df['sentimiento'] = result
    return df.to_json(orient = 'records')


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)