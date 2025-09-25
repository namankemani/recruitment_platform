import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "./api/utils/api";
import axios from "axios";
import Header from "./components/Header";

interface User {
  _id: string;
  email: string;
  fullName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login"); // redirect to login if no token
        return;
      }

      try {
        const res = await api.get<User>("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.error || "Server Error");
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
        router.push("/login"); // redirect to login if token invalid
      }
    };

    fetchProfile();
  }, [router]);

  if (error) {
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  }

  if (!user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <>
    <Header/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <p className="mb-2"><strong>Full Name:</strong> {user.fullName}</p>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="mb-2"><strong>Role:</strong> {user.role}</p>
        <p className="mb-2 text-gray-500 text-sm">
          Joined on: {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
    </>
  );
}
