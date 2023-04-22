from typing import Optional
from DataModel import DataModel
from fastapi import FastAPI
import pandas as pd
from plistlib import load
from fastapi.middleware.cors import CORSMiddleware

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
def make_predictions(dataModel: DataModel):
    df = pd.DataFrame(dataModel.dict(), columns=dataModel.dict().keys(), index=[0])
    df.columns = dataModel.columns()
    model = load("assets/modelo.joblib")
    result = model.predict(df)
    return result

@app.post("/decisionTree")
def make_predictions_decission_tree(data: DataModelList):
   print(data)
   df = convert_json_to_dataframe(data)
   df.columns = DataModel.columns()
   model = load("./models/Model_DecisionTree.joblib")
   result = model.predict(df)
   lists = result.tolist()
   json_predict = json.dumps(lists)
   return {"Predict_DT": json_predict}
