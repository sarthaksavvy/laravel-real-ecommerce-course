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
      <div className="bg-gradient-t-teall text-center text-white h-full py-24 px-2">
        <h1 className="text-4xl w-full tracking-wide underline md:text-5xl">
          Laravel Ecommerce Course
        </h1>
        <h2 className="text-xl font-light md:text-2xl">
          Get a chance to win 99% of coupon. (But why not 100% off coupon
          because "People doesn't care about Free things.")
        </h2>
        <div className="px-0">
          <h2 className="text-xl font-light md:text-2xl mt-4">
            Sign Up to newsletter and get notified about course progress and
            early discount.
          </h2>
        </div>
        <div className="px-4">
          <SubscribeForm />
        </div>
      </div>
      <footer className="w-full text-center py-4">
        <div className="flex justify-center">
          <a href="https://bitfumes.com" className="text-sm text-blue-500">
            © Bitfumes
          </a>
          <p className="text-sm"> - All Rights Lefts Everything Reserved 😄</p>
        </div>
      </footer>
    </>
  );
}
