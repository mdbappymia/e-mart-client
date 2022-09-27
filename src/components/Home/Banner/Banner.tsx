import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="home-slider py-20">
          <div className="slider-height container mx-auto">
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
                <div className="flex justify-center">
                  <div className="block p-6 rounded-lg">
                    <h1 className="text-gray-900 text-4xl leading-tight font-medium mb-2">
                      Wireless Headphones
                    </h1>
                    <p className="text-gray-700 text-base mb-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Id fugiat ex aperiam minus, sequi nulla laborum mollitia
                      quos illo expedita unde rem velit perferendis sed
                      possimus, animi aliquam? Atque laudantium libero dolorem.
                      Minus modi impedit recusandae, ipsa veniam temporibus
                      error veritatis itaque nihil reprehenderit commodi
                      sapiente, vel pariatur inventore dignissimos!
                    </p>
                    <button
                      type="button"
                      className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <img className="px-20" src="/images/product-37.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="home-slider py-20">
          <div className="slider-height container mx-auto">
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
                <div className="flex justify-center">
                  <div className="block p-6 rounded-lg">
                    <h1 className="text-gray-900 text-4xl leading-tight font-medium mb-2">
                      Wireless Headphones
                    </h1>
                    <p className="text-gray-700 text-base mb-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nisi distinctio minima natus repellat excepturi fugit quod
                      nostrum nesciunt, ipsum nam quam, quibusdam laborum.
                      Repellendus minus necessitatibus soluta cumque a. Maxime,
                      quaerat vero ab sequi quisquam odio facere asperiores
                      velit omnis perspiciatis ratione? Fugit soluta unde
                      perferendis facilis fuga aliquid dignissimos.
                    </p>
                    <button
                      type="button"
                      className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <img
                  className="px-20"
                  height="50%"
                  width="100%"
                  src="/images/product-38.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="home-slider py-20">
          <div className="slider-height container mx-auto">
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
                <div className="flex justify-center">
                  <div className="block p-6 rounded-lg">
                    <h1 className="text-gray-900 text-4xl leading-tight font-medium mb-2">
                      Smart Watch
                    </h1>
                    <p className="text-gray-700 text-base mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Provident, nihil explicabo? Quam voluptatum aliquid neque
                      recusandae vel delectus ad? Harum itaque quo, quod dolorum
                      delectus atque maxime placeat voluptatum repudiandae alias
                      debitis deserunt magni ad quae modi in. Quas atque qui
                      possimus debitis commodi neque eaque nam nulla cupiditate
                      pariatur.
                    </p>
                    <button
                      type="button"
                      className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <img
                  className="px-20"
                  height="50%"
                  width="100%"
                  src="/images/product-39.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
