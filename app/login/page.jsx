
'use client'

import Image from "next/image";
import culture from '@/public/culture.png';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



const LoginPage = () => {
    const {data, status} = useSession()
    
    const router = useRouter();

    if (status === 'loading') {
        return <div className="h-screen flex items-center justify-center">Loading...</div>
    };

    if (status === 'authenticated') {
        router.push('/')
    }
  return (
    <main className="container mx-auto flex items-center justify-center h-[75vh]  gap-12 p-12 sm:p-8 lg:p-0  ">
        <section className=" flex flex-col items-center justify-center gap-8">
            <div>
                <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
                <span className="text-gray-400 leading-5">Welcome Back, Please select your method of login</span>
            </div>
            <div className="flex items-center gap-3 w-3/4 mx-auto">
                <div className="flex-1 w-full border h-0 border-gray-300"></div>
                <span className="flex-1 text-gray-400 text-center">Login with</span>
                <div className="flex-1 w-full border h-0 border-gray-300"></div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
                <button className="w-12 h-12 rounded-full text-3xl bg-black  ">
                    <FaGithub className=" mx-auto text-white"/>
                </button>
                <button className="w-12 h-12 rounded-full text-3xl border-2 border-gray-300 "
                onClick={() => signIn('google')}>
                    <FcGoogle className=" mx-auto " />
                </button>
                <button className="w-12 h-12 rounded-full text-3xl bg-blue-500">
                    <FaFacebookF className="text-white mx-auto" />
                </button>
            </div>
        </section>
    </main>
  )
}

export default LoginPage