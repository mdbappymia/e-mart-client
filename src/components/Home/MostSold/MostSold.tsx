import React from "react";

const MostSold = () => {
  return (
    <div className="py-10 bg-black hover:bg-gray-900 text-white">
      <h1 className="text-center font-bold uppercase text-xl my-20">
        Most Sold Product
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3 grid grid-cols-2 gap-5">
            <div className="bg-slate-500 h-20">1</div>
            <div className="bg-slate-500 h-20">1</div>
            <div className="bg-slate-500 h-20">1</div>
            <div className="bg-slate-500 h-20">1</div>
            <div className="bg-slate-500 h-20">1</div>
            <div className="bg-slate-500 h-20">1</div>
            <div className="bg-slate-500 h-20">1</div>
            <div className="bg-slate-500 h-20">1</div>
          </div>
          <div className="h-full bg-slate-500">right</div>
        </div>
      </div>
    </div>
  );
};

export default MostSold;
