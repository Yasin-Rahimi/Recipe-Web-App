import React from "react";

export default function Ingredients() {
  const ingredients = [
    { name: "Flour", value: "2 cups" },
    { name: "Eggs", value: "3 pcs" },
  ];

  return (
    <div className="rounded-lg bg-white shadow-lg">
      <h1 className="text-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 p-6 rounded-t-lg">
        Ingredients
      </h1>
      <ul className="p-6">
        {ingredients.map((item, index) => (
          <li
            key={index}
            className={`flex justify-between items-center py-2 ${
              index === ingredients.length - 1 ? "" : "border-b border-orange-100"
            } ${index === 0 ? "pt-5" : ""}`}
          >
            <span className="font-medium text-gray-700">{item.name}</span>
            <span className="px-3 py-1 rounded-full text-sm text-gray-600 bg-gray-50">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}