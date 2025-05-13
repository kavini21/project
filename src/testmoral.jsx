import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import './testmoral.css'
import { useState } from "react";
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

        </div>
     </>
    )
}

export default Testmoral