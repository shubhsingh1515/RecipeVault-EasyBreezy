import axios from "axios";

const API_KEY = "AIzaSyCWhqowzGPYXtf1PjvFS9R-ScYvVbg7-vk";
const CHANNEL_ID = "UCy4tqGFLGPWWIpNHva6_F3w";
const MAX_RESULTS = 20;

export const fetchVideos = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};
