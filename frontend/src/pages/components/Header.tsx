import { useRouter } from "next/router";
import React from "react";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    router.push("/login"); // redirect to login
  };

  return (
    <header className="bg-green-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>
        Recruitment Platform
      </h1>
      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
      >
        Logout
      </button>
    </header>
  );
}
