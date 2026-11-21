from fastapi import FastAPI

app = FastAPI(
    title="SkillPulse AI",
    description="AI-powered Skill Gap Analysis Platform",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Welcome to SkillPulse AI Backend!",
        "status": "Running"
    }