"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import Image from "next/image";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});
const brandData = [
  {
   component:"section 1",
   title: "this is title",
   content: "this is content",
   buttontext: "click this"
  }
];

const ECommerce: React.FC = () => {
  return (
    <>
     <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        HomePage
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            component
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            title
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            content
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            buttontext
            </h5>
          </div>
          
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5 font-bold">
              
              <p className="hidden text-black dark:text-white sm:block text-xl ">
                {brand.component}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5 font-bold">
              <p className="text-black dark:text-white">{brand.title}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5 font-bold">
              <p className="text-meta-3">{brand.content}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 font-bold">
              <p className="text-black dark:text-white">{brand.buttontext}</p>
            </div>

            
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ECommerce;
