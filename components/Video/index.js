"use client";

import { useEffect, useRef } from "react";

export function Video({video}){
    const videoRef = useRef(null);

   const handleVideoPlaypause = () => {
    console.log(videoRef.current.isPlaying, "el")
    videoRef.current.play();
   }


    return(
        <video ref={videoRef} onClick={handleVideoPlaypause} style={{width: '100%', height: '100%', objectFit: 'cover'}}>
            <source src={video?.playbackUrl} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}
