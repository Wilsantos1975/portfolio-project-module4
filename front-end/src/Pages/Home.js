// import background from '../assets/Albumcover2.png'
import "../styles/styles.css";
// import VideoPlayer from '../Components/VideoPlayer'
import background from "../assets/Your paragraph text.png";
import Image from 'react-bootstrap/Image'
import React from "react";


function Home() {





  return (
    <div className="home" >
      {/* <VideoPlayer/> */}
      <div className="fluid">
        <Image className="background-image" src={background} alt="album cover" fluid />
        
      </div>
    </div>
  );
}

export default Home;
