'use client'

import React,{useEffect, useState} from "react";
import QuoteCard from "@/components/QuoteCard";
import getDolarQuotes from "@/services/dolarFetch";
import Loading from "@/components/Loading";
import appConfig from "@/app/config/appConfig";

const quotesContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '80vh',
    overflowY: 'scroll',
    backgroundColor: '#15002a',
}


const QuotesPage = () => {
    
    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(true)
    
    const swapBlue = (arr) => {
        let blueValue = arr.filter(q => q.name === 'blue')
        arr.splice(arr.indexOf(...blueValue),1)
        arr.unshift(...blueValue)
        return arr
    }

    useEffect(()=>{
        const getQuotes = async() => {
            const resp = await getDolarQuotes().then(res => {res = swapBlue(res); setQuotes(res)})
        }
        getQuotes()
        if(appConfig.autoRefresh){
            setInterval(()=>{
                getQuotes()
            }, appConfig.refreshTimeMs)
        }
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
            </>
        )
    }
    else{
        return(
            <Loading/>
        )
    }
}
export default QuotesPage