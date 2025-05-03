import React from 'react'
import './home.css'
import { IoIosCall } from "react-icons/io";
const Home =() =>{
    return (
        <>
        <div className='home'>
            <div className='container'>
            <div className='details'>
                <div className='info'>
                    <h2>A creative design studio</h2>
                    <p>We're a creative design studio speclalizing in meeting the needs of the new geeration. </p>


                </div>
                <div className='user'>
                    <div className='userimg_box'>
                        <img src='img/p.png' width={50}/>
                        <img src='img/pppp.jpg'width={50} />
                        <img src='img/pp.jpg' width={50} />
                        
                        

                    </div>
                   <p>Believed by more then a thousand people</p>
                </div>
                   <div className='button'>
                         <a href="#">Book a free consluation</a>
                         <div className='icon'>
                         <IoIosCall/>

                         </div>
                   </div>
            </div>
            <div className='img_box'>
                <img src="img/ppppp.jpg" />

            </div>

            </div>

        </div>
        </>

    )
}

export default Home