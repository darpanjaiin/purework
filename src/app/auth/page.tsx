"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AuthPage() {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: typeof window !== "undefined"
          ? `${window.location.origin}/editor`
          : undefined,
      },
    });
    if (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black font-sans px-4">
      <div className="w-full max-w-sm bg-white border border-neutral-200 rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign in to PureWork</h1>
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-black text-white rounded-full px-6 py-3 text-base font-semibold shadow hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-60"
        >
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" className="mr-2"><g clipPath="url(#clip0_17_40)"><path d="M47.5 24.5C47.5 22.5 47.3 20.7 47 19H24V29.5H37.5C36.8 33.1 34.2 36.1 30.7 37.9V44.1H38.2C43.1 39.7 47.5 32.9 47.5 24.5Z" fill="#4285F4"/><path d="M24 48C30.6 48 36.1 45.8 38.2 44.1L30.7 37.9C29.5 38.6 27.9 39.1 26 39.1C20.7 39.1 16.1 35.4 14.5 30.7H6.7V37.1C9.8 43.1 16.3 48 24 48Z" fill="#34A853"/><path d="M14.5 30.7C14.1 29.6 13.9 28.4 13.9 27.1C13.9 25.8 14.1 24.6 14.5 23.5V17.1H6.7C5.2 20.1 4.5 23.4 4.5 27.1C4.5 30.8 5.2 34.1 6.7 37.1L14.5 30.7Z" fill="#FBBC05"/><path d="M24 15.1C26.3 15.1 28.3 15.9 29.8 17.3L37.1 10.1C34.1 7.3 29.6 5.5 24 5.5C16.3 5.5 9.8 10.4 6.7 17.1L14.5 23.5C16.1 18.8 20.7 15.1 24 15.1Z" fill="#EA4335"/></g><defs><clipPath id="clip0_17_40"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>
          {loading ? "Redirecting..." : "Continue with Google"}
        </button>
      </div>
    </div>
  );
} 