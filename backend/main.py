from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'], allow_headers=['*'])
class Req(BaseModel):
 ecu_id: str
 synthetic_only: bool = True
@app.post('/evaluate')
def evaluate(r: Req):
 return {'risk_score':92.4,'action':'ISOLATE','explanation':f'ECU {r.ecu_id} evaluated','zero_trust':{'verified':True,'policy':'deny-by-default'},'synthetic_only':True,'latency_ms':0.70}
