import React from "react"
import { FaXTwitter, FaFacebookF} from "react-icons/fa6"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import { IoIosSend } from "react-icons/io"
import './footer.css'
const Footer =() => {
    return(
        <>
        <div className="footer">
            <div className="container">
                <div className="detall_container">
                    <h3>Lat's start a project together</h3>
                    <p>We work closely with our client to understand their objectives, target audience, and deliver tailored solutions that drive results and create lasting impact. </p>
                    <div className="call_detail">
                        <h4>Give us a call</h4>
                        <p>+94768254109</p>

                    </div>
                    <div className="Mail_detail">
                        <h4>Send us an email</h4>
                        <p>info@gmail.com</p>

                    </div>
                    <div className="icons">
                        <div className="icon">
                           <FaXTwitter/>
                        </div>
                        <div className="icon">
                           <FaFacebookF/>
                        </div>
                        <div className="icon">
                           <AiFillInstagram/>
                        </div>
                        <div className="icon">
                           <FaLinkedin/>
                        </div>
                        
                    </div>
                </div>
                <div className="form_container">
                    <h3>send us a massage</h3>
                      <div className="form">
                        <div className="input_box">
                            <input type="text" placeholder="Your Name"></input>
                        </div>
                        <div className="input_box">
                            <input type="text" placeholder="Your e-mail address"></input>
                        </div>
                        <div className="input_box">
                            <input type="text" placeholder="+94 768543109"></input>
                        </div>
                        <div className="input_box">
                            <textarea placeholder="write your massage here"></textarea>
                        </div>
                        <div className="btn">
                            <button>
                                <span>Send Massage</span>
                                <div className="icon">
                                    <IoIosSend />

                                </div>

                            </button>

                        </div>

                      </div>

                </div>

            </div>

        </div>
        </>
    )
}

export default Footer