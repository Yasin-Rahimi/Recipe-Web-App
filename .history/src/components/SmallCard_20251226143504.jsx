import React from "react";
import { Clock, Users, ChefHat } from "lucide-react";

export default function SmallCards(SmallCards) {
  const { prepTime, servings, difficulty } = SmallCards;
  return (
    <div className="flex flex-wrap justify-evenly bg-white rounded-lg mt-5 p-5 shadow-lg max-w-[35rem]">
      <div className="flex flex-col p-4 rounded-lg h-[100px] w-[150px] justify-center items-center bg-orange-50">
        <Clock className="text-orange-500" />
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold text-gray-600">Prep Time</span>
          <p className="font-semibold text-gray-900">30 min</p>
        </div>
      </div>
      <div className="flex flex-col p-4 rounded-lg h-[100px] w-[150px] justify-center items-center bg-yellow-50">
        <Users className="text-yellow-500" />
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold text-gray-600">Servings</span>
          <p className="font-semibold text-gray-900">4 people</p>
        </div>
      </div>
      <div className="flex flex-col p-4 rounded-lg h-[100px] w-[150px] justify-center items-center bg-yellow-100">
        <ChefHat className="text-yellow-600" />
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold text-gray-600">Difficulty</span>
          <span className="font-semibold text-gray-900">medium</span>
        </div>
      </div>
    </div>
  );
}