"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const BtnReset = ({ locale }: { locale: string }) => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleClick() {
        const params = new URLSearchParams(searchParams.toString())
        params.delete('category')
        params.delete('page')
        params.delete('search_publications')
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <button
            onClick={handleClick}
            className="btn btn-neutral w-52">
            {locale == "ar" ? "الكل" : "Tous"}
        </button>
    )
};

export default BtnReset;
