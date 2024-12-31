// // src/components/VideoCard.js
// import React from 'react';

// const VideoCard = ({ video, onSelect }) => {
//   return (
//     <div
//       className=" rounded-lg shadow-lg overflow-hidden cursor-pointer"
//       onClick={() => onSelect(video.id.videoId)}
//     >
//       <img
//         src={video.snippet.thumbnails.high.url}
//         alt={video.snippet.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-5">
//         <h2 className="text-lg font-semibold">{video.snippet.title}</h2>
//         <p className="text-gray-400 mt-2">{video.snippet.description}</p>
//       </div>
//     </div>
//   );
// };

// export default VideoCard;

// src/components/VideoCard.js
import React from "react";

const VideoCard = ({ video, onSelect }) => {
  return (
    <div
      className="rounded-lg shadow-2xl overflow-hidden cursor-pointer"
      onClick={() => onSelect(video.embedUrl)}
    >
      <iframe
        width="100%"
        height="100%"
        src={video.embedUrl}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="p-5">
        <h2 className="text-lg font-semibold">{video.title}</h2>
        <p className="text-gray-400 mt-2">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
