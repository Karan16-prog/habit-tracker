"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const LoginButton = ({ label }: { label?: string }) => {
  return (
    <Button className="text-secondary-foreground bg-primary hover:bg-primary-hover  py-6 rounded-lg">
      <Link href="/login"> {!label ? "LOGIN" : label}</Link>
    </Button>
  );
};

export default LoginButton;
