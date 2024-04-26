"use client"

import { useSearchParams } from "next/navigation";
const SearchBox = () => {

    const searchParams = useSearchParams();
    const searchValue = searchParams.get('search') || '';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let params = new URLSearchParams();
        const formData = new FormData(e.currentTarget);
        const search = formData.get('search') as string;
        params.set('search', search);
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="search..."
                className="w-full input input-bordered input-xl"
                id="search_articles"
                name='search_articles'
                defaultValue={searchValue}
            />
        </form>
    )
};

export default SearchBox;
