import React from "react";

const HomeProducts = () => {
  return (
    <div className="bg-black text-white py-10 hover:bg-gray-900">
      <h1 className="text-center font-bold uppercase text-xl my-20">
        Explore our Products
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <div className="flex justify-center items-center h-60 bg-slate-600">
            product
          </div>
          <div className="flex justify-center items-center h-60 bg-slate-600">
            product
          </div>
          <div className="flex justify-center items-center h-60 bg-slate-600">
            product
          </div>
          <div className="flex justify-center items-center h-60 bg-slate-600">
            product
          </div>
          <div className="flex justify-center items-center h-60 bg-slate-600">
            product
          </div>
          <div className="flex justify-center items-center h-60 bg-slate-600">
            product
          </div>
        </div>
        <div className="my-10 flex justify-center">
          <button className="px-10 py-4 border border-gray-500 font-bold hover:bg-slate-800 hover:rounded">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
