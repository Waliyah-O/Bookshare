import { Link } from "react-router-dom";
import videoBackground from "../assets/videos/pexels-swisshumanity-6168921 (2160p).mp4";
import { useEffect } from "react";
import { useRef } from "react";
import Carousel from "../components/Carousel";

const HomePage = () => {
  const bgVideo = useRef();

  useEffect(() => {
    bgVideo.current.playbackRate = 0.65;
  }, []);

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className={"bg-video"}>
          <video autoPlay muted loop ref={bgVideo}>
            <source src={videoBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-text-container">
            <div className="hero-text">
              <h1>Educating people, protecting the environment</h1>
              <div className="home-buttons">
                <Link to="books">Buy a Book</Link>
                <Link to="host">Sell your old books</Link>
              </div>
           
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-6">
        <h2 className="text-4xl font-extrabold py-4">WHY DONATE?</h2>

        <div>
        <Carousel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
