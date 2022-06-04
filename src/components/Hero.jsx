import React from "react";
import './Hero.css';
import Typewriter from "typewriter-effect";
import Zoom from 'react-reveal/Zoom';

function Hero() {
  return(
    <React.Fragment>
        <div className="hero h-screen text-center">
            <Zoom>
                <h1 className="text-white text-5xl md:text-6xl font-mono pt-80 md:pt-60 md:pl-10 pb-5 md:pb-3">Design School</h1>
                    <h1 className="text-white text-2xl md:text-2xl font-mono md:pl-10 pt-4 md:pt-3 px-5">Learn UI/UX Design with Technologies like 
                        <Typewriter 
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                    strings: ["Figma", "Sketch", "Adobe XD", "Webflow", "Craft", "Axure", "and more..."]
                                }}
                            />
                    </h1>
            </Zoom>
        </div>
    </React.Fragment>
  );
}

export default Hero;
