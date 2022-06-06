import React from "react";
import './Hero.css';
import Typewriter from "typewriter-effect";
import Zoom from 'react-reveal/Zoom';
import MouseParticles from 'react-mouse-particles';
import Tilt from 'react-tilt';
import SnowStorm from 'react-snowstorm';

function Hero() {
  return(
    <React.Fragment>
    <Tilt className="Tilt" options={{ max : 25 }} >
    <SnowStorm />
        <div className="hero h-screen text-center">
        <MouseParticles g={3} color="random" num={18} radius={7} cull="col,image-wrapper"/>
            <Zoom>
                <h1 className="text-white text-5xl md:text-6xl font-mono pt-80 md:pt-60 md:pl-10 pb-5 md:pb-3">Design School</h1>
                    <h1 className="text-white text-2xl md:text-2xl font-mono md:pl-10 pt-4 md:pt-3 px-5">Learn Design Animation with Technologies like 
                        <Typewriter 
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                    strings: ["Figma", "Sketch", "Adobe XD", "Webflow", "Proto.io", "Axure", "and more..."]
                                }}
                            />
                    </h1>
            </Zoom>
        </div>
        </Tilt>
    </React.Fragment>
  );
}

export default Hero;
