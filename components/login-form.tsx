"use client";
import React from "react";
import { Button } from "./ui/button";

const LoginForm = () => {
  return (
    <div className="flex flex-col p-5">
      <Button>SIGN IN WITH GOOGLE</Button>
      <Button>SIGN IN WITH GITHUB</Button>
      <div className="flex flex-row">
        <div className=""></div>
        <span>OR</span>
        <div></div>
      </div>
    </div>
  );
};

export default LoginForm;
