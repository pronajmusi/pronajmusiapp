'use client'

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AddOfferPage from './AddOfferPage';

export default function AddOffer() {
    const session = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/profil/prihlasit-se")
        }
    })
    return (
        <main className="flex min-h-screen justify-start items-center w-full my-20 px-12 flex-col">
            <AddOfferPage />
        </main>
    )
}

AddOffer.requireAuth = true;