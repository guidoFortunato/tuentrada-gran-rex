import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const GaleriaHistoria = () => {
  return (
    
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      loop
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        <img src="https://picsum.photos/300/200" alt="img slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/300/200" alt="img slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/300/200" alt="img slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/300/200" alt="img slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/300/200" alt="img slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/300/200" alt="img slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/300/200" alt="img slide" />
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};

