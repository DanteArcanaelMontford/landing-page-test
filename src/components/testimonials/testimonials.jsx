import "./testimonials.css";
import TestimonialCard from "./testimonialCard";
import perfil_1 from "../imgs/perfil 1.png";
import perfil_2 from "../imgs/perfil 2.png";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <section className="section__testimonials">
      <h3>Depoimentos de quem já lidera o Futuro</h3>
      <div className="testimonials__container">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >

          <SwiperSlide>
            <TestimonialCard img={perfil_1} name={"Nome da Pessoa"} company={"Empresa"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </TestimonialCard>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard img={perfil_2} name={"Nome da Pessoa"} company={"Empresa"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </TestimonialCard>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard img={perfil_2} name={"Nome da Pessoa"} company={"Empresa"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </TestimonialCard>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard img={perfil_2} name={"Nome da Pessoa"} company={"Empresa"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </TestimonialCard>
          </SwiperSlide>

        </Swiper>



      </div>
    </section>
  )
}

export default Testimonials;