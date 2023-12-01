import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../asset/style.css";

// import required modules
import { Navigation } from "swiper/modules";
import axios from "axios";

const Service = () => {
  const [data, setData] = useState([]);
  const APIKEY = "40939984-532a54dc2a60cd1e024ff0e18";
  const TEXT = "직원";

  useEffect(() => {
    const URL = `https://pixabay.com/api/?key=${APIKEY}&q=${TEXT}&image_type=photo&lang=ko`;
    const getData = async () => {
      try {
        const res = await axios.get(URL);
        setData(res.data.hits);
        console.log("성공", res.data.hits);
      } catch (err) {
        console.log("오류", err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data &&
          data.map((image) => (
            <SwiperSlide>
              <img key={image.id} src={image.webformatURL} alt={image.tags} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Service;
