import '../styles/quoteCard.css'

const QuoteCard = (props) => {

    const title = props.title
    const price = props.price
    const delta = props.variation


    return(
        <>
        <div className="quoteCard">
            <h1 className="quoteTitle">{title.toUpperCase()}</h1>
            <h2 className="quotePrice">$ {price.toFixed(2)}</h2>
            <p style={{'color': delta > 0 ? 'red' : delta < 0 ? 'green' : 'white' }}>{delta > 0 ? '▲' : '▼'} {delta.toFixed(2)} %</p>
        </div>
        </>
    )
}
export default QuoteCard