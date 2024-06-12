'use client'
import React,{useEffect, useState, useRef} from "react";
import '../styles/quotesPage.css'
import QuoteCard from "@/components/QuoteCard";
import {getDolarQuotes, getCanadianDolarQuotes, getAustralianDolarQuotes} from "@/services/dolarFetch";
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
    const [currency, setCurrency] = typeof window !== "undefined" ? useState(localStorage.getItem('currency')||"USD") : useState('USD')
    const [lastUpdate, setLastUpdate] = useState('')
    const autoRefreshRef = useRef()

    const swapBlue = (arr) => {
        let blueValue = arr.filter(q => q.name === 'blue')
        arr.splice(arr.indexOf(...blueValue),1)
        arr.unshift(...blueValue)
        return arr
    }

    const getLastUpdate = () => {
        let arr = [...quotes]
        arr.sort((a,b) => b.lastUpdate - a.lastUpdate )
        let date = new Date(arr[0].lastUpdate)
        let dateString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} GMT-03:00`
        setLastUpdate(dateString)
    }

    useEffect(()=>{
        const getQuotes = async() => {

            setCurrency(localStorage.getItem('currency'))

            if(!currency || currency == "USD"){
                const resp = await getDolarQuotes().then(res => {res = swapBlue(res); setQuotes(res)})
            }
            else if(currency == "CAD"){
                const resp = await getCanadianDolarQuotes().then(res => {res = swapBlue(res); setQuotes(res)})
            }
            else if(currency == "AUD"){
                const resp = await getAustralianDolarQuotes().then(res => {res = swapBlue(res); setQuotes(res)})
            }
        }
        getQuotes()
        if(appConfig.autoRefresh){
            const timerId = setInterval(()=>{
                getQuotes()
            }, appConfig.refreshTimeMs)
            autoRefreshRef.current = timerId
        }
        return () => {
            clearInterval(autoRefreshRef.current)
        }
    },[])

    useEffect(()=> {
        if(quotes.length > 0){
            setLoading(false)
            getLastUpdate()
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
                <p id='lastUpdate'>Last update: {lastUpdate}</p>
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