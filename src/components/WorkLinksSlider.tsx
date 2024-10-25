import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { workLinks } from "../dataBase/workLinks";
import arrowButton from "/workLinksImages/arrow.png";
import "swiper/scss";
import "swiper/scss/pagination";
import "../styles/WorkLinksSlider.scss";

const slideList = workLinks.map(slide => 
  <SwiperSlide key={slide.id}>
    <a href={slide.link} rel="noopener" target="_blank" className="work__slide">
      <img src={slide.imgSrc} alt={slide.imgAlt} />
    </a>
  </SwiperSlide>
);

export default function WorkLinksSlider() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef: any = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [realIndex, setIndex] = useState(0);

  return (
    <>
      <div className="navigation__buttons">
        <button
          ref={prevRef}
          disabled={realIndex == 1}
          onClick={() => {
            setIndex(sliderRef.current?.swiper.realIndex);
          }}
        >
          <img src={arrowButton} alt="#" className="button__prev" />
        </button>

        <button
          ref={nextRef}
          onClick={() => {
            setIndex(sliderRef.current?.swiper.realIndex);
          }}
        >
          <img src={arrowButton} alt="#" className="button__next" />
        </button>
      </div>

      <Swiper ref={sliderRef}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
    
        slidesPerView={4}
        spaceBetween={20}
        slidesPerGroup={4}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="works"
      >
        {slideList}
      </Swiper>
    </>
  );
} 