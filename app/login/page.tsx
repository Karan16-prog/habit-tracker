import React from "react";
import HomeBar from "@/components/home-bar";
import LoginForm from "@/components/login-form";

const Login = () => {
  return (
    <div className="flex flex-col items-center self-stretch">
      <div className="w-full lg:max-w-screen-sm flex justify-center items-center mt-5">
        <HomeBar />
      </div>

      <div className="text-center mt-10">
        <h2 className="font-bold text-4xl mb-4">Welcome Back 👋</h2>
        <span className="font-medium">Ready to tick your habits?</span>
      </div>

      <LoginForm />
    </div>
  );
};

export default Login;
