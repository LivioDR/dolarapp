import Header from "@/components/Header";
import QuotesPage from "@/pages/QuotesPage";
import getDolarQuotes from "@/services/dolarFetch.js";


export default function Home() {
  getDolarQuotes()
  return (
    <main>
        <Header/>
        <QuotesPage/>
    </main>
  );
}
