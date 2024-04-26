
// styles
import "@/styles/projectStyle.css";
import "@/styles/globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'react-loading-skeleton/dist/skeleton.css'

// metadata
import { Metadata } from "next";

// locale direction
import useTextDirection from "./useTextDirection";

// font style
import { Cairo } from "next/font/google";
const cairo = Cairo({
    subsets: ["arabic"],
    // weight: ["200"],
    variable: "--font-cairo"
})

// provider file
import Providers from "./providers";

// layouts components
import Header from "@/components/layouts/header2/Header";
import Footer from "@/components/layouts/footer/Footer";
import { AppWrapper } from "@/context/useNavbarContext";
import Sidebar from "@/components/layouts/header2/Sidebar";
import Submenu from "@/components/layouts/header2/Submenu";

export const metadataAr: Metadata = {
    icons: "favicon.ico",
    title: {
        default: "المرصد الوطني للإجرام",
        template: "%s - المرصد الوطني للإجرام"
    },
    description: "المرصد الوطني للإجرام هو منصة تقنية تهدف إلى مراقبة وتحليل الجريمة في البلاد وتوفير بيانات ومعلومات مفيدة للمجتمع والسلطات المعنية. تستند عمليات المرصد على تقنيات متطورة لتتبع الجرائم وتحديد أنماطها والعمل على الحد منها. انضم إلينا في رحلة العمل الجماعي لبناء مجتمع آمن ومزدهر.",
};

export const metadataFr: Metadata = {
    icons: "favicon.ico",
    title: {
        default: "Observatoire National de la Criminalité",
        template: "%s - Observatoire National de la Criminalité"
    },
    description: "L'Observatoire National de la Criminalité est une plateforme technologique visant à surveiller et analyser le crime dans le pays, fournissant des données et des informations utiles à la communauté et aux autorités concernées. Les opérations de l'observatoire reposent sur des technologies avancées pour suivre les crimes, identifier leurs schémas et travailler à les réduire. Rejoignez-nous dans un voyage de travail collectif pour construire une communauté sûre et prospère.",
};

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

    if (locale === 'ar') {
        return metadataAr
    } else if (locale === 'fr') {
        return metadataFr
    }
    else {
        return metadataAr
    }
}

interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}


export default function RootLayout({
    children,
    params: { locale },
}: Readonly<RootLayoutProps>) {

    const direction = useTextDirection(locale);

    return (
        <html lang={locale} dir={direction} suppressHydrationWarning={true}>
            <body
                className={cairo.className}
                suppressHydrationWarning={true} >
                <Providers>
                    <AppWrapper>
                        <Header locale={locale} />
                        <Sidebar locale={locale} />
                        <Submenu locale={locale} />
                        {/* <HeaderOld locale={locale}></HeaderOld> */}
                    </AppWrapper>
                    {children}
                    <Footer locale={locale} />
                </Providers>
            </body>
        </html >
    );
}
