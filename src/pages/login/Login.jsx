import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as AiIcons from "react-icons/ai";
import { loginAuth } from "../../atom";
import { useRecoilState } from "recoil";
import ForgotPassword from "./ForgotPassword";
const Login = () => {
  const [UUID, setUUID] = useState("");
  const [loginDetail, setLoginDetail] = useRecoilState(loginAuth);
  const navigate = useNavigate();
  const [errorStatus, setErrorStatus] = useState(false);
  const [currentError, setCurrentError] = useState("");
  const [adminLoginForm, setAdminLoginForm] = useState({
    username: "",
    password: "",
  });
  const inputHandler = (e) => {
    let { name, value } = e.target;
    setAdminLoginForm({ ...adminLoginForm, [name]: value });
    setErrorStatus(false);
  };

  // GENERATE RANDOM UUID
  const uuid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };
  const [eye, setEye] = useState(false);
  const hideShowPassword = () => {
    setEye(!eye);
  };
  // LOGIN HANDLER DURING LOGIN ADMIN PANEL
  const loginHandler = async () => {
    let postData = {
      email: adminLoginForm.username,
      password: adminLoginForm.password,
    };
    let uuidCode = uuid();
    await axios
      .post(`https://avgna.onrender.com/api/v1/login`, postData)
      .then((resp) => {
        setLoginDetail({
          userAdminId: resp.data + uuidCode,
          uniqueId: uuidCode,
        });

        if (loginDetail.uniqueId) {
          setAdminLoginForm({ username: "", password: "" });
          setTimeout(() => {
            navigate("/admin-dashboard/home");
          }, 1200);
        }
      })
      .catch((err) => {
        setErrorStatus(true);
        setCurrentError(err.response.data.message);
      });
  };
  // FORGOT MODAL
  const [modalShow, setModalShow] = useState(false);
  const forgotModal = () => {
    setModalShow(!modalShow);
  };
  // BACK TO HOME
  const backToHome = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <div className="relative">
        <button
          onClick={() => backToHome()}
          className="absolute top-16 left-16 button--action button"
        >
          Back
        </button>
        <div className="flex justify-center items-center h-screen">
          <div className="backdrop-blur-md shadow-gray-300 shadow-2xl h-[500px] w-[70%] flex">
            <div className="w-1/2 px-10 py-14 bg-white">
              <h2 className="font-bold">Welcome!</h2>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                ullam illum dignissimos. Rem molestiae, nemo, ratione pariatur
                quo explicabo facere quam laboriosam expedita culpa magnam! Modi
                minima temporibus qui laboriosam. Nobis voluptatum laboriosam
                voluptas facere rem modi consequuntur! Pariatur amet porro atque
                quaerat, quidem ratione.
              </p>
            </div>
            <div className="w-1/2 px-10 py-14 space-y-4 flex justify-center items-center flex-col">
              <h2 className="items-start w-full font-semibold">Login</h2>
              <p className="text-sm text-red-600 text-left w-full font-semibold">
                Required *
              </p>
              <form className="py-2 space-y-6  relative w-full">
                <input
                  className="border w-full"
                  type="text"
                  name="username"
                  placeholder="Username*"
                  value={adminLoginForm.username}
                  onChange={inputHandler}
                />
                <div className="relative w-full">
                  <input
                    className="border w-full"
                    type={eye ? "text" : "password"}
                    name="password"
                    placeholder="Password*"
                    value={adminLoginForm.password}
                    onChange={inputHandler}
                  />
                  <span
                    onClick={() => hideShowPassword()}
                    className="absolute top-2 cursor-pointer right-3 text-2xl"
                  >
                    {eye ? (
                      <AiIcons.AiFillEye />
                    ) : (
                      <AiIcons.AiFillEyeInvisible />
                    )}
                  </span>
                </div>
                {errorStatus && (
                  <span className="text-sm text-red-600 font-semibold">
                    {currentError}
                  </span>
                )}
                <p
                  onClick={() => forgotModal()}
                  className="cursor-pointer text-right text-gray-500 text-sm my-4 hover:underline pb-1"
                >
                  Forgot password?
                </p>
                <button
                  type="button"
                  onClick={() => {
                    loginHandler();
                  }}
                  className="button button--action w-full"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Modal */}
        {modalShow && <ForgotPassword />}
      </div>
    </React.Fragment>
  );
};

export default Login;
