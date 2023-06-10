from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend URL
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.post("/upload")
async def upload_video(request: Request):
    data = await request.json()
    title = data.get("title")
    status = data.get("status")
    description = data.get("description")

    # Your logic for uploading the video to YouTube goes here

    # Simulating a delay of 2 seconds before sending the response
    await asyncio.sleep(2)

    # Mock response
    response_data = {
        "message": "Video uploaded successfully!"
    }

    return response_data
