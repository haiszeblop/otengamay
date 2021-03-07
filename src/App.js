import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "https://storage.googleapis.com/folkloric-folio-306006/V57ZR3XEY37M/22a_1615089453154113.mp4",
  
    }
  ]
};

// learn more https://github.com/sampotts/plyr#the-source-setter

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export const MyComponent = () => {
  return (
    <>
      <Plyr src={videoSrc} />
    </>
  );
};
