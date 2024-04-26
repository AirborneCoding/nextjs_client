import { projectsAndLaws } from "@/utils/data";

const Categories = ({ locale, category, setCategory }: { locale: string, category: string, setCategory: (searchValue: string) => void }) => {

    return (
        <ul className="grid grid-cols-3 lg:flex lg:flex-col gap-x-2 gap-y-7">
            {projectsAndLaws.map((c, i) => {
                return (
                    <li
                        onClick={() => setCategory(locale === "ar" ? c.ar : c.fr)}
                        key={i} className="btn btn-neutral text-xs">
                        {locale === "ar" ? c.ar : c.fr}
                    </li>
                )
            })}
        </ul>
    )
};

export default Categories;