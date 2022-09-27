import React from "react";

const NewArrival = () => {
  return (
    <div className="bg-black py-10 hover:bg-gray-800">
      <div className="flex justify-between container mx-auto my-5 pb-10">
        <h1 className="text-center font-bold text-2xl text-white uppercase ">
          New Arrival
        </h1>
        <div>
          <nav className="flex sm:justify-center space-x-4">
            {[
              ["Laptops", "/laptop"],
              ["Smart Phones", "/smartPhones"],
              ["Accessories", "/accessories"],
              ["Cameras", "/cameras"],
            ].map(([title, url], i) => (
              <a
                key={i}
                href={url}
                className="rounded-lg px-3 py-2 text-slate-300 font-medium hover:bg-slate-100 hover:text-slate-900"
              >
                {title}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="container mx-auto grid text-white grid-cols-10 gap-4">
        <div className="col-span-3">
          <h1 className="bg-red-300 h-96">left</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 col-span-7">
          <div className="bg-red-300">1</div>
          <div className="bg-red-300">2</div>
          <div className="bg-red-300">3</div>
          <div className="bg-red-300">1</div>
          <div className="bg-red-300">2</div>
          <div className="bg-red-300">3</div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
