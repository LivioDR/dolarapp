const cardStyle = {
    backgroundColor: 'rgba(150,150,150,0.5)',
    width: '40vw',
    heigth: '30vw',
    // aspectRatio: 1,
    borderRadius: '20%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '5% auto',
    boxShadow: 'rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px',
}


const titleStyle = {
    fontSize: 'x-large',
}

const priceStyle = {
    fontSize: 'large',
}

const QuoteCard = (props) => {

    const title = props.title
    const price = props.price
    const delta = props.variation


    return(
        <>
        <div className="quoteCard" style={cardStyle}>
            <h1 className="quoteTitle" style={titleStyle}>{title.toUpperCase()}</h1>
            <h2 className="quotePrice" style={priceStyle}>$ {price.toFixed(2)}</h2>
            <p style={{'color': delta > 0 ? 'red' : delta < 0 ? 'green' : 'white' }}>{delta > 0 ? '+' : ''}{delta.toFixed(2)}%</p>
        </div>
        </>
    )
}
export default QuoteCard