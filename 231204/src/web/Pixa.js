import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../asset/style/swiper.css";
import axios from "axios";

const Pixa = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const APIKEY = "40939984-532a54dc2a60cd1e024ff0e18";
    const TEXT = "고양이";
    const URL = `https://pixabay.com/api/?key=${APIKEY}&q=${TEXT}&image_type=photo`;

    const getData = async () => {
      const imgs = await axios.get(URL);
      // slice 배열의 갯수를 정한다
      setData(imgs.data.hits.slice(0, 10));
    };
    getData();
  }, []);
  return (
    <article>
      <Swiper
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.largeImageURL} alt={img.type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default Pixa;
