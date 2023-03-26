const YOUTUBE_API_KEY = "AIzaSyBdFU6hcqIoWZis7FPclneTC1OnT7Iv7FU";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  YOUTUBE_API_KEY;
