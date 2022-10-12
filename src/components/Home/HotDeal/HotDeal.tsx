import React, { useState } from "react";

const HotDeal = () => {
  const [time, setTime] = useState("00:00:00:00");
  setInterval(() => {
    const assignDate = new Date("September 26, 2022 GMT+06:00");
    if (assignDate < new Date()) {
      return;
    }
    const totalSec: number = (+assignDate - +new Date()) / 1000;

    let day = 0,
      remainSecAfterDay,
      remainAfterHour,
      min,
      hour;

    day = parseInt(totalSec / 86400 + "");
    remainSecAfterDay = totalSec % 86400;
    hour = Math.floor(remainSecAfterDay / 3600);
    remainAfterHour = totalSec % 3600;
    min = Math.floor(remainAfterHour / 60);
    const remainSec = parseInt((remainAfterHour % 60) + "");
    setTime(
      `${day.toString().length === 1 ? "0" + day : day}:${
        hour.toString().length === 1 ? "0" + hour : hour + ""
      }:${min.toString().length === 1 ? "0" + min : min + ""}:${
        remainSec.toString().length === 1 ? "0" + remainSec : remainSec
      }`
    );
  }, 1000);
  return (
    <div className="py-10">
      <h1 className="text-center font-bold uppercase text-xl my-20">
        Hot Deal Component
      </h1>
      <div className="text-center my-10">
        <span className="px-6 py-5 rounded-full bg-black text-white text-3xl m-3">
          {time.split(":")[0]}
        </span>
        :
        <span className="px-6 py-5 rounded-full bg-black text-white text-3xl m-3">
          {time.split(":")[1]}
        </span>
        :
        <span className="px-6 py-5 rounded-full bg-black text-white text-3xl m-3">
          {time.split(":")[2]}
        </span>
        :
        <span className="px-6 py-5 rounded-full bg-black text-white text-3xl m-3">
          {time.split(":")[3]}
        </span>
      </div>
      <div className="flex justify-center">
        <button className="px-10 py-3 bg-black rounded font-bold text-gray-400 hover:text-gray-50 hover:bg-gray-800 my-5">
          Take Your Offer
        </button>
      </div>
    </div>
  );
};

export default HotDeal;
