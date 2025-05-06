import React from 'react'
import {motion} from 'framer-motion'
import { MdOutlineDesignServices, MdWeb } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa6'
import { FadeIn } from './animation_variation'
import './about.css'
import { SiAffinitydesigner } from 'react-icons/si'
import { TbBrandFramerMotion } from 'react-icons/tb'

const About =() =>{
    return(
        <>
        <div className='about'>
           <div className='top_container'>
           <div className='title'>
                <h2>We provide effective design solutions</h2>

            </div>
            <div className='box_container'>
                <motion.div
                variants= {FadeIn("up",0.2)}
                initial ="hidden"
                whileInView= {"show"}
                viewport={{once: false, amount: 0.7}}
                className='box'>
                    <div className='icon'>
                     <MdOutlineDesignServices />
                    </div>
                    <div className='details'>
                        <h1>UI/UX Design</h1>
                        <p>Focusing on user Interface (UI) and User experience (UX) 
                            design enhance the Usability and accessibillity of digital
                            product & app
                        </p>
                        <div className='icon'>
                            <FaArrowRight />

                        </div>

                    </div>
                </motion.div>
                <motion.div
                variants= {FadeIn("up",0.2)}
                initial ="hidden"
                whileInView= {"show"}
                viewport={{once: false, amount: 0.7}}
                className='box'>
                    <div className='icon'>
                     <SiAffinitydesigner/>
                    </div>
                    <div className='details'>
                        <h1>Graphic Design</h1>
                        <p>Focusing on user Interface (UI) and User experience (UX) 
                            design enhance the Usability and accessibillity of digital
                            product & app</p>
                        <div className='icon'>
                            <FaArrowRight />

                        </div>

                    </div>
                </motion.div>
                <motion.div
                variants= {FadeIn("up",0.2)}
                initial ="hidden"
                whileInView= {"show"}
                viewport={{once: false, amount: 0.7}}
                className='box'>
                    <div className='icon'>
                     <MdWeb />
                    </div>
                    <div className='details'>
                        <h1>Web Design</h1>
                        <p>Focusing on user Interface (UI) and User experience (UX) 
                            design enhance the Usability and accessibillity of digital
                            product & app</p>
                        <div className='icon'>
                            <FaArrowRight />

                        </div>

                    </div>
                </motion.div>
                <motion.div
                variants= {FadeIn("up",0.2)}
                initial ="hidden"
                whileInView= {"show"}
                viewport={{once: false, amount: 0.7}}
                className='box'>
                    <div className='icon'>
                     <TbBrandFramerMotion/>
                    </div>
                    <div className='details'>
                        <h1>Motion Graphics</h1>
                        <p>Focusing on user Interface (UI) and User experience (UX) 
                            design enhance the Usability and accessibillity of digital
                            product & app</p>
                        <div className='icon'>
                            <FaArrowRight />

                        </div>

                    </div>
                </motion.div>

            </div>

           </div>

        </div>
        </>
    )
}

export default About
