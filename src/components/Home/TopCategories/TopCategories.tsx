import { Button } from "@material-tailwind/react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { RootState } from "../../../redux/store/store";

const TopCategories: FC = () => {
  const categories = useSelector(
    (state: RootState) => state.product.categories
  );
  return (
    <div className="py-10">
      <h1 className="text-center font bold uppercase my-20 text-xl font-bold">
        Top Categories
      </h1>
      <div className="container mx-auto h-48">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {categories.map((category: string) => (
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <Button className="text-center font-bold uppercase text-3xl px-4 py-2 bg-blue-900">
                  {category}
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopCategories;
