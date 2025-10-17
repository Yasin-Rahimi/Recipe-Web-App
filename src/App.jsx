import React from "react";
import Header from "./components/Header";
import Meal from "./components/Meal";
import Instructions from "./components/Instructions";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fffbeb] to-[#fef3c7] pb-6">
      <Header />
      <Meal />
      <Instructions />
    </main>
  );
}