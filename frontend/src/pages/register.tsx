"use client"
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import api from "./api/utils/api";
import axios from "axios"
interface RegisterResponse{
    id: string;
    email: string;
    fullName: string;
}
export default function Register(){     
    const [email,setEmail] = useState<string>("");  
    const [error,setError] = useState<string>("");
    const [password,setPassword] = useState<string>("");  
    const [fullName,setFullName] = useState<string>("");  
    const router = useRouter();

    const handleSubmit = async(e:FormEvent)=>{
        e.preventDefault();
        try{
            await api.post<RegisterResponse>("/register",{email,password,fullName});
            alert("User Registered Successfully! Please Login");
            router.push("/");
        }catch(err: unknown){
            if(err instanceof Error){
                setError(err.message);
            }else if(axios.isAxiosError(err)){
                setError(err.response?.data?.error || "Server Error")
            }else{
                setError("An Unexpected Error");
            }
        }
    };

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
                <form onSubmit={handleSubmit} className="space-y-4">  
                    <input 
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={e=>setFullName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                     />
                     <input 
                     type="text" 
                     placeholder="Email"
                     value={email}
                     onChange={e=>setEmail(e.target.value)}
                     className="w-full p-3 border border-gray-300 rounded"
                     />
                     <input 
                     type="password"
                     placeholder="Password" 
                     value={password}
                     onChange={e=>setPassword(e.target.value)}
                     className="w-full p-3 border border-gray-300 rounded"
                     />
                     <button
                     type="submit"
                     className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
                     >
                        Register</button>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        
                </form>
            </div>
        </div>
    )
}