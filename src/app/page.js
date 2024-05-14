import Header from "@/components/Header";
import QuotesPage from "@/pages/QuotesPage";
import Footer from "@/components/Footer";
import getDolarQuotes from "@/services/dolarFetch.js";

import '../styles/main.css'


export default function Home() {
  getDolarQuotes()
  return (
    <main>
        <Header/>
        <QuotesPage/>
        <Footer/>
    </main>
  );
}
