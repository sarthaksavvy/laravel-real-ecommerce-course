import React from "react";
import setAxios from "../plugins/axios";
import flash from "../plugins/flash";
import Axios from "axios";

export default function SubscribeForm() {
  const [email, setemail] = React.useState();
  const [loading, setloading] = React.useState(false);

  React.useEffect(() => {
    setAxios();
  }, []);

  function handleInput(e) {
    e.preventDefault();
    setemail(e.target.value);
  }

  function handleForm(e) {
    setloading(true);
    e.preventDefault();
    Axios.post("laravel-real-ecommerce/member", {
      email: email,
      name: email
    }).then(res => {
      setemail("");
      setloading(false);
      flash(
        "success",
        "Cool 😎, now check your inbox 📩 to complete subscription.",
        10
      );
    });
  }

  return (
    <div className="py-6">
      <p className="text-lg text-white my-3 tracking-wide">
        Pack your tools, Journey starts early 2020
      </p>
      <form className="flex justify-center" onSubmit={handleForm}>
        {loading ? (
          <div className="rounded-tl-lg py-2 px-4 text-lg font-bold bg-yellow-500 text-yellow-800 outline-none md:py-3 cursor-pointer w-24">
            <span className=" fas fa-circle-notch fa-spin text-xl" />
          </div>
        ) : (
          <input
            type="submit"
            value="Notify Me"
            className="rounded-tl-lg py-2 px-4 text-lg font-bold bg-yellow-500 text-black text-center outline-none md:py-3 cursor-pointer w-24"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Your Great Email"
          required
          onChange={handleInput}
          value={email}
          className="rounded-br-lg py-2 pl-4 text-lg text-black bg-white w-64 outline-none"
        />
      </form>
    </div>
  );
}
