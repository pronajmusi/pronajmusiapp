import Image from "next/image"
import MainLogoSrc from "@/app/assets/images/logo-pro.png"

export default function Footer(){
    return (
        <div className="bg-white px-8 py-12 flex items-center justify-center shadow border-t border-t-gray-200">
            <div className="flex items-center">
                <Image alt="Hlavní logo" src={MainLogoSrc} width={30} height={30}/>
                <span className="text-2xl font-bold ml-2">PronajmuSi</span>
            </div>
        </div>
    )
}