from typing import Optional
from DataModel import DataModel
from fastapi import FastAPI
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

import numpy as np
import pandas as pd
import sys
import json
import dill

app = FastAPI()

filename = "C:/Users/andre/Downloads/modelo100.joblib"
with open(filename, 'rb') as f:
   pipeline = dill.load(f)
import re
import stanza
import unicodedata
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from stanza.pipeline.processor import Processor, register_processor
stanza.download('es')
from num2words import num2words
from langdetect import detect

nltk.download('stopwords')
from nltk.corpus import stopwords

df2 = {'review_es': ['hola pelicula mala triste sueño']}
df2 = pd.DataFrame(df2)
result = pipeline.predict(df2)
print(result)


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


@app.post("/predict")
def make_predictions():

    filename = "C:/Users/andre/Downloads/modelo100.joblib"
    with open(filename, 'rb') as f:
        pipeline = dill.load(f)
    import re
    import stanza
    import unicodedata
    import nltk
    nltk.download('stopwords')
    from nltk.corpus import stopwords
    from stanza.pipeline.processor import Processor, register_processor
    stanza.download('es')

    from num2words import num2words
    from langdetect import detect

    nltk.download('stopwords')
    from nltk.corpus import stopwords

    df2 = {'review_es': ['hola pelicula mala triste sueño']}
    df2 = pd.DataFrame(df2)
    result = pipeline.predict(df2)
    print(result)
    #return json.dumps({"result": result.tolist()})
