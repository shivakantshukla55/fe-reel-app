"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../page.module.css";
import { Video } from "@/components/Video";

export default function Home() {
    const [videos, setVideos] = useState([]);

    const getAllReels = async () => {
        try{
            const res = await axios.get("http://localhost:3001/videos");
            console.log(res, "res");
            setVideos(res?.data?.videos);

        }catch(err){
            console.log("Error", err);
        }
    };

    useEffect(() => {
        getAllReels();
    }, []);
  return (
    <div>
      <main>
        {/* <h1>Hello Reel</h1> */}
        <ul style={{overflowY: 'scroll', scrollSnapType: 'y mandatory', height: '100vh', width: '100%'}}>
        {videos.map((el) => (
            <li key={el?.video?._id} style={{height: '100vh', width: '100%', listStyleType: "none", scrollSnapAlign: 'start'}}>
                {/* <div>{el?.video?.title}</div> */}
                {/* <video style={{width: '100%', height: '100%', objectFit: 'cover'}}>
                    <source src={el?.playbackUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <Video video={el} />
            </li>
        ))}
        </ul>
      </main>
    </div>
  );
}