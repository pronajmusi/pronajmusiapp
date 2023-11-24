'use client'
import AdItem from "./AdItem"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getFilterParams, AdApiResult } from "../constants/contants"
import { listAdsLib } from "../lib/ads/listAdsLib"
import DashboardSkeletons from "./DashboardSkeletons"

export default function DashboardAds(){
    const searchParams = useSearchParams();
    const queryString = searchParams.get("dotaz");
    const queryLocation = searchParams.get("kraj");
    const queryCategory = searchParams.get("kategorie");
    const queryType = searchParams.get("typ");
    const queryPage = searchParams.get("strana");
    const [adsData, setAdsData] = useState<AdApiResult>({ ads: [], count: 30 });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data: AdApiResult = await listAdsLib(getFilterParams(queryString || "", queryLocation || "", queryType || "", queryCategory || ""), queryPage || "1") as AdApiResult;
                setAdsData(data);
            } catch (error) {
                setLoading(false);
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [queryString, queryLocation, queryType, queryCategory, queryPage]);

    return ( 
        <div className="w-full">
            {
                !loading &&
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
                    {adsData.ads.map((ad) => (
                        <div className="flex items-center justify-center" key={ad.id}>
                            <AdItem item={ad}/>
                        </div>
                    ))}
                </div>
            }
            {
                loading &&
                <DashboardSkeletons />
            }
        </div>
    )
}