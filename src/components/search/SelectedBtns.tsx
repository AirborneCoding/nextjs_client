"use client"
import React, { useEffect } from "react";

type Props = {
    selectedButton: string;
    articlesBtn: string;
    articlesLen: number;
    versionsBtn: string;
    versionsLen: number;
    isPending: boolean;
    data: any
    switchButton: (buttonType: string) => void;
    setSelectedButton: (selectedButton: string) => void;
};



const SelectedBtns = (props: Props) => {
    const {
        selectedButton,
        articlesBtn,
        articlesLen,
        versionsBtn,
        versionsLen,
        data,
        isPending,
        setSelectedButton,
        switchButton
    } = props

    useEffect(() => {
        if (!isPending) {
            const { articles, versions } = data;
            const articlesLen = articles?.meta?.pagination?.total || 0;
            const versionsLen = versions?.meta?.pagination?.total || 0;
            // todo:statics / reports
            const maxLen = Math.max(articlesLen, versionsLen);
            setSelectedButton(maxLen === articlesLen ? "articles" : "versions");
        }
    }, [data]); // data, isPending

    return (
        <div className="bg-myBlue w-fit p-2 rounded-md flex gap-4">
            <button className={`${selectedButton === "articles" ? "bg-yellow-500 text-myBlue" : ""} font-bold btn`}
                onClick={() => switchButton("articles")}>
                {articlesBtn} ({articlesLen})
            </button>
            <button className={`${selectedButton === "versions" ? "bg-yellow-500 text-myBlue" : ""} font-bold btn`}
                onClick={() => switchButton("versions")}>
                {versionsBtn} ({versionsLen})
            </button>
        </div>
    )
};

export default SelectedBtns;
