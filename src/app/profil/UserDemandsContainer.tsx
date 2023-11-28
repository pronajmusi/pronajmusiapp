'use client'
import { useUserStore } from "../store/User";
import { Ad } from "../constants/contants";
import AdItem from "../components/AdItem";

const UserDemands = ({ userDemands }: { userDemands: Ad[] }) =>{
    return (
        <div className="bg-white shadow-xl p-6 w-full min-h-40R max-h-40R overflow-y-auto">
            {userDemands.map((demand) => (
                <AdItem item={demand} key={demand.id} />
            ))}
        </div>
    )
}

export default function UserDemandsContainer() {
    const userStore: any = useUserStore();
    const userDemands = userStore.userAds;
    
    return (
        <div className="flex flex-col">
            <h1 className="font-semibold text-4xl mb-10">Moje inzeráty</h1>
            <UserDemands userDemands={userDemands}/>
        </div>
    )
}