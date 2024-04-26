"use client"

import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

const SearchBox = () => {
    // { searchValue, setSearchValue }: { searchValue: string, setSearchValue: (searchValue: string) => void }
    const searchParams = useSearchParams();
    const searchValue = searchParams.get('search-publications') || '';

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            let params = new URLSearchParams();
            const formData = new FormData(e.currentTarget);
            const search = formData.get('search') as string;
            params.delete('category')
            params.delete('page')
            params.set('search', search);
        }
        , [searchParams])

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="search..."
                className="w-full input input-bordered input-xl"
                id="search_pub"
                name='search_publications'
                defaultValue={searchValue}
            // onChange={((e) => setSearchValue(e.target.value))}
            />
        </form>
    )
};

export default SearchBox;
