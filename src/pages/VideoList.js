// // src/pages/VideoList.js
// import React, { useState, useEffect } from 'react';
// import { fetchVideos } from '../api/youtubeApi';
// import VideoCard from '../components/VideoCard';

// const VideoList = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     const loadVideos = async () => {
//       const videoData = await fetchVideos();
//       setVideos(videoData);
//     };
//     loadVideos();
//   }, []);

//   return (
//     <div className="min-h-screen  flex flex-col items-center">
//       <h1 className="text-4xl font-bold mt-10 mb-6">Channel Videos</h1>
//       {selectedVideo && (
//         <div className="w-full max-w-4xl mb-8">
//           <iframe
//             className="w-full h-96"
//             src={`https://www.youtube.com/embed/${selectedVideo}`}
//             title="Selected Video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       )}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-5">
//         {videos.map((video) => (
//           <VideoCard key={video.id.videoId} video={video} onSelect={setSelectedVideo} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoList;

// src/pages/VideoList.js
import React, { useState } from "react";
import { videos } from "./VideoData";
import VideoCard from "../components/VideoCard";

const VideoList = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0].embedUrl);

  return (
    <div className="">
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/reciepe/banner1.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-5 rounded-lg">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Discover delicious recipes crafted with passion and love!
          </h1>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-10 mb-6">Channel Videos</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-5">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onSelect={setSelectedVideo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
