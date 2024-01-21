"use client";
import LoginButton from "./login-button";
import { Button } from "./ui/button";

const HomeBtnWrapper = () => {
  return (
    <div className="flex flex-col min-w-64">
      <LoginButton label="GAMIFY MY HABITS" />
      <GoToSignIn />
    </div>
  );
};

export default HomeBtnWrapper;

export const GoToSignIn = ({ label }: { label?: string }) => (
  <Button className="rounded-lg bg-transparent py-6">
    {!label ? "I HAVE AN ACCOUNT" : label}
  </Button>
);
