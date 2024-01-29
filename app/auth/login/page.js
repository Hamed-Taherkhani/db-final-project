"use client";

import Image from "next/image";
import Input from "../../ui/Input";
import { useState } from "react";
import { LiaHandPeace } from "react-icons/lia";
import { redirect } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState(""); // username can be email or phone number
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-screen flex items-center">
      <Image
        src="/images/bg.webp"
        alt=""
        width={1920}
        height={1080}
        className="object-cover hidden sm:block h-full sm:w-4/12 md:w-5/12 lg:w-1/2"
      />

      <div className="bg-white w-full max-h-full py-10 overflow-auto sm:w-8/12 md:w-7/12 lg:w-1/2 px-4 sm:px-8 lg:px-20">
        <div className="relative h-28 sm:h-20 flex justify-center items-center mb-4 sm:mb-0">
          <Image
            src="/images/bg.webp"
            alt=""
            width={400}
            height={200}
            className="w-full h-full object-cover sm:hidden absolute top-0 left-0 right-0 bottom-0"
          />
          <p className="relative text-white font-semibold sm:text-black z-10 text-3xl lg:text-5xl text-center block w-full">
            <span>Welcome</span>
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">ورود</h1>
          <p className="text-gray-600 my-4 text-sm">
            <span className="flex items-center gap-0.5">
              Hello <LiaHandPeace size={18} />
            </span>
            Enter your personnel id and password for login
          </p>

          <form className="flex flex-col gap-4 w-full">
            <Input
              type="text"
              placeholder="Enter your phone number"
              onChange={handleUsernameChange}
              value={username}
            />

            <Input
              type="password"
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              value={password}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                redirect("/dashboard");
              }}
              type="submit"
              className="bg-gray-900 rounded-md text-white text-xl py-2.5"
            >
              Login
            </button>
          </form>
          {/*     <Link
            href="register"
            className="flex items-center gap-2 w-fit text-sm mt-2 sm:mt-4"
          >
            حساب کاربری ندارم!
            <h2 className="text-blue-500 font-semibold">ثبت نام</h2>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
