'use client'

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { auth } from "../../firebase";
import { signIn } from "next-auth/react"

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const signup = async () => {
        let result = await createUserWithEmailAndPassword(auth, email, password);
        if (result && result.user) {
            let params = {
                id: result.user.uid,
                email: email,
                name: userName,
            }
            let addedUser = await fetch("/api/user/register", {
                method: "POST",
                body: JSON.stringify(params)
            })

            if (!addedUser.ok) {
                throw new Error(addedUser.statusText);
            }
            return await signIn('credentials', { email, password, redirect: true, callbackUrl: '/' });
        }
    };

    return (
        <div className="w-11/12 md:w-4/12 flex flex-col bg-white p-10 pb-20 rounded shadow-xl">
            <div className="flex flex-col w-full">
                <span className="text-lg mb-4">E-mail</span>
                <input onChange={(e) => setEmail(e.target.value)} type="text" className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1" placeholder="ukazka@email.cz"/>
            </div>
            <div className="flex flex-col w-full">
                <span className="text-lg mb-4">Uživatelské jméno</span>
                <input onChange={(e) => setUserName(e.target.value)} type="text" className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1" />
            </div>
            <div className="flex flex-col w-full">
                <span className="text-lg mb-4">Heslo</span>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1" placeholder="********" />
            </div>
            <div className="flex flex-col w-full">
                <span className="text-lg mb-4">Heslo znovu</span>
                <input onChange={(e) => setPasswordAgain(e.target.value)} type="password" className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1" placeholder="********"/>
            </div>
            <div className="flex flex-col w-full mb-4">
                <button
                disabled={(!email || !password || !passwordAgain || !userName) || (password !== passwordAgain)}
                onClick={() => signup()}
                className="text-white bg-black px-8 py-2 cursor-pointer rounded hover:bg-indigo-700 duration-150"
                >
                Registrovat se
                </button>
            </div>
        </div>
    )
}
