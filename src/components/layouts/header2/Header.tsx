import React from "react";
import Navbar from "./Navbar";
import { useTranslations } from "next-intl";
import SubNav from "./SubNav";

const Header = ({ locale }: { locale: string }) => {

    const t = useTranslations('Navbar');

    return (
        <>
            <header>
                <Navbar
                    home={t('Home.title')}
                    observatory={t('Observatory.title')}
                    statistics={t('Statistics')}
                    articles={t('Articles')}
                    publications={t('Publications')}
                    reports={t('Reports')}
                    missions={t('Missions')}
                    videos={t('videos')}
                    contact={t('Contact')}
                    search={t('search')}
                    collaborations={t('Collaborations')}
                    locale={locale}
                />
            </header>
            <section className='ff'>
                <SubNav locale={locale} title={t('title')} />
            </section>

        </>

    )
};

export default Header;
