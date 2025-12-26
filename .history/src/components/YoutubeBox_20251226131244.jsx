import React from "react";
// import { Youtube } from "lucide-react";
import { Youtube } from "flowbite-react-icons/solid";

export default function YoutubeBox({ videoUrl, label }) {
  return (
    <div className="rounded-lg bg-white shadow-lg border border-orange-100 w-full h-[100px] mt-6 p-6">
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300 cursor-pointer"
      >
        <Youtube class />
        {label}
      </a>
    </div>
  );
}