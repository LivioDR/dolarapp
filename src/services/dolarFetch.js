const baseUrl = 'https://criptoya.com/api/dolar'

const getDolarQuotes = async() => {
    let response = await fetch(baseUrl).then(res => res.json())

    // reordering the response object
    let dolarObj = [
        {   name: 'mayorista',
            price: response.mayorista.price,
            variation: response.mayorista.variation,
        },
        {   name: 'oficial',
            price: response.oficial.price,
            variation: response.oficial.variation,
        },
        {   name: 'ahorro',
            price: response.ahorro.ask,
            variation: response.ahorro.variation,
        },
        {   name: 'tarjeta',
            price: response.tarjeta.price,
            variation: response.tarjeta.variation,
        },
        {   name: 'blue',
            price: response.blue.ask,
            variation: response.blue.variation,
        },
        {   name: 'cripto',
            price: response.cripto.usdt.ask,
            variation: response.cripto.usdt.variation,
        },
        {   name: 'mep',
            price: response.mep.al30['48hs'].price,
            variation: response.mep.al30['48hs'].variation,
        },
        {   name: 'ccl',
            price: response.ccl.gd30['48hs'].price,
            variation: response.ccl.gd30['48hs'].variation,
        }
    ]
    return dolarObj
}
export default getDolarQuotes