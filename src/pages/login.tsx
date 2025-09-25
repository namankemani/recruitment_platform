import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import api from "./api/utils/api";
import axios from "axios";
import Link from "next/link";

interface LoginResponse {
  token: string;
}

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(""); // reset previous error

    try {
      const res = await api.post<LoginResponse>("/login", { email, password });
      localStorage.setItem("token", res.data.token);
      router.push("/profile"); // redirect to profile after login
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || "Server Error");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
          >
            Login
          </button>
          <div>
            <p>Do not have a account? <span className="text-blue-700"><Link href='/register'>Register Here</Link></span></p>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}
