import "./homeFooter.css";
import img from "../imgs/logo.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

const HomeFooter = () => {
  return (
    <div className="home__footer">
      <h3>Empresas que mudaram suas vendas com a Neoway</h3>
      <div className="home__footer-logos">

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default HomeFooter;