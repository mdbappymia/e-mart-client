import React, { FC } from "react";
import Banner from "../../components/Home/Banner/Banner";
import HomeProducts from "../../components/Home/HomeProducts/HomeProducts";
import HotDeal from "../../components/Home/HotDeal/HotDeal";
import MostSold from "../../components/Home/MostSold/MostSold";
import NewArrival from "../../components/Home/NewArrival/NewArrival";
import Offers from "../../components/Home/Offers/Offers";
import TopCategories from "../../components/Home/TopCategories/TopCategories";
import UserFeedback from "../../components/Home/UserFeedback/UserFeedback";

const Home: FC = () => {
  return (
    <div>
      <Banner />
      <Offers />
      <TopCategories />
      <HomeProducts />
      <HotDeal />
      <NewArrival />
      <UserFeedback />
      <MostSold />
    </div>
  );
};

export default Home;
