"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ pageCount, page }: { pageCount: number, page: number }) => {
    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();


    function handleClick(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('page', term);
        } else {
            params.delete('page');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    if (pageCount < 2) return null;
    return (
        <div className="my-10 join">
            {pages.map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={`join-item btn btn-lg ${pageNumber === page ? 'btn-active' : ''}`}
                    onClick={() => {
                        handleClick(String(pageNumber));
                    }}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    );
};

export default Pagination;