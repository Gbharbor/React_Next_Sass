"use client"

import { VideoPlayer } from "@/components/mod4/c4VideoPlayer";
import { useState } from "react";

const Page =() => {
   const [playing, setPlaying] = useState(false);
   return (
      <div className="border border-white p-3 mb-4">
         <div>
            <p className="text-2xl text-blue-700 mb-3">{playing ? 'rodando' : 'pausado'}</p>
            <button className="bg-blue-700 rounded-md p-3 text-black" onClick={()=> setPlaying(!playing)}>Play/Pause</button>
         </div>
         <VideoPlayer
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-video/flower.mp4"
            isPlaying={playing}
         />
      </div>
   );
}
export default Page;