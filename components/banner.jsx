import React from "react";
import SubscribeForm from "./subscribeForm";

export default function Banner() {
  return (
    <div className="text-center bg-gradient-t-teall h-full z-10">
      <div className="absolute right-0">
        <img src="/static/svg/topbg.svg" />
      </div>
      <div className="absolute z-0 mt-20 -ml-4">
        <img src="/static/svg/circle.svg" />
      </div>
      <div className="absolute z-0 mt-48 right-0">
        <img src="/static/svg/circle.svg" />
      </div>
      <div className="p-4 z-10 relative pt-10">
        <div className="flex justify-center">
        <div className="border-4 border-white rounded-lg mb-5 p-4">
          <h1 className="text-5xl w-full text-white tracking-wide md:text-6xl">
            Laravel Real ECommerce
          </h1>
        </div>
        </div>
        <h2 className="text-xl text-center text-white bg-teal md:text-2xl">
          A premium course with step-by-step guide to create a real world
          ecommerce website using Laravel.
        </h2>
        <SubscribeForm />
        <div className="text-yellow-200 my-4 tracking-wider">
          <h2 className="text-xl font-light mt-8">
            May be you can also win a 99% off coupon
          </h2>
        </div>
      </div>
    </div>
  );
}
