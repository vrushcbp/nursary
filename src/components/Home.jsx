import { images } from "../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Testimonials from "./layout/Testimonials";
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    // Trigger zoom after component mounts
    const timer = setTimeout(() => setZoom(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>  
      <div className="h-screen w-full overflow-hidden relative">
        <div
          className={`h-full w-full bg-cover bg-center transform transition-transform duration-[8000ms] ease-out ${
            zoom ? "scale-110" : "scale-100"
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1688029255541-8b4b06a4c397?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl  mb-4">
              Welcome to the Green World
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Discover the beauty and benefits of plants
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition">
              Explore Now
            </button>
          </div>
        </div>
      </div>
      <div className="  flex flex-col justify-center items-center p-10">
        <h2 className="text-2xl text-center md:text-3xl lg:text-5xl  text-#333232 mb-2 ">
          Our Plant Collection
        </h2>
          <p className="text-center lg:mb-8 mb-2 text-gray-500">Explore nature’s beauty with our handpicked variety of plants, perfect for every space.</p>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="w-full max-w-6xl"
        >
          {images.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                <img
                  src={url}
                  alt={`Plant ${index}`}
                  className="w-full h-70 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Testimonials />
    </>
  );
};

export default Home;
