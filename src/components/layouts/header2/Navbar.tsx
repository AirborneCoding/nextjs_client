"use client"

import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { FaArrowDown, FaBars } from "react-icons/fa";
import SearchBox from "./SearchBox";
import LocalSwitcher from "./local-switcher";
import Theme from "./Theme";
import Link from "next/link";
import { useNavbarContext } from "@/context/useNavbarContext";
import { useRouter } from "next/navigation";

type Props = {
    home: string;
    observatory: string;
    statistics: string;
    articles: string;
    publications: string;
    reports: string;
    videos: string;
    missions: string;
    contact: string;
    collaborations: string;
    search: string;
    locale: string
}


const Navbar = (props: Props) => {

    const { openSidebar, openSubmenu, closeSubmenu } = useNavbarContext()
    const router = useRouter()

    const handleMouseOver = (target: string): void => {
        const tempBtn = document.querySelector(`[data-target="${target}"]`);
        // console.log(target);
        if (tempBtn instanceof HTMLElement) {
            const tempBtnRect = tempBtn.getBoundingClientRect();
            const center = (tempBtnRect.left + tempBtnRect.right) / 2;
            const bottom = tempBtnRect.bottom - 3;
            openSubmenu(target, { center, bottom });
        }
    };

    const handleSubmenu = (e: MouseEvent<HTMLElement>): void => {
        const target = e.target as HTMLElement;
        if (!target.classList.contains('a')) {
            closeSubmenu();
        }
    };

    const handleClose = () => {
        openSidebar();

    };

    // old
    const { articles, contact, home, locale, missions, statistics, observatory, publications, reports, search, collaborations, videos } = props

    const links = [
        { id: 0, text: home, url: `/${locale}`, target: "home", hasLinks: true },
        { id: 1, text: observatory, url: `/${locale}/observatory`, target: "observatory", hasLinks: true },
        { id: 2, text: statistics, url: `/${locale}/statistics`, target: "statistics", hasLinks: false },
        { id: 3, text: articles, url: `/${locale}/articles`, target: "articles", hasLinks: false },
        { id: 4, text: publications, url: `/${locale}/publications`, target: "publications", hasLinks: false },
        { id: 5, text: collaborations, url: `/${locale}/content/partners`, target: "collaborations", hasLinks: true },
        { id: 6, text: videos, url: `/${locale}/content/videos`, target: "videos", hasLinks: true },
        // { id: 6, text: missions, url: `/${locale}/missions`, target: "missions", hasLinks: true },
    ];

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef<HTMLDivElement | null>(null);
    const linksRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (linksRef.current && linksContainerRef.current) {
            const linksHeight = linksRef.current.getBoundingClientRect().height;
            if (showLinks) {
                linksContainerRef.current.style.height = `${linksHeight}px`;
            } else {
                linksContainerRef.current.style.height = '0px';
            }
        }
    }, [showLinks]);


    return (
        <nav className='py-5 lg:py-0 bg-myBlue' onMouseOver={handleSubmenu}>
            <div className='flex justify-between space-x-10 body-container'>
                <ul className="hidden space-x-1 lg:flex">
                    {links.map((link) => (
                        <li
                            key={link.id}
                            onMouseOver={() => handleMouseOver(link.target)} data-target={link.target}
                            className="px-1 ticker-item lg:relative group"
                        >
                            <button onClick={() => router.push(link.url)} className="a text-[10px] lg:text-[9.2px] xl:text-[11.3px] font-bold link-btn py-6">
                                {/* <Link href={link.url}> */}
                                {link.text}
                                <span className="a absolute inset-x-0 bottom-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                                {/* </Link> */}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center space-x-2 lg:flex-row-reverse">
                    <Theme />
                    <LocalSwitcher />
                    <SearchBox locale={locale} search={search} />
                </div>
                <button
                    className="text-white lg:hidden focus:outline-none"
                    onClick={handleClose}
                >
                    <FaBars />
                </button>
            </div>
        </nav>
    )
};

export default Navbar;


/*
<nav className="bg-myBlue">
            <div className="container px-4 mx-auto">
                <div className="flex flex-row-reverse items-center justify-between py-4 md:flex-row">
                    <ul className="items-center hidden space-x-2 md:flex">
                        {links.map((link) => (
                            <li
                                key={link.id}
                                onMouseOver={() => handleMouseOver(link.target)} data-target={link.target}
                                className="relative"
                            >
                                <Link href={link.url} className="a">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-row-reverse items-center space-x-2">
                        <Theme />
                        <LocalSwitcher />
                        <SearchBox locale={locale} search={search} />
                    </div>
                    <button
                        className="text-white md:hidden focus:outline-none"
                        onClick={toggleLinks}
                    >
                        <FaBars />
                    </button>
                </div>
                {showLinks && (
                    <div className="md:hidden">
                        <ul className="flex flex-col space-y-2">
                            {links.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.url}>
                                        aa
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
*/


/*
!worked version
 <nav className="bg-myBlue" onMouseOver={handleSubmenu}>
            <div className={`nav-center body-container `}>

                <div className='links-container' ref={linksContainerRef} >
                    <ul className={`links`} ref={linksRef}>
                        {links.map((link: any) => {
                            const { id, url, text, target } = link;
                            return (
                                <li
                                    onMouseOver={() => handleMouseOver(target)} data-target={target}
                                    key={id}
                                >
                                    <Link href={url} className="text-xs a" >{text}
                                    </Link>
                                </li>
                            );
                        })}

                    </ul>
                </div>

                <div className='nav-header'>
                    <div className={`flex md:flex-row-reverse space-x-2 items-center `}>
                        <div className="mx-2 mt-2">
                            <Theme />
                        </div>
                        <LocalSwitcher />
                        <div className="">
                            <SearchBox locale={locale} search={search} />
                        </div>
                    </div >

                    <button className='nav-toggle' onClick={toggleLinks} >
                        <FaBars />
                    </button >
                </div >
            </div >
        </nav >
*/



/*
 <nav className="bg-myBlue" onMouseOver={handleSubmenu}>
            <div className={`nav-center body-container `}>

                <div className='links-container' ref={linksContainerRef} >
                    <ul className={`links`} ref={linksRef}>
                        {links.map((link: any) => {
                            const { id, url, text, target } = link;
                            return (
                                <li
                                    onMouseOver={() => handleMouseOver(target)} data-target={target}
                                    key={id}
                                >
                                    <Link href={url} className="link-btn" >{text}
                                    </Link>
                                </li>
                            );
                        })}

                    </ul>
                </div>


                <div className='nav-header'>
                    <div className={`flex md:flex-row-reverse space-x-2 items-center `}>
                        <div className="mx-2 mt-2">
                            <Theme />
                        </div>
                        <LocalSwitcher />
<div className="">
    <SearchBox locale={locale} search={search} />
</div>
                    </div >

    < button className = 'nav-toggle' onClick = { toggleLinks } >
        <FaBars />
                    </ >
                </div >
            </div >
        </nav >
*/



// !out
/* 
 <nav className='nav' onMouseOver={handleSubmenu}>
            <div className='nav-center'>
                <div className='nav-header'>
                    
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links '>
                    <li>
                        <button className='text-black link-btn'
                            onMouseOver={() => handleMouseOver("home")} data-target={"home"}>
                            home
                        </button>
                    </li>
                    <li>
                        <button className='text-black link-btn' onMouseOver={() => handleMouseOver("articles")} data-target={"articles"}>
                            articles
                        </button>
                    </li>
                    <li>
                        <button className='text-black link-btn' onMouseOver={() => handleMouseOver("publications")} data-target={"publications"}>
                            versions
                        </button>
                    </li>
                </ul>
                <button className='btn signin-btn'>Sign in</button>
            </div>
        </nav>
*/