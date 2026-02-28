'use client'
import React, { useState } from "react";
import Header from "@/components/Header";
import QuotesPage from "@/pages/QuotesPage";
import Footer from "@/components/Footer";

export default function Home() {
  const [currency, setCurrency] = useState("USD")

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Header currency={currency} setCurrency={setCurrency} />
      <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-6 md:px-6 lg:px-8">
        <QuotesPage key={currency} currency={currency} />
      </div>
      <Footer currency={currency} />
    </main>
  );
}
