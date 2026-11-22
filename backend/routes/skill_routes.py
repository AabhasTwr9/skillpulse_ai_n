from fastapi import APIRouter, HTTPException
from services.skill_data import skill_data

router = APIRouter(
    prefix="/api/skills",
    tags=["Skills"]
)


@router.get("/states")
def get_states():

    return {
        "states": list(skill_data.keys())
    }


@router.get("/states/{state_name}")
def get_state_skills(state_name: str):

    if state_name not in skill_data:
        raise HTTPException(
            status_code=404,
            detail="State not found"
        )

    state = skill_data[state_name]

    result = {}

    for industry, values in state["industries"].items():

        demand = values["demand"]
        supply = values["supply"]

        shortage = demand - supply

        shortage_percentage = (
            (shortage / demand) * 100
            if demand > 0 else 0
        )

        result[industry] = {
            "demand": demand,
            "supply": supply,
            "shortage": shortage,
            "shortage_percentage": round(
                shortage_percentage, 2
            )
        }

    return {
        "state": state_name,
        "industries": result
    }