// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./menu-carousel.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";

import Section from "./section";
import Costumers from "../costumers";

export default () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      // Inicializar o movimento automático
      const autoSlideInterval = setInterval(() => {
        swiperInstance.slideNext(); // Mover para o próximo slide
        clearInterval(autoSlideInterval); // Interromper após o primeiro slide
      }, 1000); // Intervalo de 3 segundos

      return () => {
        // Limpar o intervalo quando o componente for desmontado
        clearInterval(autoSlideInterval);
      };
    }
  }, [swiperInstance]);

  return (
    <main>
      <div className="images" id="pricing">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          onSwiper={setSwiperInstance}
          // spaceBetween={-100} // Ajuste o valor conforme necessário
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} />
            <p className="country">Brasil</p>
            <p className="price">6000R$</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
            <p className="country">Califórnia</p>
            <p className="price">9000R$</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
            <p className="country">Canadá</p>
            <p className="price">7000R$</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} />
            <p className="country">Europa</p>
            <p className="price">5000R$</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} />
            <p className="country">Nova York</p>
            <p className="price">8000R$</p>
          </SwiperSlide>
        </Swiper>
      </div>
      <Section/>
      <Costumers/>
    </main>
  );
};
