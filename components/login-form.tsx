"use client";
import React from "react";
import { Button } from "./ui/button";
import { Google, Github, Action } from "grommet-icons";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const LoginForm = () => {
  return (
    <div className="flex flex-col p-5 w-full">
      <Button className="bg-white w-full hover:bg-white text-black">
        <span className="mr-1">
          <Google size="medium" color="plain" />
        </span>
        SIGN IN WITH GOOGLE
      </Button>

      <Button className="bg-black mt-2 text-white hover:bg-black">
        {" "}
        <span className="mr-1">
          <Github size="medium" color="white" />
        </span>
        SIGN IN WITH GITHUB
      </Button>

      <div className="flex flex-row items-center gap-x-1 mt-3">
        <div className="h-px bg-foreground flex-1"></div>
        <span>OR</span>
        <div className="h-px bg-foreground  flex-1"></div>
      </div>

      <div className="mt-3">
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" required placeholder="cute@cat.com" />
      </div>

      <div className="mt-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" required />
      </div>
    </div>
  );
};

export default LoginForm;
