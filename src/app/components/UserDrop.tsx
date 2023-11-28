import { FaUser } from "react-icons/fa"
import Link from "next/link"

export default function UserDrop(){
    return (
        <div className="dropdown dropdown-end ml-2">
            <label tabIndex={0} className="btn btn-circle avatar bg-white hover:bg-white shadow">
                <button className="w-10 rounded-full flex items-center justify-center">
                    <FaUser size={20} className="text-black"/>
                </button>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow border menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <Link href={'/profil'}>
                        Profile
                    </Link>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    )
}