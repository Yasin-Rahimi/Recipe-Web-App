import React from "react";
import SmallCards from "./SmallCard";
import Ingredients from "./Ingredients";
import YoutubeBox from "./YoutubeBox";

export default function Meal() {
  return (
    <div className="flex max-w-6xl mx-auto" id="meal">
      {/* Intro Section */}
      <div className="flex flex-col w-1/2 p-6">
        <div
          className="rounded-lg bg-white shadow-lg border border-orange-100 bg-cover bg-center flex h-80"
          style={{
            backgroundImage:
              "url('https://www.themealdb.com/images/media/meals/cuio7s1555492979.jpg')",
          }}
        >
          <div className="self-end p-4">
            <h1 className="text-3xl font-bold text-white mb-2">Sample Meal</h1>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-500 mr-3">
              Category
            </span>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-500 mr-3">
              Area
            </span>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-500">
              Tag
            </span>
          </div>
        </div>
        <SmallCards />
      </div>

      {/* Ingredients and YouTube Section */}
      <div className="flex flex-col w-1/2 p-6">
        <Ingredients />
        <YoutubeBox />
      </div>
    </div>
  );
}