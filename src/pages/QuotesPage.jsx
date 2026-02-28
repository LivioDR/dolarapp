'use client'
import React, { useEffect, useState, useRef } from "react";
import QuoteCard from "@/components/QuoteCard";
import { getDolarQuotes, getCanadianDolarQuotes, getAustralianDolarQuotes } from "@/services/dolarFetch";
import Loading from "@/components/Loading";
import appConfig from "@/app/config/appConfig";

const CURRENCY_LABELS = {
  USD: "US Dollar",
  CAD: "Canadian Dollar",
  AUD: "Australian Dollar",
}

const QuotesPage = ({ currency }) => {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState('')
  const autoRefreshRef = useRef()

  const swapBlue = (arr) => {
    let blueValue = arr.filter(q => q.name === 'blue')
    arr.splice(arr.indexOf(...blueValue), 1)
    arr.unshift(...blueValue)
    return arr
  }

  const getLastUpdate = (quotes) => {
    let arr = [...quotes]
    arr.sort((a, b) => b.lastUpdate - a.lastUpdate)
    let date = new Date(arr[0].lastUpdate * 1000)
    setLastUpdate(date.toLocaleString('es', { timeZone: 'America/Argentina/Buenos_Aires' }))
  }

  useEffect(() => {
    if (appConfig.autoRefresh) {
      const getQuotes = () => {
        if (currency === "USD") {
          getDolarQuotes().then(res => { res = swapBlue(res); setQuotes(res) })
        } else if (currency === "CAD") {
          getCanadianDolarQuotes().then(res => { res = swapBlue(res); setQuotes(res) })
        } else if (currency === "AUD") {
          getAustralianDolarQuotes().then(res => { res = swapBlue(res); setQuotes(res) })
        }
      }
      const timerId = setInterval(() => {
        getQuotes()
      }, appConfig.refreshTimeMs)
      autoRefreshRef.current = timerId
    }
    return () => {
      clearInterval(autoRefreshRef.current)
    }
  }, [currency])

  useEffect(() => {
    const getQuotes = () => {
      if (currency === "USD") {
        getDolarQuotes().then(res => { res = swapBlue(res); setQuotes(res) })
      } else if (currency === "CAD") {
        getCanadianDolarQuotes().then(res => { res = swapBlue(res); setQuotes(res) })
      } else if (currency === "AUD") {
        getAustralianDolarQuotes().then(res => { res = swapBlue(res); setQuotes(res) })
      }
    }
    getQuotes()
  }, [currency])

  useEffect(() => {
    if (quotes.length > 0) {
      setLoading(false)
      getLastUpdate(quotes)
    } else {
      setLoading(true)
    }
  }, [quotes])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <h2 className="text-xl font-semibold text-foreground tracking-tight">
            {CURRENCY_LABELS[currency]} <span className="text-accent">/ ARS</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {quotes.length} exchange rate types
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span>Updated {lastUpdate}</span>
        </div>
      </div>

      {/* Quotes grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {quotes.map((quote, index) => (
          <QuoteCard
            key={quote.name + quote.price}
            title={quote.name}
            price={quote.price}
            variation={quote.variation}
            isFeatured={index === 0}
          />
        ))}
      </div>
    </div>
  )
}

export default QuotesPage
