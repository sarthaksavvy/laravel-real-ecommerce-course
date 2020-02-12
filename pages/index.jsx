import React from "react";
import "../assets/style.css";
import SubscribeForm from "../components/subscribeForm";
import Banner from "../components/banner";
import Whomi from "../components/whomi";
import WhoIsThis from "../components/whoIsThis";
import Learn from "../components/learn";

export default function Index() {
  return (
    <>
      <Banner />
      <Learn />
      <WhoIsThis />
      <Whomi />
      <div className="bg-gradient-t-teall text-center text-white h-full py-24">
        <h1 className="text-4xl w-full tracking-wide">
          Laravel Real Ecommerce Course
        </h1>
        <div className="px-4">
          <h2 className="text-xl font-light md:text-2xl">
            Follow me on this amazing journey and get a chance to win 99% off
            coupon.
          </h2>
          <h2 className="text-xl font-light md:text-2xl mt-4">
            Sign Up to newsletter and get notified about course progress and
            early discount.
          </h2>
        </div>
        <SubscribeForm />
      </div>
    </>
  );
}
