import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./main.css";
import "swiper/css";
import 'swiper/css/pagination';
import SlideImgOne from "../../image/background-slide__one.jpg";
import SlideImgTwo from "../../image/background-slide__two.png";
import SlideImgThree from "../../image/background-slide__three.jpg";
import { Pagination } from 'swiper/modules';

const Main = () => {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={SlideImgOne} alt="" className="slide__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlideImgTwo} alt="" className="slide__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlideImgThree} alt="" className="slide__img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Main;
