import { useTranslations } from "next-intl";
import Image from "next/image";

const Boss = () => {

    const t = useTranslations("Boss")

    return (
        <section className="my-10 body-container">
            {/* <picture >
                <img src="/website/king.jpg" alt="le roi mohammed 6" className="h-[350px] md:h-[500px] w-full" />
            </picture> */}
            <h2 className="mx-2 my-6 text-2xl font-bold underline underline-offset-8 decoration-yellow-500">
                {t("name")}
            </h2>
            <article className="flex flex-col-reverse justify-between gap-8 lg:flex-row items">
                <div>
                    <p className="mt-8 leading-7 lg:mt-0">
                        {t("text")}
                    </p>
                    <h4 className="font-bold">
                        {t("text2")}
                    </h4>
                </div>
                {/* <img
                    className="object-cover rounded shadow-md shadow-myBlue"
                    src="/website/boss.jpg"
                    alt="هشام ملاطي"
                /> */}
                <Image
                    className="object-cover w-full rounded shadow-md md:h-80 shadow-myBlue"
                    src="/website/roi.jpg"
                    alt="هشام ملاطي"
                    width={500}
                    height={500}
                />
            </article>
        </section>
    );
};

export default Boss;
