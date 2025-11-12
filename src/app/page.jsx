"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MainContent from "@/components/dashboard/MainContent";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
      router.push("/signup");
    }
  }, []);

  return (
    <>
      <MainContent />
    </>
  );
}
