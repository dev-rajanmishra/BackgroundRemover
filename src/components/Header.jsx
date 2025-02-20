import React from "react";
import { assets } from "../assets/assets";

export const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px44 sm:mt-20 ml-40">
      {/*----------left side------------*/}
      <div className="mr-5">
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold  text-neutral-700 leading-tight ">
          Remove the <br className="max-md:hidden"></br>
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background{" "}
          </span>
          from <br className="max-md:hidden"></br>image for free.
        </h1>
        <p className="my-6 text-[15px] text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br className="max-sm:hidden"></br> Deserunt voluptas excepturi quam
          voluptatibus totam velit voluptatem aliquam itaque, quibusdam.
        </p>
        <div>
          <input type="file" id="uploade1" hidden />
          <label
            className="inline-flex gap-3 px-8 py-3.5  rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
            htmlFor="uploade1"
          >
            <img width={20} src={assets.upload_btn_icon}></img>
            <p className="text-white text-sm">Uploade your image</p>
          </label>
        </div>
      </div>
      {/*----------right side------------*/}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt=""></img>
      </div>
    </div>
  );
};
