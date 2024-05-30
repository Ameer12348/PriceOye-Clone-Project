import { useNavigate } from "react-router-dom";

const ShopByPrice = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto mt-2 px-2 py-10 2xl:container">
      <div className=" flex justify-between  px-3 py-10 ">
        <h2 className="text-lg font-medium dark:text-white">Shop By Price</h2>
        <a className="text-lg text-blue-400">View All</a>
      </div>
      <div className="grid grid-cols-2 gap-2 px-4 sm:px-6 md:grid-cols-3 md:px-10 lg:grid-cols-4">
        <div className="group/price relative cursor-pointer overflow-hidden rounded-xl bg-yellow-300 py-4 text-center text-sm font-medium tracking-wide dark:bg-yellow-600">
          <div
            className="relative z-50 group-hover/price:text-white"
            onClick={() => {
              navigate("/searchproduct/all?pricing=1to15000");
            }}
          >
            {" "}
            Below Rs. 15,000
          </div>
          <div className="absolute bottom-0 z-10 duration-300  group-hover/price:h-full group-hover/price:w-full group-hover/price:bg-blue-600 "></div>
        </div>
        <div className="group/price relative cursor-pointer overflow-hidden rounded-xl bg-yellow-300 py-4 text-center text-sm font-medium tracking-wide dark:bg-yellow-600">
          <div
            className="relative z-50 group-hover/price:text-white"
            onClick={() => {
              navigate("/searchproduct/all?pricing=15000to25000");
            }}
          >
            {" "}
            Rs. 15,000 - Rs. 25,000
          </div>
          <div className="absolute bottom-0 z-10 duration-300  group-hover/price:h-full group-hover/price:w-full group-hover/price:bg-blue-600 "></div>
        </div>
        <div className="group/price relative cursor-pointer overflow-hidden rounded-xl bg-yellow-300 py-4 text-center text-sm font-medium tracking-wide dark:bg-yellow-600">
          <div
            className="relative z-50 group-hover/price:text-white"
            onClick={() => {
              navigate("/searchproduct/all?pricing=25000to40000");
            }}
          >
            {" "}
            Rs. 25,000 - Rs. 40,000
          </div>
          <div className="absolute bottom-0 z-10 duration-300  group-hover/price:h-full group-hover/price:w-full group-hover/price:bg-blue-600 "></div>
        </div>
        <div className="group/price relative cursor-pointer overflow-hidden rounded-xl bg-yellow-300 py-4 text-center text-sm font-medium tracking-wide dark:bg-yellow-600">
          <div
            className="relative z-50 group-hover/price:text-white"
            onClick={() => {
              navigate("/searchproduct/all?pricing=40000to60000");
            }}
          >
            {" "}
            Rs. 40,000 - Rs. 60,000
          </div>
          <div className="absolute bottom-0 z-10 duration-300  group-hover/price:h-full group-hover/price:w-full group-hover/price:bg-blue-600 "></div>
        </div>
        <div className="group/price relative cursor-pointer overflow-hidden rounded-xl bg-yellow-300 py-4 text-center text-sm font-medium tracking-wide dark:bg-yellow-600">
          <div
            className="relative z-50 group-hover/price:text-white"
            onClick={() => {
              navigate("/searchproduct/all?pricing=60000to80000");
            }}
          >
            {" "}
            Rs. 60,000 - Rs. 80,000
          </div>
          <div className="absolute bottom-0 z-10 duration-300  group-hover/price:h-full group-hover/price:w-full group-hover/price:bg-blue-600 "></div>
        </div>
        <div className="group/price relative cursor-pointer overflow-hidden rounded-xl bg-yellow-300 py-4 text-center text-sm font-medium tracking-wide dark:bg-yellow-600">
          <div
            className="relative z-50 group-hover/price:text-white"
            onClick={() => {
              navigate("/searchproduct/all?pricing=80000to100000");
            }}
          >
            {" "}
            Rs. 80,000 - Rs. 100,000
          </div>
          <div className="absolute bottom-0 z-10 duration-300  group-hover/price:h-full group-hover/price:w-full group-hover/price:bg-blue-600 "></div>
        </div>
        <div className="group/price relative cursor-pointer overflow-hidden rounded-xl bg-yellow-300 py-4 text-center text-sm font-medium tracking-wide dark:bg-yellow-600">
          <div
            className="relative z-50 group-hover/price:text-white"
            onClick={() => {
              navigate("/searchproduct/all?pricing=100000to150000");
            }}
          >
            {" "}
            Rs. 100,000 - Rs. 150,000
          </div>
          <div className="absolute bottom-0 z-10 duration-300  group-hover/price:h-full group-hover/price:w-full group-hover/price:bg-blue-600 "></div>
        </div>
        <div className="group/price relative cursor-pointer overflow-hidden rounded-xl bg-yellow-300 py-4 text-center text-sm font-medium tracking-wide dark:bg-yellow-600">
          <div
            className="relative z-50 group-hover/price:text-white"
            onClick={() => {
              navigate("/searchproduct/all?pricing=150000to1000000");
            }}
          >
            {" "}
            Above Rs. 150,000{" "}
          </div>
          <div className="absolute bottom-0 z-10 duration-300  group-hover/price:h-full group-hover/price:w-full group-hover/price:bg-blue-600 "></div>
        </div>
      </div>
    </div>
  );
};

export default ShopByPrice;
