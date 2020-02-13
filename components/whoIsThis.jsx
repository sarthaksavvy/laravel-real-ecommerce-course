import React from "react";

export default function WhoIsThis() {
  const lists = [
    "Laravel Lovers, who know the basics and wants to grow",
    "This course follows Test Driven Development (TDD) but no previous testing knowledge required.",
    "We use Nextjs (A Reactjs Framework), knowledge of basic Javascript or jquery is enough.",
    "If you are familier with bootstrap, then it will be easy to use tailwindcss.",
    "Those who want to learn clean and clear way of writing codes."
  ];
  return (
    <div className="py-24 px-4 h-full bg-gradient-t-teall text-white">
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
        <h2 className="text-4xl w-full text-center md:text-5xl underline">
          Who is this for?
        </h2>
        <ul className="my-4 py-2 md:w-1/2">
          {lists.map((list, i) => (
            <li className="flex justify-center p-3 md:p-4" key={i}>
              <span className="fas fa-star bg-yellow-400 text-yellow-900 text-sm rounded-full w-6 h-6 text-center pt-1 mt-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 md:my-2" />
              <p className="pl-2 w-11/12 text-lg md:px-5 md:text-2xl">{list}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
