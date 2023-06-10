from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pytube import YouTube
import random
import string

name = ''.join(random.choices(string.ascii_letters, k=5))
video_file = f"{name}.mp4"

path: str = "Media/"

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/download")
async def download(data: dict):
    video_url = data.get("video_url")
    await sample(video_url)    
    return {"status": video_url}

def sample(n):
    try:
        youtube = YouTube(n)
        video_stream = youtube.streams.get_highest_resolution()
        video_file = f"{name}.mp4"
        video_stream.download(output_path=path, filename=video_file)
        print('Video download complete.')
    except Exception as e:
        print(f"An error occurred while downloading the video: {e}")
