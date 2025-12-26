import React from "react";

export default function Instructions({ instructions }) {
  return (
    <section className="flex-wrap max-w-6xl mx-auto p-3.5">
      <h1 className="text-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 p-6 rounded-t-lg w-full">
        Cooking Instructions
      </h1>
      <div className="bg-white shadow-lg rounded-b-lg p-6 flex flex-col gap-4 w-full">
        {instructions.map((step, index) => (
          <div key={index} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
              {index + 1}
            </span>
            <p className="text-gray-600 leading-relaxed pt-1">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}