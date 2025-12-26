import React from "react";
import { ChefHat, RefreshCw } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white shadow-sm border-b border-orange-100">
      <div className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-3 rounded-full">
            <ChefHat className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Recipe Discover</h1>
            <p className="text-gray-600">Discover amazing meals from around the world</p>
          </div>
        </div>
        <button className="flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300">
          <RefreshCw className="h-5 w-5 mr-2" />
          <span>Get Random Recipe</span>
        </button>
      </div>
    </div>
  );
}