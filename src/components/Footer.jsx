import '../styles/footer.css'

const Footer = ({currency}) => {
    return(
        <div className="footer">
            {
                currency == "USD" &&
                <a href="https://www.flaticon.com/free-icons/benjamin-franklin" target="_blank" rel="noreferrer" title="benjamin franklin icons">Benjamin franklin icons created by Vitaly Gorbachev - Flaticon</a>
            }
            {
                currency == "CAD" && 
                <a href="https://www.flaticon.com/free-icons/maple-syrup" target="_blank" rel="noreferrer" title="maple syrup icons">Maple syrup icons created by Freepik - Flaticon</a>
            }
            {
                currency == "AUD" &&
                <a href="https://www.flaticon.com/free-icons/australia" target="_blank" rel="noreferrer" title="australia icons">Australia icons created by Graficon - Flaticon</a>
            }
        </div>
    )
}
export default Footer