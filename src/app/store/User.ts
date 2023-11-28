import { create } from 'zustand'

export const useUserStore = create((set) => ({
    user: null,
    userAds: [],
    setUser: (userData: any) => {
        set({ user: userData });
    },
    setAds: (ads: any) =>{
        set({ userAds: ads });
    }
}))