"use client"
import { achievements, reports } from "@/utils/data";
import React, { useState } from "react";

const ReportsPage = () => {

    const [currentCategory, setCurrentCategory] = useState('reports');

    const handleCategoryChange = (category: string) => {
        setCurrentCategory(category);
    };

    return (
        <section className="my-12 body-container text-end">
            <h1 className="mb-8 text-3xl font-bold underline underline-offset-8 decoration-yellow-500">التقارير والإنجازات</h1>

            <div className="mb-4">
                <button
                    className={`mx-2 py-2 px-4 rounded font-bold  ${currentCategory === 'reports' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => handleCategoryChange('reports')}
                >
                    التقارير
                </button>
                <button
                    className={`mx-2 py-2 px-4 rounded font-bold ${currentCategory === 'achievements' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => handleCategoryChange('achievements')}
                >
                    الإنجازات
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {currentCategory === 'reports' &&
                    reports.map((report, index) => (
                        <div key={`report_${index}`} className="bg-white rounded-lg shadow-md ">
                            <img src={report.image} alt={report.title} className="object-cover w-full mb-4 rounded-md h-52" />
                            <div className="px-4">
                                <h3 className="mb-2 text-lg font-bold text-myBlue">{report.title}</h3>
                                <p className="text-gray-600">{report.description}</p>
                            </div>
                        </div>
                    ))}

                {currentCategory === 'achievements' &&
                    achievements.map((achievement, index) => (
                        <div key={`achievement_${index}`} className="bg-white rounded-lg shadow-md ">
                            <img src={achievement.image} alt={achievement.title} className="object-cover w-full mb-4 rounded-md h-52" />
                            <div className="px-4">
                                <h3 className="mb-2 text-lg font-bold text-myBlue">{achievement.title}</h3>
                                <p className="text-gray-600">{achievement.description}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
};

export default ReportsPage;
