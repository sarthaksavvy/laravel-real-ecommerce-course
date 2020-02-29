import cogoToast from "cogo-toast";

const flash = (type, message) => {
  cogoToast[type](message, { position: "top-center" });
};

export default flash;
