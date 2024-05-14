'use client'

import React,{useEffect, useState} from "react";
import QuoteCard from "@/components/QuoteCard";
import getDolarQuotes from "@/services/dolarFetch";

const quotesContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '80vh',
    overflowY: 'scroll',
}


const QuotesPage = () => {
    
    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getQuotes = async() => {
            const resp = await getDolarQuotes().then(res => setQuotes(res))
        }
        getQuotes()
        setInterval(()=>{
            getQuotes()
        }, 15000)
    },[])

    useEffect(()=> {
        if(quotes.length > 0){
            setLoading(false)
        }
        else(
            setLoading(true)
        )
    },[quotes])


    if(!loading){
        return(
            <>
            <div className="quotesContainer" style={quotesContainerStyle}>
                {quotes.map((quote) => <QuoteCard key={quote.name} id={quote.name} title={quote.name} price={quote.price} variation={quote.variation}></QuoteCard>)}
            </div>
            <a style={{'font-size': 'small'}} href="https://www.flaticon.com/free-icons/benjamin-franklin" title="benjamin franklin icons">Benjamin franklin icons created by Vitaly Gorbachev - Flaticon</a>
            </>
        )
    }
    else{
        return(
            <p>Loading...</p>
        )
    }
}
export default QuotesPage