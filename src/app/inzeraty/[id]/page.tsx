import { getAdDetails } from "@/app/lib/ads/getAdDetails"
import { Ad, getType, getLocation, BackgroundOptions, AdTypes, getPrice, TimePeriods } from "@/app/constants/contants";
import { MdAlternateEmail, MdLocalPhone } from "react-icons/md";
import RelatedAds from "./RelatedAds";
import AdImage from "@/app/components/AdImage";

interface Params  {
    id: string
}

export default async function OfferDetails({params}: {params: Params}) {
    const ad: Ad = await getAdDetails(params.id);
    
    return (
        <main className="flex min-h-screen justify-start items-center w-full my-4 px-12 flex-col py-24">
            <div className="w-10/12 flex flex-col">
                {
                    (ad.img && ad.img !== "") && 
                    <AdImage ad={ad} />
                }
                <div className="flex items-center">
                    <h1 className="font-semibold text-4xl mr-4">{ad.title}</h1>
                    <p className="text-slate-500 text-md">&gt; {getType(ad.type)} &gt; {getLocation(ad.location)}</p>
                </div>
                {
                    ad.type !== AdTypes.DEMAND && 
                    <div className="py-1 px-10 bg-indigo-500 text-sm text-center rounded shadow text-white w-fit my-4">
                        {getPrice(ad.price as number, ad.period as TimePeriods)}
                    </div>
                }
                <div className="mt-10 bg-white shadow-xl p-6 w-full min-h-20R max-h-40R overflow-y-auto">
                    <p className="text-slate-600">{ad.description}</p>
                </div>
                {
                    ad.specialInstructions && 
                    <div className="flex flex-col mt-10">
                        <h1 className="font-semibold text-3xl">Speciální požadavky</h1>
                        <div className="mt-10 bg-white shadow-xl p-6 w-full">
                            <p className="text-slate-600">{ad.specialInstructions}</p>
                        </div>
                    </div>
                }
                <div className="flex flex-col mt-10">
                    <h1 className="font-semibold text-3xl">Kontakt</h1>
                    <div className="mt-10 bg-white shadow-xl p-6 w-full">
                        <div className="flex items-center">
                            <div className="flex items-center mr-14">
                                <MdAlternateEmail size={30} />
                                <a className="text-slate-600 ml-4 hover:underline" href={`mailto:${ad.email}`}>{ad.email}</a>
                            </div>
                            <div className="flex items-center">
                                <MdLocalPhone size={30} />
                                <a className="text-slate-600 ml-4 hover:underline" href={`tel:${ad.phone}`}>{ad.phone}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-20 mb-10">
                    <h1 className="font-semibold text-3xl">Podobné inzeraty</h1>
                    <div className="mt-10">
                        <RelatedAds category={ad.category} location={ad.location} type={ad.type} title={ad.title}/>
                    </div>
                </div>

            </div>
        </main>
    )
}