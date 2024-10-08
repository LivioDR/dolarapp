const baseUrl = 'https://criptoya.com/api/dolar'

const getDolarQuotes = async() => {
    let response = await fetch(baseUrl).then(res => res.json())

    // reordering the response object
    let dolarObj = [
        {   name: 'mayorista',
            price: response.mayorista.price,
            variation: response.mayorista.variation,
            lastUpdate: response.mayorista.timestamp,
        },
        {   name: 'oficial',
            price: response.oficial.price,
            variation: response.oficial.variation,
            lastUpdate: response.oficial.timestamp,
        },
        {   name: 'ahorro',
            price: response.ahorro.ask,
            variation: response.ahorro.variation,
            lastUpdate: response.ahorro.timestamp,
        },
        {   name: 'tarjeta',
            price: response.tarjeta.price,
            variation: response.tarjeta.variation,
            lastUpdate: response.tarjeta.timestamp,
        },
        {   name: 'blue',
            price: response.blue.ask,
            variation: response.blue.variation,
            lastUpdate: response.blue.timestamp,
        },
        {   name: 'cripto',
            price: response.cripto.usdt.ask,
            variation: response.cripto.usdt.variation,
            lastUpdate: response.cripto.usdt.timestamp,
        },
        {   name: 'mep',
            price: response.mep.al30['24hs'].price,
            variation: response.mep.al30['24hs'].variation,
            lastUpdate: response.mep.al30['24hs'].timestamp,
        },
        {   name: 'ccl',
            price: response.ccl.gd30['24hs'].price,
            variation: response.ccl.gd30['24hs'].variation,
            lastUpdate: response.ccl.gd30['24hs'].timestamp,
        }
    ]
    return dolarObj
}

const getFxCadUsd = async() => {
    let response = await fetch('https://www.bankofcanada.ca/valet/observations/fxusdcad/json').then(res => res.json())
    return response.observations[response.observations.length-1].FXUSDCAD.v
}

const getFxCadAud = async() => {
    let response = await fetch('https://www.bankofcanada.ca/valet/observations/fxaudcad/json').then(res => res.json())
    return response.observations[response.observations.length-1].FXAUDCAD.v
}

const getCanadianDolarQuotes = async() => {
    let usdQuotes = await getDolarQuotes()
    
    const fxUSDCAD = Number(await getFxCadUsd())
    
    for(let i=0; i<usdQuotes.length; i++){
        usdQuotes[i].price /= fxUSDCAD
    }

    return usdQuotes
}

const getAustralianDolarQuotes = async() => {
    let cadQuotes = await getCanadianDolarQuotes()
    
    const fxAUDCAD = Number(await getFxCadAud())

    for(let i=0; i<cadQuotes.length; i++){
        cadQuotes[i].price *= fxAUDCAD
    }

    return cadQuotes
}

export { getDolarQuotes, getCanadianDolarQuotes, getAustralianDolarQuotes }