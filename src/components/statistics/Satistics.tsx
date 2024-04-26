"use client"
import React, { useEffect, useState } from "react";
import getSpecificValue from "./Data";
import FilterButtons from "./FilterButtons";

import {
    BarChart,
    Bar,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";



const categoryCharts = [
    {
        category: "إحصائيات متعلقة بالأموال",
        color: "#82ca9d",
        name: "إحصائيات متعلقة بالأموال",
    },
    {
        category: "إحصائيات متعلقة بالأمن و النظام العام",
        color: "#d34d4d",
        name: "إحصائيات متعلقة بالأمن و النظام العام",
    },
    {
        category: "إحصائيات متعلقة بالتزوير و التزييف و الاتصال",
        color: "#fca17d",
        name: "إحصائيات متعلقة بالتزوير و التزييف و الاتصال"
    },
    {
        category: "إحصائيات متعلقة بالمخدرات",
        color: "#6a4c93",
        name: "إحصائيات متعلقة بالمخدرات",
    },
    {
        category: "إحصائيات متعلقة بقوانين خاصة",
        color: "#68d391",
        name: "إحصائيات متعلقة بقوانين خاصة"
    },
    {
        category: "إحصائيات متعلقة بنظام الأسرة و الأخلاق",
        color: "#ffc658",
        name: "إحصائيات متعلقة بنظام الأسرة و الأخلاق",
    },
    {
        category: "إحصائيات ضد الاشخاص",
        color: "#8884d8",
        name: "إحصائيات ضد الاشخاص",
    },
];

const statics = [
    {
        id: 1,
        title: "قضايا في الجنايات و الجنح المرتكبة ضد الأموال من 2012 الى 2017",
        description: "إصدارات مركز الدراسات وأحباث السياسة اجلنائية مبدرررة الؤوو اجلنائية والفو سلسلة دراسات وأحباث جنائية - الفدد 4 - شتنرب 2",
        pdfs: [
            { src: "" },
            { src: "" }
        ],
        category: { name: "إحصائيات متعلقة بالأموال" }
    },
    {
        id: 2,
        title: "قضايا في الجنايات و الجنح المرتكبة ضد الأموال من 2012 الى 2017",
        description: "إصدارات مركز الدراسات وأحباث السياسة اجلنائية مبدرررة الؤوو اجلنائية والفو سلسلة دراسات وأحباث جنائية - الفدد 4 - شتنرب 2",
        pdfs: [
            { src: "" },
            { src: "" }
        ],
        category: { name: "إحصائيات متعلقة بالأمن و النظام العام" }
    },
    {
        id: 3,
        title: "قضايا في الجنايات و الجنح المرتكبة ضد الأموال من 2012 الى 2017",
        description: "إصدارات مركز الدراسات وأحباث السياسة اجلنائية مبدرررة الؤوو اجلنائية والفو سلسلة دراسات وأحباث جنائية - الفدد 4 - شتنرب 2",
        pdfs: [
            { src: "" },
            { src: "" }
        ],
        category: { name: "إحصائيات متعلقة بالمخدرات" }
    },
    {
        id: 4,
        title: "قضايا في الجنايات و الجنح المرتكبة ضد الأموال من 2012 الى 2017",
        description: "إصدارات مركز الدراسات وأحباث السياسة اجلنائية مبدرررة الؤوو اجلنائية والفو سلسلة دراسات وأحباث جنائية - الفدد 4 - شتنرب 2",
        pdfs: [
            { src: "" },
            { src: "" }
        ],
        category: { name: "إحصائيات متعلقة بالتزوير و التزييف و الاتصال" }
    },
    {
        id: 5,
        title: "قضايا في الجنايات و الجنح المرتكبة ضد الأموال من 2012 الى 2017",
        description: "إصدارات مركز الدراسات وأحباث السياسة اجلنائية مبدرررة الؤوو اجلنائية والفو سلسلة دراسات وأحباث جنائية - الفدد 4 - شتنرب 2",
        pdfs: [
            { src: "" },
            { src: "" }
        ],
        category: { name: "إحصائيات متعلقة بنظام الأسرة و الأخلاق" }
    },
    {
        id: 6,
        title: "قضايا في الجنايات و الجنح المرتكبة ضد الأموال من 2012 الى 2017",
        description: "إصدارات مركز الدراسات وأحباث السياسة اجلنائية مبدرررة الؤوو اجلنائية والفو سلسلة دراسات وأحباث جنائية - الفدد 4 - شتنرب 2",
        pdfs: [
            { src: "" },
            { src: "" }
        ],
        category: { name: "إحصائيات متعلقة بقوانين خاصة" }
    },
    {
        id: 7,
        title: "قضايا في الجنايات و الجنح المرتكبة ضد الأموال من 2012 الى 2017",
        description: "إصدارات مركز الدراسات وأحباث السياسة اجلنائية مبدرررة الؤوو اجلنائية والفو سلسلة دراسات وأحباث جنائية - الفدد 4 - شتنرب 2",
        pdfs: [
            { src: "" },
            { src: "" }
        ],
        category: { name: "إحصائيات ضد الاشخاص" }
    }
];

interface CategoryData {
    [key: string]: number; // Define dynamic keys with values of type number
}

// Define an interface for the data structure
interface ChartData {
    year: number;
    [key: string]: number | CategoryData; // Allow dynamic keys with values of type number or CategoryData
}

const Satistics = () => {

    // filtered buttons
    const [selectedChart, setSelectedChart] = useState("bar");
    const handleChartToggle = (chartType: string) => {
        setSelectedChart(chartType);
    };

    // charts logic
    const [data, setData] = useState<ChartData[]>([]);

    useEffect(() => {
        const getCurrentYear = () => new Date().getFullYear();

        const startYear = 2012;
        const years = Array.from(
            { length: 2017 - startYear + 1 },
            (_, index) => startYear + index
        );

        const generateData = (): ChartData[] => {
            const categories = [
                "إحصائيات متعلقة بالأموال",
                "إحصائيات متعلقة بالأمن و النظام العام",
                "إحصائيات متعلقة بالتزوير و التزييف و الاتصال",
                "إحصائيات متعلقة بالمخدرات",
                "إحصائيات متعلقة بقوانين خاصة",
                "إحصائيات متعلقة بنظام الأسرة و الأخلاق",
                "إحصائيات ضد الاشخاص",
            ];
            const types = ["عدد القضايا", "عدد المتابعين"];

            return years.map((year) => {
                const categoryData: CategoryData = {};
                categories.forEach((category) => {
                    types.forEach((type) => {
                        const key = `${category}${type}`;
                        categoryData[key] = getSpecificValue(year, category, type);
                    });
                });

                return {
                    year,
                    ...categoryData,
                };
            });
        };

        setData(generateData());
    }, []);

    return (
        <>
            <FilterButtons
                selectedChart={selectedChart}
                handleChartToggle={handleChartToggle}
            />

            <section className="grid grid-cols-1 gap-4 mt-5 lg:grid-cols-2">
                {statics.map((item, index) => (
                    <div key={item.id} className="p-4 bg-white rounded-md shadow">
                        <h2 className="mb-4 text-lg font-semibold text-myBlue">
                            {categoryCharts[index].name}
                        </h2>
                        <ResponsiveContainer width="100%" height={250}>
                            {selectedChart === "area" ? (
                                <AreaChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Area
                                        dataKey={`${categoryCharts[index].category}عدد القضايا`}
                                        fill={categoryCharts[index].color}
                                        name="عدد القضايا"
                                    />
                                    <Area
                                        dataKey={`${categoryCharts[index].category}عدد المتابعين`}
                                        fill={`${categoryCharts[index].color}80`}
                                        name="عدد المتابعين"
                                    />
                                </AreaChart>
                            ) : (
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar
                                        dataKey={`${categoryCharts[index].category}عدد القضايا`}
                                        fill={categoryCharts[index].color}
                                        name="عدد القضايا"
                                    />
                                    <Bar
                                        dataKey={`${categoryCharts[index].category}عدد المتابعين`}
                                        fill={`${categoryCharts[index].color}80`}
                                        name="عدد المتابعين"
                                    />
                                </BarChart>
                            )}
                        </ResponsiveContainer>
                        <div className="flex justify-between gap-5 mt-5">
                            {item.pdfs.map((pdf, pdfIndex) => (
                                <button
                                    key={pdfIndex}
                                    className="w-full py-1 bg-myBlue"
                                >
                                    <a href={pdf.src} className="font-normal text-[18px] text-white" download={categoryCharts[index].name}>
                                        {pdfIndex === 0 ? 'عدد القضايا' : 'عدد المتابعين'}
                                    </a>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
};

export default Satistics;
