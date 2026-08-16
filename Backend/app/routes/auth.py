from fastapi import APIRouter

from app.schemas.auth import LoginRequest

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/login")
async def login(request: LoginRequest):
    return {
        "message": "Login request received",
        "email": request.email
    }