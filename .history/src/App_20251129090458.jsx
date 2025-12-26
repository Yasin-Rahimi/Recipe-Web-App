import React from "react";
import RecipePage from "./components/RecipePage";
import Modal from "./components/Modal";

export default function App() {
  const handleYes = () => {
    console.log("User clicked Yes");
  };

  const handleNo = () => {
    console.log("User clicked No");
  };
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fffbeb] to-[#fef3c7] pb-6">
      <RecipePage />
    </main>
  );
}