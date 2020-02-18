import React, { useCallback } from "react";
import SubscribeForm from "./subscribeForm";

export default function Banner() {
  const scrollTo = React.useRef();
  const [atTop, setatTop] = React.useState(true);
  const changeTopValue = React.useCallback(() => {
    setatTop(window.scrollY < 50);
  }, [atTop]);

  React.useEffect(() => {
    window.addEventListener("scroll", changeTopValue);
    return () => {
      window.removeEventListener("scroll", changeTopValue);
    };
  }, []);

  function scrollDown(e) {
    e.preventDefault();
    scrollTo.current.scrollIntoView({ behavior: "smooth", top: 100 });
  }
  return (
    <div className="text-center bg-gradient-t-teall h-full min-h-screen z-10">
      <div className="absolute right-0">
        <img src="/static/svg/topbg.svg" />
      </div>
      <div className="absolute z-0 mt-20 -ml-4">
        <img src="/static/svg/circle.svg" />
      </div>
      <div className="absolute z-0 mt-48 right-0">
        <img src="/static/svg/circle.svg" />
      </div>
      {atTop ? (
        <div
          className="bottom-0 z-20 inset-x-0 mb-3 text-white cursor-pointer fixed opacity-50"
          onClick={scrollDown}
        >
          <div className="inline-block align-middle border-2 border-white rounded-full bg-gray-800 w-8 h-8 transform hover:scale-125">
            <span className="fas fa-angle-down text-2xl pt-1" />
          </div>
        </div>
      ) : null}
      <div className="p-4 z-10 relative pt-10 md:pt-32">
        <div className="flex justify-center">
          <div className="border-4 border-white rounded-lg mb-5 p-4 md:px-10">
            <h1 className="text-5xl w-full text-white tracking-wide leading-tight md:leading-loose  md:text-6xl">
              Laravel ECommerce Course
            </h1>
            <p className="text-white text-lg tracking-wide">
              It's not just a course, it's a Journey
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="md:w-8/12">
            <h2 className="text-xl w-full text-center text-white bg-teal md:text-2xl md:pt-10">
              An amazing course with step-by-step guide to create a real world
              ecommerce website using Laravel, Reactjs and Tailwindcss.
            </h2>
            <h2 className="text-xl w-full text-center text-white bg-teal py-4 md:text-2xl">
              ⭐ Come fast, hold your breath (not too long 😆) and fasten your
              seat belt.⭐
            </h2>
          </div>
        </div>
        <div ref={scrollTo}>
          <SubscribeForm />
        </div>
        <div className="text-yellow-200 tracking-wider">
          <h2 className="text-xl font-light">
            Subscribe and get a chance win a 99% off coupon.
          </h2>
        </div>
      </div>
    </div>
  );
}
