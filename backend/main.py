from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.skill_routes import router as skill_router
app = FastAPI(
    title="SkillPulse AI",
    description="AI-powered Skill Gap Analysis Platform",
    version="1.0.0"
)

app.include_router(skill_router)

# Allow communication with React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Welcome to SkillPulse AI Backend!",
        "status": "Running"
    }

@app.get("/api/status")
def status():
    return {
        "project": "SkillPulse AI",
        "backend": "Connected",
        "status": "Operational"
    }