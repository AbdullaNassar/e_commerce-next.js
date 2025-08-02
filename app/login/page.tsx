"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthForm } from "@/components/ui/AuthForm";
import { login } from "../services/apiAuth";
import { toast } from "sonner";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (formData: any) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await login({
        email: formData.email,
        password: formData.password,
      });
      if (res.token) {
        localStorage.setItem("token", res.token);
        // Fetch user data after login
        try {
          const { getMe } = await import("../services/apiAuth");
          const user = await getMe();
          console.log("User after login:", user);
        } catch (err) {
          console.log("Error fetching user after login:", err);
        }
      }
      toast.success("تم تسجيل الدخول بنجاح!");
      router.push("/");
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthForm
      type="login"
      onSubmit={handleLogin}
      isLoading={isLoading}
      error={error}
    />
  );
}
