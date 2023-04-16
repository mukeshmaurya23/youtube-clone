export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_ID =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_POPULAR_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const VIDEO_INFO =
  "https://www.googleapis.com/youtube/v3/videos?key=" +
  GOOGLE_API_KEY +
  "&maxResults=50&part=snippet&id=";

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_STREAM = 10;
