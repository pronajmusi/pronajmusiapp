'use client'
import { useUserStore } from "../store/User";
import { Ad } from "../constants/contants";
import AdItem from "../components/AdItem";

const UserDemands = ({ userDemands }: { userDemands: Ad[] }) =>{
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
            {userDemands.map((ad) => (
                <div className="flex items-center justify-center" key={ad.id}>
                    <AdItem item={ad} isUserAd={true}/>
                </div>
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