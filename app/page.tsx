"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return <></>;
};

export default LandingPage;
