"use client";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useUserStore } from "../store/User";
import { useState, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserProfile() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/profil/prihlasit-se");
        },
    });

    const onSignOut = async () => {
        await signOut({ redirect: false });
        redirect("/");
    };

    const userStore = useUserStore();
    const user = userStore.user;
    const [email, setEmail] = useState(user?.email || "");
    const [name, setName] = useState(user?.name || "");
    const [newPassword, setNewPassword] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);

    const onChangePasswordClick = () => {
        console.log("Requested to change password to:", newPassword);
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const onProfilePicClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="w-10/12 mx-auto my-10">
            <div className="flex flex-col md:flex-row md:items-start">
                <div className="md:ml-5 px-5">
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={onImageChange}
                        hidden
                    />
                    <div onClick={onProfilePicClick} className="cursor-pointer">
                        {profileImage ? (
                            <img
                                src={profileImage}
                                alt="Profilová fotka"
                                className="rounded-full border h-24 w-24"
                            />
                        ) : (
                            <FaUserCircle size={96} className="text-gray-400" />
                        )}
                    </div>
                </div>
                <div className="flex-1 mb-6 md:mb-0">
                    <div className="mb-4">
                        <label className="text-lg mb-2">E-mail</label>
                        <input
                            readOnly
                            value={email}
                            type="email"
                            className="border px-4 py-2 rounded shadow w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-lg mb-2">
                            Uživatelské jméno
                        </label>
                        <input
                            readOnly
                            value={name}
                            type="text"
                            className="border px-4 py-2 rounded shadow w-full"
                        />
                    </div>
                    <div className="flex flex-col w-full mb-4">
                        <span className="text-lg mb-2">Heslo</span>
                        <div className="flex flex-row items-center">
                            <input
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                type="password"
                                placeholder="Nové heslo"
                                className="border px-4 py-2 rounded-l shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 flex-grow mr-2"
                            />
                            <button
                                onClick={onChangePasswordClick}
                                className="text-white bg-black px-4 py-2 cursor-pointer rounded hover:bg-indigo-700 duration-150"
                            >
                                Změnit heslo
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mb-4">
                        <button
                            onClick={() => onSignOut()}
                            className="text-white bg-black px-8 py-2 cursor-pointer rounded hover:bg-indigo-700 duration-150"
                        >
                            Odhlásit se
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

UserProfile.requireAuth = true;
