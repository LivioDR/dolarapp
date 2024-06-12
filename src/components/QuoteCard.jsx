'use client'
import '../styles/quoteCard.css'
import { useState, useEffect, useRef } from 'react'
import appConfig from '@/app/config/appConfig'
import { Shrikhand } from 'next/font/google'
const customFont = Shrikhand({weight: '400', subsets: ['latin']})


const QuoteCard = (props) => {
    
    // get the viewport width to switch fonts
    const viewport = window.innerWidth

    const title = props.title
    const [price, setPrice] = useState(props.price)
    const [priceStyle, setPriceStyle] = useState({backgroundColor: 'rgba(255, 255, 255, 0)'})
    const [delta, setDelta] = useState(props.variation)
    const [deltaStyle, setDeltaStyle] = useState({backgroundColor:`rgba(${delta < 0? 0 : 255}, ${delta >= 0 ? 0 : 255}, 0, 0)`, color: 'white'})
    const timerRef = useRef()

    useEffect(()=>{
        if(appConfig.debug){
            const demoInterval = setInterval(()=>{
                setPrice(price + Math.random()*100)
                setDelta(delta + Math.random()*10 - 5)
            },5000+Math.random()*2000)
            timerRef.current = demoInterval

        }
        return () => {
            clearInterval(timerRef.current)
        }
    },[])

    useEffect(()=>{
        setPriceStyle({backgroundColor:'rgba(255, 255, 255, 0.8)'})
        setTimeout(()=>{
            setPriceStyle({backgroundColor:'rgba(255, 255, 255, 0)'})
        },300)
    },[price])

    useEffect(()=>{
        if(delta < 0){
            setDeltaStyle({backgroundColor:`rgba(${delta < 0? 0 : 255}, ${delta >= 0 ? 0 : 255}, 0, 0.8)`, color: '#00FF00'})
            setTimeout(()=>{
                setDeltaStyle({backgroundColor:`rgba(${delta < 0? 0 : 255}, ${delta >= 0 ? 0 : 255}, 0, 0)`, color: '#00FF00'})
            },500)
        }
        else if(delta > 0){
            setDeltaStyle({backgroundColor:`rgba(${delta < 0? 0 : 255}, ${delta >= 0 ? 0 : 255}, 0, 0.8)`, color: 'red'})
            setTimeout(()=>{
                setDeltaStyle({backgroundColor:`rgba(${delta < 0? 0 : 255}, ${delta >= 0 ? 0 : 255}, 0, 0)`, color: 'red'})
            },500)
        }
        else {
            setDeltaStyle({backgroundColor:`rgba(${delta < 0? 0 : 255}, ${delta >= 0 ? 0 : 255}, 0, 0.8)`, color: 'white'})
            setTimeout(()=>{
                setDeltaStyle({backgroundColor:`rgba(${delta < 0? 0 : 255}, ${delta >= 0 ? 0 : 255}, 0, 0)`, color: 'white'})
            },500)
        }
    },[delta])

    return(
        <>
        <div className="quoteCard">
            <h1 className={`quoteTitle ${viewport >= 600 ? customFont.className : ''}`}>{title.toUpperCase()}</h1>
            <h2 className="quotePrice" style={priceStyle}>${price.toFixed(2)}</h2>
            <p style={deltaStyle}>{delta > 0 ? '▲' : '▼'} {String(delta.toFixed(2)).replace('-','')}%</p>
        </div>
        </>
    )
}
export default QuoteCard