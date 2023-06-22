"use client";

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Image from "next/image";

const SignUp = () => {
  const { user, signup } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // For future password and confirm password handling
  //
  // const [error, setError] = useState({
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-2 p-16 rounded-lg shadow-lg bg-[#363636] ">
      <div className="flex items-center justify-center pb-5">
        <Image
          src="/assets/images/tappedLogoReverse.png"
          alt="Tapped_Logo"
          width={330}
          height={90}
        />
      </div>

      <form className="w-full max-w-sm" onSubmit={handleSignup}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold text-xs md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="inline-email"
              type="text"
              placeholder=""
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email || ""}
            ></input>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold text-xs md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="inline-password"
              type="password"
              placeholder=""
              onChange={(e: any) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password || ""}
            ></input>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold text-xs whitespace-nowrap md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-confirm-password"
            >
              Confirm Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="inline-confirm-password"
              type="password"
              placeholder=""
              onChange={(e: any) =>
                setData({
                  ...data,
                  confirmPassword: e.target.value,
                })
              }
              value={data.confirmPassword || ""}
            ></input>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-full">
            <button className="tapped_btn w-full" type="submit">
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
