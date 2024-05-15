import Header from "@/components/Header";
import QuotesPage from "@/pages/QuotesPage";
import Footer from "@/components/Footer";

import '../styles/main.css'


export default function Home() {
  return (
    <main>
        <Header/>
        <QuotesPage/>
        <Footer/>
    </main>
  );
}
