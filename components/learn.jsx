import React from "react";

export default function Learn() {
  const lists = [
    "Varients Product",
    "Multiple User Address",
    "Shipping & Invoice",
    "Coupon & Promotions",
    "Stripe & Paypal Integrations"
  ];
  return (
    <div
      id="learn"
      className="h-full py-24 bg-repeat bg-fixed"
      style={{ backgroundImage: "url('/static/svg/topography.svg')" }}
    >
      <div className="absolute z-0 mt-10 -ml-5 opacity-25">
        <img src="/static/svg/circle.svg" />
      </div>
      <div className="absolute z-0 mt-48 right-0 opacity-25">
        <img src="/static/svg/circle.svg" />
      </div>
      <div className="absolute z-0 mt-64 -ml-2 opacity-50">
        <img src="/static/svg/circle.svg" />
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-around w-full md:w-10/12">
          <div className="w-full md:w-6/12">
            <div className="flex flex-wrap justify-center">
              <h2 className="text-4xl w-full text-center md:text-5xl underline">
                How this course is helpful?
              </h2>
              <div className=" text-xl md:text-2xl py-5 w-10/12">
                <p className="py-4">
                  What could be the thinking process and how to approach any
                  project before jumping into coding.
                </p>
                <p className="py-4">
                  How to design database before writing any migration.
                </p>
                <p className="py-4">
                  How to start a real world project from scratch using Test
                  Driven Development.
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 pt-10 w-full md:w-6/12 md:pt-0">
            <div className="flex flex-wrap justify-center">
              <h2 className="text-4xl w-full text-center md:text-5xl underline">
                What you will Learn?
              </h2>
              <div className="">
                <ul className="my-4 py-2 w-full">
                  {lists.map((list, i) => (
                    <li className="flex justify-center p-3 md:p-4" key={i}>
                      <span className="fas fa-check bg-green-400 text-green-900 text-sm rounded-full w-6 h-6 text-center shadow-lg pt-1 mt-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 md:my-2" />
                      <p className="px-2 w-11/12 text-xl md:w-full md:px-5 md:text-2xl">
                        {list}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
