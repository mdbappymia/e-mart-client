const Offers = () => {
  return (
    <div className="py-10 bg-black hover:bg-gray-900">
      <h1 className="text-center font-bold text-xl text-white my-20">
        Offer Only For You
      </h1>
      <div className="container mx-auto  grid offer-grid gap-2">
        <div className="h-72">
          <div>
            <div className="h-72 relative">
              <img
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="h-72">
          <div>
            <div className="h-72 relative">
              <img
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="h-72">
          <div>
            <div className="h-72 relative">
              <img
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
