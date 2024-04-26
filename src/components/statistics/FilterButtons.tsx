import React from "react";
import { AiOutlineBarChart, AiOutlineLineChart } from "react-icons/ai";

interface FilterButtonsProps {
  selectedChart: string;
  handleChartToggle: (chartType: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ selectedChart, handleChartToggle }) => {
  return (
    <div className="flex gap-6">
      <button
        className={`text-myBlue flex space-x-2 items-center ${selectedChart === 'bar' ? 'bg-yellow-500' : 'bg-gray-200'
          } hover:bg-yellow-500 hover:text-white active:bg-yellow-600 active:text-white rounded-md py-2 px-4`}
        onClick={() => handleChartToggle('bar')}
      >
        {/* <div>Bar Chart</div> */}
        <AiOutlineBarChart size={18} />
      </button>
      <button
        className={` text-myBlue flex space-x-3 items-center ${selectedChart === 'area' ? 'bg-yellow-500' : 'bg-gray-200'
          } hover:bg-yellow-500 hover:text-white active:bg-yellow-600 active:text-white rounded-md py-2 px-4`}
        onClick={() => handleChartToggle('area')}
      >
        {/* <div>Area Chart</div> */}
        <AiOutlineLineChart size={18} />
      </button>
    </div>
  );
};

export default FilterButtons;
