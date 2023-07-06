"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Intro() {
  const data = [
    {
      img: "url(./images/slide1.png)",
      title: "Paving the way for the future of Business.",
      details:
        "For years, organisations across the world have faced challenges with delivering on their promises. We brings a new approach to deliver on your promises. Our unique project delivery framework ensures that every customer's needs are met at every stage of the project lifecycle. With this approach, we can help organisations create dramatic shifts in their business and achieve exponential growth.",
    },
    {
      img: "url(./images/slide2.png)",
      title:
        "Helping businesses innovate and adapt to stay ahead of the curve.",
      details:
        "CloudOlle uses a variety of strategies to help organizations, including focusing on customer experience, adopting agile methodologies, building a culture of innovation, embracing sustainability, and embracing emerging technologies. These strategies help CloudOlle deliver high-quality services that meet its clients' unique needs and enable them to stay ahead of the competition. By combining these approaches, CloudOlle helps its clients succeed in today's fast-paced and ever-changing business environment.",
    },
    {
      img: "url(./images/slide3.png)",
      title: "Staying on top of emerging trends and technologies",
      details:
        "CloudOlle empowers organizations to stay ahead of emerging trends and technologies through cloud migration, hosting, and management services, partnerships with leading technology providers, and a team of experts who stay up-to-date with the latest developments. Additionally, CloudOlle offers training programs to help organizations upskill their teams and stay competitive in the ever-evolving technology landscape.",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide
            style={{ backgroundImage: item.img }}
            className="slides"
            key={i}
          >
            <div className="content">
              <div>
              <h1>{item.title}</h1>
              <p>{item.details}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
