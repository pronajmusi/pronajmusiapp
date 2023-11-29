'use client'
import Link from "next/link"
import { signOut } from "next-auth/react"

export default function UserDropContent(){
    const onSignOut = async () => {
        signOut({ redirect: true, callbackUrl: '/' });
    }
    return (
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow border menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
                <Link href={'/profil'}>
                    Můj profil
                </Link>
            </li>
            <li onClick={()=>onSignOut()}>
                <a>Odhlásit se</a>
            </li>
        </ul>
    )
}