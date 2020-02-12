import React from "react";

export default function Learn() {
  const lists = [
    "Varients Product",
    "Varients Product",
    "Shipping & Invoice",
    "Coupon & Promotions",
    "Stripe & Paypal Integrations"
  ];
  return (
    <div className="h-full py-24">
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
        <div className="flex flex-wrap justify-center w-9/12">

<div className="px-4 w-full md:w-1/2">
        <div className="flex flex-wrap justify-center">
          <h2 className="text-3xl w-full text-center md:text-4xl">
            How this course is helpful ?
          </h2>
          <p>How to create a real world project.</p>
        </div>
      </div>
      <div className="px-4 w-full md:w-1/2">
        <div className="flex flex-wrap justify-center">
          <h2 className="text-3xl w-full text-center md:text-4xl">
            What you will Learn ?
          </h2>
          <ul className="my-4 p-2">
            {lists.map((list, i) => (
              <li className="flex justify-center p-3 md:p-4" key={i}>
                <span className="fas fa-check bg-green-400 text-green-900 text-sm rounded-full w-6 h-6 text-center pt-1 mt-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 md:my-2" />
                <p className="px-2 w-11/12 text-lg md:px-5 md:text-2xl">
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
  );
}
