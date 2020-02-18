import React from "react";

export default function Whomi() {
  return (
    <div
      className="shadow-md py-24 px-4 bg-repeat bg-fixed"
      style={{ backgroundImage: "url('/static/svg/topography.svg')" }}
    >
      <h2 className="text-3xl text-center underline md:text-5xl">About Me</h2>
      <div className="py-4 text-black flex flex-wrap">
        <div className="text-center w-full md:w-4/12">
          <div className="flex justify-center">
            <img
              src="https://pbs.twimg.com/profile_images/1109897807735873536/shv8rkm-_200x200.jpg"
              alt="sarthaksavvy"
              className="rounded-full border shadow-lg border border-b-4 border-blue-400"
            />
          </div>

          <div className="py-4">
            <a
              href="https://twitter.com/sarthaksavvy?ref_src=twsrc%5Etfw"
              className="twitter-follow-button"
              data-show-count="false"
              className="shadow-lg"
              target="_blank"
            >
              Follow @Sarthaksavvy
            </a>
          </div>
        </div>

        <div className="w-full md:w-8/12">
          <p className="text-xl md:text-2xl p-2">
            Hii, I'm Sarthak Shrivastava, founder of{" "}
            <a href="https://bitfumes.com" className="link">
              Bitfumes
            </a>
            , a full stack developer, passionate speaker and online instructor.
          </p>
          <p className="text-xl p-2 md:text-2xl md:p-4">
            For the last 4 years, I'm teaching Laravel and web development
            related stuffs on{" "}
            <a href="https://youtube.com/bitfumes" className="link">
              youtube{" "}
            </a>
            with more than 44k subscribers.
          </p>
          <p className="text-xl p-2 md:text-2xl md:p-4">
            I have already Published many free and paid courses on various
            platforms.
          </p>
          <p className="text-xl p-2 md:text-2xl md:p-4">
            I Work with open sourced technologies and also creating many laravel{" "}
            <a href="https://github.com/sarthaksavvy" className="link">
              open source package
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
