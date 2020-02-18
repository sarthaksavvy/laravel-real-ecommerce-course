import React from "react";

export default function SubscribeForm() {
  return (
    <div className="py-6">
      <p className="text-lg text-white my-3 tracking-wide">
        Pack your tools, Journey starts early 2020
      </p>
      <form className="flex justify-center" onSubmit={handleForm}>
        <input
          type="submit"
          value="Notify Me"
          className="rounded-tl-lg py-2 px-4 text-lg font-bold bg-yellow-500 text-black outline-none md:py-3"
        />
        <input
          type="email"
          placeholder="Your Great Email"
          required
          className="rounded-br-lg py-2 pl-4 text-lg bg-white w-64 outline-none"
        />
      </form>
    </div>
  );

  function handleForm(e) {
    e.preventDefault();
  }
}
