import React from 'react'
import './header.css'
const Header =() => {
    return (
        <>
        <div className='header'> 
            <div className='navbar'>
                <div className='logo'>
                    <img src='img/logo.jpg' />

                </div>
                <div className='nawlink'>
                    <ul>
                        <li><a href='#'>home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>portfolio</a></li>
                        <li><a href='#'>contact</a></li>
                    </ul>

                </div>

            </div>
            <div className='btn'>
                <button>contact us</button>

            </div>



        </div>
        </>
    )
}
export default Header;