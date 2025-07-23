import { div } from 'framer-motion/client'
import React from'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './portifolio.css';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const portifolio = () => {
    return (
        <div className='portifolio'>
            <div className='container'>
                <div className='title'>
                    <h2>Have a wide range of creative projects</h2>

                </div>
                 <div className='img_slider'>
                 <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={false}
        keyboard={{
          enabled: true,
        }}
       
        scrollbar={true}
        
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
           <SwiperSlide>
            <div className='slide_box'>
              <div className='details'>
                      <h3>product Design</h3>
                      <p>DEveloping the look and feel of physical products, aesthetics and functionality.</p>
              </div>
              <div className='img_box'>
                <img src='img/image5.jpg' width={100} height={450} />

              </div>

            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='slide_box'>
              <div className='details'>
                      <h3>Logo and Branding</h3>
                      <p>DEveloping the look and feel of physical products, aesthetics and functionality.</p>
              </div>
              <div className='img_box'>
                <img src='img/image3.jpg'width={100} height={450} />

              </div>

            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='slide_box'>
              <div className='details'>
                      <h3>App UI/UX Design</h3>
                      <p>DEveloping the look and feel of physical products, aesthetics and functionality.</p>
              </div>
              <div className='img_box'>
                <img src='img/image2.jpg'width={100} height={450} />

              </div>

            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='slide_box'>
              <div className='details'>
                      <h3>Packaging Design</h3>
                      <p>DEveloping the look and feel of physical products, aesthetics and functionality.</p>
              </div>
              <div className='img_box'>
                <img src='img/image1.jpg' width={100} height={450} />

              </div>

            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='slide_box'>
              <div className='details'>
                      <h3>product Design</h3>
                      <p>DEveloping the look and feel of physical products, aesthetics and functionality.</p>
              </div>
              <div className='img_box'>
                <img src='img/image5.jpg'width={100} height={450} />

              </div>

            </div>
           </SwiperSlide>
      </Swiper>  
                 </div>
            </div>

        </div>
    )
}
export default portifolio 