"use client"
import { createContext, ReactNode, useContext, useState } from "react"
import { sublinks, sublinks2 } from '@/utils/data/data';

interface Sublink {
    page: string;
    links: string[];
}

interface Location {
    left: number;
    top: number;
}

interface AppContextData {
    isSidebarOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
    isSubmenuOpen: boolean;
    openSubmenu: (text: string, coordinates: Location) => void;
    closeSubmenu: () => void;
    page: Sublink;
    location: Location;
}

// <AppContextData | undefined>(undefined)
// const AppContext = createContext<AppContextData | undefined>(undefined)

const AppContext = createContext<any>(undefined)

const AppWrapper = ({ children }: { children: ReactNode }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState<Sublink>({ page: '', links: [] });
    const [location, setLocation] = useState<Location>({ left: 0, top: 0 });

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const openSubmenu = (target: string, coordinates: Location) => {
        const page: any = sublinks2.find((link) => link.target === target);
        setPage(page)
        // console.log(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            isSubmenuOpen,
            openSubmenu,
            closeSubmenu,
            page,
            location,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useNavbarContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppWrapper };