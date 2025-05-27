import { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/src/all';
import axios from 'axios'; // Add axios for API calls
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasCliked, setHasCliked] = useState(false);
  const [isLoading, SetISLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [gameStats, setGameStats] = useState(null); // State to store game stats

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVideoClick = () => {
    setHasCliked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (index) => (`videos/hero-${index}.mp4`);

  useEffect(() => {
    if (loadedVideos == totalVideos - 1) {
      SetISLoading(false);
    }
  }, [loadedVideos]);

  // API call to fetch game stats
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/games/game-stats')
      .then((response) => setGameStats(response.data))
      .catch((error) => console.error('Error fetching game stats:', error));
  }, []);

  // Animation part
  useGSAP(() => {
    if (hasCliked) {
      gsap.set('#next-video', { visibility: 'visible' });
      gsap.to('#next-video', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
        onStart: () => nextVideoRef.current.play()
      });

      gsap.from('#current-video', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.2,
        ease: 'power1.inOut'
      });
    }
  }, { dependencies: [currentIndex], revertOnUpdate: true });

  // clip-shape animation
  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 10%'
    });

    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true
      }
    });
  });

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden dark:bg-black bg-blue-75'>
      {isLoading && (
        <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
          <div className='three-body'>
            <div className='three-body_dot'></div>
            <div className='three-body_dot'></div>
            <div className='three-body_dot'></div>
          </div>
        </div>
      )}
      <div id="video-frame" className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
        <div>
          <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
            <div onClick={handleMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className='size-64 orgin-center scale-150 object-cover object-center'
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className='absolute left-0 top-0 size-full object-cover object-center'
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 '>
          G<b>A</b>MING
        </h1>
        <div className='absolute left-0 top-0 z-40 size-full'>
          <div className='mt-24 px-5 sm:px-10'>
            <h1 className='special-font hero-heading text-blue-75 text-sm uppercase md:text-[6rem]'>
              <b>D</b>evPlayGround
            </h1>
            <p className='mb-5 max-w-64 font-robert-regular text-blue-75'>
              Enter the Metagame layer <br />Unleash the Play Economy
            </p>
            <a href="https://www.dropbox.com/scl/fi/54mw5aalbwjhdnfkrwhtg/DevPlayground_Game.zip?rlkey=pjwy8qwe7i17dda7w8wbln8zj&st=zxt6its9&dl=0" target="_blank" rel="noopener noreferrer">
              <Button id="download" title="Download" ContainerClass='!bg-yellow-300 flex-center gap-1'/>
            </a>
          </div>
        </div>
      </div>
      {/* Render more stats as needed */ }
      {/* {gameStats && (
        <div className="game-stats">
          <h2>Game Stats:</h2>
          <p>Score: {gameStats.score}</p>
          <p>Kill Count: {gameStats.killCount}</p>
          {}
        </div>
      )} */}
      <h1 className='special-font hero-heading absolute bottom-5 right-5 dark:text-blue-400 text-black'>
        G<b>A</b>MING
      </h1>
    </div>
  );
}

export default Hero;
