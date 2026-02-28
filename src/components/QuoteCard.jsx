'use client'
import React, { useState, useEffect, useRef } from 'react'
import appConfig from '@/app/config/appConfig'

const QuoteCard = ({ title, price, variation, isFeatured }) => {
  const [currentPrice, setCurrentPrice] = useState(price)
  const [priceFlash, setPriceFlash] = useState(false)
  const [delta, setDelta] = useState(variation)
  const [deltaFlash, setDeltaFlash] = useState(false)
  const demoTimerRef = useRef()
  const prevPriceRef = useRef(price)

  useEffect(() => {
    if (appConfig.debug) {
      const demoInterval = setInterval(() => {
        setCurrentPrice(prev => prev + Math.random() * 100)
        setDelta(prev => prev + Math.random() * 10 - 5)
      }, 5000 + Math.random() * 2000)
      demoTimerRef.current = demoInterval
    }
    return () => clearInterval(demoTimerRef.current)
  }, [])

  useEffect(() => {
    if (prevPriceRef.current !== currentPrice) {
      setPriceFlash(true)
      const timer = setTimeout(() => setPriceFlash(false), 400)
      prevPriceRef.current = currentPrice
      return () => clearTimeout(timer)
    }
  }, [currentPrice])

  useEffect(() => {
    setDeltaFlash(true)
    const timer = setTimeout(() => setDeltaFlash(false), 500)
    return () => clearTimeout(timer)
  }, [delta])

  const isPositive = delta > 0
  const isNegative = delta < 0

  const displayName = {
    blue: "Blue",
    oficial: "Oficial",
    mayorista: "Mayorista",
    ahorro: "Ahorro",
    tarjeta: "Tarjeta",
    cripto: "Cripto",
    mep: "MEP",
    ccl: "CCL",
  }

  return (
    <div
      className={`
        group relative flex flex-col justify-between
        rounded-xl border border-border bg-card p-4
        transition-all duration-300 hover:border-accent/30 hover:bg-card/80
        ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}
      `}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          {title === "blue" && (
            <span className="flex h-2 w-2 rounded-full bg-blue-400" />
          )}
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {displayName[title] || title}
          </h3>
        </div>

        <div
          className={`
            flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono font-medium
            transition-colors duration-500
            ${isNegative
              ? "bg-emerald-500/10 text-emerald-400"
              : isPositive
                ? "bg-red-500/10 text-red-400"
                : "bg-muted text-muted-foreground"
            }
            ${deltaFlash ? (isNegative ? "bg-emerald-500/25" : isPositive ? "bg-red-500/25" : "") : ""}
          `}
        >
          <span aria-hidden="true">{isPositive ? "\u25B2" : isNegative ? "\u25BC" : "\u2022"}</span>
          <span>{String(delta.toFixed(2)).replace('-', '')}%</span>
        </div>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-sm text-muted-foreground font-mono">$</span>
        <span
          className={`
            text-2xl font-mono font-semibold tracking-tight text-foreground
            transition-colors duration-400
            ${isFeatured ? "md:text-4xl" : ""}
            ${priceFlash ? "text-accent" : ""}
          `}
        >
          {currentPrice.toFixed(2)}
        </span>
        <span className="text-xs text-muted-foreground font-mono ml-1">ARS</span>
      </div>
    </div>
  )
}

export default QuoteCard
