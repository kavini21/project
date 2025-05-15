import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import './testmoral.css'
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeIn } from "./animation_variation";

const Testmoral = () =>{

    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [dropdown3, setDropdown3] = useState(false)


    return(
        <>
        <div className="testmoral">
            <div className='working_srocess'>
               <div className="container">
                <div className="detalis">
                    <div className="title">
                        <h2>Our high-Quality workig processes</h2>
                    </div>
                    <p>we focus at every stage on effective communication and between the client</p>
                    <p>It is important to note that are simplified steps, and the actual work process many</p>

                </div>
                 <div className="dropdown">
                    <div className="dropdown_container">
                    <div onClick={() => setDropdown1(!dropdown1)} className={`box ${dropdown1 ? 'active' : ''}`}>

                            <h1>01/project ides <span><IoIosArrowDropdown /></span></h1>
                                  <p>The process start with a detalied with the client to understand their idea & goals</p>
                        </div>
                        
                        <div onClick={() => setDropdown2(!dropdown2)} className={`box ${dropdown2 ? 'active' : ''}`}>

                            <h1>02/Brainstorming <span><IoIosArrowDropdown /></span></h1>
                                  <p>The process start with a detalied with the client to understand their idea & goals</p>
                        </div>
                        <div onClick={() => setDropdown3(!dropdown3)} className={`box ${dropdown3 ? 'active' : ''}`}>

                            <h1>03/Leanch <span><IoIosArrowDropdown /></span></h1>
                                  <p>The process start with a detalied with the client to understand their idea & goals</p>
                        </div>
                        

                    </div>

                 </div>
               </div>
            </div>
           <div className="review">
            <div className="container">
                <div className="title">
                     <h2>Clients are always satisfied with us</h2>
                </div>
                <div className="review_box">
                    <motion.div
                    variants={FadeIn("up", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}

                    className="box">
                        <div className="star_icon">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />

                        </div>
                        <div className="detalis">
                            <h3>Super customer service!</h3>
                            <p>Excelient customer service and I was really impressed and happy with my purchase especially as it was a last miovte order which got to me in time, amd it arrived I was very happy with the design and so was the reciplent.</p>

                        </div>
                        <div className="user_details">
                            <div className="user_img">
                                <img src="img/pppp.jpg" width={50} height={60}  />

                            </div>
                            <div className="user_name">
                                <h4>Willima Jack</h4>

                            </div>


                        </motion.div>
                    </div>
                     <motion.div
                    variants={FadeIn("up", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                     className="box">
                        <div className="star_icon">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />

                        </div>
                        <div className="detalis">
                            <h3>Super customer service!</h3>
                            <p>Excelient customer service and I was really impressed and happy with my purchase especially as it was a last miovte order which got to me in time, amd it arrived I was very happy with the design and so was the reciplent.</p>

                        </div>
                        <div className="user_details">
                            <div className="user_img">
                                <img src=""  />

                            </div>
                            <div className="user_name">
                                <h4>Willima Jack</h4>

                            </div>


                        </div>
                    </motion.div>
                     <motion.div
                    variants={FadeIn("up", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                     className="box">
                        <div className="star_icon">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />

                        </div>
                        <div className="detalis">
                            <h3>Super customer service!</h3>
                            <p>Excelient customer service and I was really impressed and happy with my purchase especially as it was a last miovte order which got to me in time, amd it arrived I was very happy with the design and so was the reciplent.</p>

                        </div>
                        <div className="user_details">
                            <div className="user_img">
                                <img src=""  />

                            </div>
                            <div className="user_name">
                                <h4>Willima Jack</h4>

                            </div>


                        </div>
                    </motion.div>
                     <motion.div
                    variants={FadeIn("up", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                     className="box">
                        <div className="star_icon">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />

                        </div>
                        <div className="detalis">
                            <h3>Super customer service!</h3>
                            <p>Excelient customer service and I was really impressed and happy with my purchase especially as it was a last miovte order which got to me in time, amd it arrived I was very happy with the design and so was the reciplent.</p>

                        </div>
                        <div className="user_details">
                            <div className="user_img">
                                <img src=""  />

                            </div>
                            <div className="user_name">
                                <h4>Willima Jack</h4>

                            </div>


                        </div>
                    </motion.div>

                </div>

            </div>

           </div>
        </div>
     </>
    )
}

export default Testmoral