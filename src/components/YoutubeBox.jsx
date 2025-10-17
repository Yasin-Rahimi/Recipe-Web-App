import React from "react";
import { YoutubeBox } from "lucide-react";

export default function YoutubeBox() {
  return (
    <div className="rounded-lg bg-white shadow-lg border border-orange-100 w-full h-[100px] mt-6 p-6">
      <div className="flex items-center justify-center w-full h-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300 cursor-pointer">
        <YoutubeBox className="w-6 h-6 mr-2 stroke-white" />
        Watch Video Tutorial
      </div>
    </div>
  );
}