import React, { useEffect } from "react";
import design from '../design/design.png';
import develop from '../develop/develop.png';
import cert from '../cert/cert.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

function Body() {
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);

return(
    <React.Fragment>
        <div className='h-full overflow-hidden'>
            <h1 className="text-gray-800 font-bold text-5xl text-center pt-32 pb-20" data-aos="zoom-in">
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 3, type: 'spring', stiffness: 200 }}
            >W</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 0.5, duration: 10, type: 'spring', stiffness: 200 }}
            >H</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 0.9, duration: 5, type: 'spring', stiffness: 200 }}
            >A</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 1.2, duration: 10, type: 'spring', stiffness: 200 }}
            >T </motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 1.5, duration: 10, type: 'spring', stiffness: 200 }}
            >Y</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 1.7, duration: 10, type: 'spring', stiffness: 200 }}
            >O</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 2.2, duration: 10, type: 'spring', stiffness: 200 }}
            >U'</motion.span> 
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 2.4, duration: 10, type: 'spring', stiffness: 200 }}  
            >L</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 2.6, duration: 10, type: 'spring', stiffness: 200 }}
            >L </motion.span> 
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 2.8, duration: 10, type: 'spring', stiffness: 200 }}
            >G</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 3.2, duration: 10, type: 'spring', stiffness: 200 }}
            >E</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 3.5, duration: 10, type: 'spring', stiffness: 200 }}
            >T </motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 3.8, duration: 10, type: 'spring', stiffness: 200 }}
            >F</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 4.1, duration: 10, type: 'spring', stiffness: 200 }}
            >R</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 4.4, duration: 10, type: 'spring', stiffness: 200 }}
            >O</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 4.7, duration: 10, type: 'spring', stiffness: 200 }}
            >M </motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 5, duration: 10, type: 'spring', stiffness: 200 }}
            >T</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 5.4, duration: 10, type: 'spring', stiffness: 200 }}  
            >H</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 5.8, duration: 10, type: 'spring', stiffness: 200 }}
            >E </motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 6, duration: 10, type: 'spring', stiffness: 200 }}
            >C</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 6.3, duration: 10, type: 'spring', stiffness: 200 }}
            >O</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 6.6, duration: 10, type: 'spring', stiffness: 200 }}  
            >U</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 7, duration: 10, type: 'spring', stiffness: 200 }}
            >R</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 7.3, duration: 10, type: 'spring', stiffness: 200 }}
            >S</motion.span>
            <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 7.6, duration: 10, type: 'spring', stiffness: 200 }}
            >E</motion.span>
            </h1>
                <div class="md:grid md:gap-10 md:grid-cols-4 md:pb-44 md:pt-20 md:pl-40 px-32">
                    <div 
                        className="" 
                        data-aos="flip-left" 
                        data-aos-easing="ease-out-cubic" 
                        data-aos-duration="3000"
                    >
                        <img className='pb-5 pl-3 md:pl-12' src={design} alt="code" />
                        <h1 className="pb-3 text-lg font-semibold pl-3 text-center">LEARN APP DESIGN</h1>
                        <h1 className="pb-10 text-lg font-light text-center">You'll be able to code fluently in React.js or Next.js and be able to start building your own Web Apps.</h1>
                    </div>
                    <div 
                        className="" 
                        data-aos="flip-right" 
                        data-aos-easing="ease-out-cubic" 
                        data-aos-duration="3000"
                    >
                        <img className='pb-5 pl-3 md:pl-12' src={design} alt="design" />
                        <h1 className="pb-3 text-lg font-semibold text-center">LEARN WEB DESIGN</h1>
                        <h1 className="pb-10 text-lg font-light text-center">You'll know how to design Beautiful Websites and be familiar with mobile UI and UX design.</h1>
                    </div>
                    <div 
                        className="" 
                        data-aos="flip-left" 
                        data-aos-easing="ease-out-cubic" 
                        data-aos-duration="3000"
                    >
                        <img className='pb-5 pl-3 md:pl-12' src={develop} alt="develop" />
                        <h1 className="pb-3 text-lg font-semibold text-center">BUILD WEB APPS</h1>
                        <h1 className="pb-10 text-lg font-light text-center">You'll be taught how to deploy your Websites and start your web Businesses.</h1>
                    </div>
                    <div 
                        className="" 
                        data-aos="flip-right" 
                        data-aos-easing="ease-out-cubic" 
                        data-aos-duration="3000"
                    >
                        <img className='pb-5 pl-3 md:pl-12' src={cert} alt="cert" />
                        <h1 className="pb-3 text-lg font-semibold text-center">GET CERTIFIED</h1>
                        <h1 className="pb-7 text-lg font-light text-center md:text-left">You'll get Certified in Web Development so you can get recognition for your new sills.</h1>
                    </div>
                </div>
        </div>
    </React.Fragment>
    );
}

export default Body;
