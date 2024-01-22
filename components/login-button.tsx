"use client";
import { Button } from "@/components/ui/button";

import React from "react";

const LoginButton = ({ label }: { label?: string }) => {
  return (
    <Button className="text-secondary-foreground bg-primary hover:bg-primary-hover  py-6 rounded-lg">
      {!label ? "LOGIN" : label}
    </Button>
  );
};

export default LoginButton;
