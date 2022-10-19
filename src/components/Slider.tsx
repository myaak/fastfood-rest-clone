import { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from "swiper";
import { slides } from '../constants/constants'
import '../index.css'
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";

function getWindowSize() {
    const { innerWidth: width, innerWidth: height} = window

    return {
        width, height
    }
}


const Slider = () =>  useMemo(() => {
    console.log(1)
    const swiperSlide = 'mr-[19px] md:max-w-[1200px] md:h-[400px] max-w-[320px] h-[140px]'
    const width = getWindowSize().width
    return(
        <div className="slider-wrap-mobile mb-[29px] md:max-w-[1220px] md:max-h-[400px] z-[1]">
            <div className=" ml-[19px] block z-[-1]">
            <Swiper
                slidesPerView={width <= 639 ? 1.2 : 1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: width <= 640 ? 3000 : 20000
                }}
                
                navigation={width >= 640 ? true : false}
                modules={[width <= 640 ? Autoplay : Pagination, Pagination, Navigation]}
                className="md:h-[400px] h-[140px] md:rounded-2xl block w-full mySwiper"
            >
                {
                    slides.map((item, index) => (
                    <SwiperSlide key={item.id} className={swiperSlide}>
                        <img className="object-fit h-full w-full" src={item.image} alt="123" />
                    </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    )
},[])

export default Slider