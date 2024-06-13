'use client'
import React, { useState } from "react";
import Header from "@/components/Header";
import QuotesPage from "@/pages/QuotesPage";
import Footer from "@/components/Footer";

import '../styles/main.css'


export default function Home() {
  const [currency, setCurrency] = useState("USD")

  return (
    <main>
        <Header currency={currency} setCurrency={setCurrency}/>
        <QuotesPage key={currency} currency={currency}/>
        <Footer currency={currency}/>
    </main>
  );
}
