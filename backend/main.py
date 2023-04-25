from typing import Optional
from DataModel import DataModel
from fastapi import FastAPI
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

import numpy as np
import pandas as pd
import joblib
from joblib import load
import sys
import json
sys.modules['sklearn.externals.joblib'] = joblib

app = FastAPI()

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

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
   return {"item_id": item_id, "q": q}

@app.post("/predict")
def make_predictions():
    datamodel = {'words': ['película basar arte frank frazetta mítico ilustrador fantasía alguno personaje pintura distribuidor muerte ser mejor ejemplo sorprendentemente animación lograr mantener sensación arte original bakshi ser bien conocer uso pesado rotocopio técnica rastrear secuencia acción vivo película ser excepción embargo dado tema película ser bastante realista personaje ser humano funcionar bastante bien realmente gustar aquí ser trama vez tener historia personaje interesante buen secuencia acción verdadero horrible villano hermoso nena película tener sensación mejor cómics conan ser sorprendente roy thomas ser escritor serie marvel cimmerio favorito ser grito lejano acción vivo mierda conan hablar película b género recomendar definitivamente']}
    df = pd.DataFrame(datamodel)
    model = load("C:/Users/andre/OneDrive/Documentos/Sistemas/BI/BI_Proyecto1/backend/assets/modelo.joblib")
    result = model.predict(df)
    return json.dumps({"result": result.tolist()})
