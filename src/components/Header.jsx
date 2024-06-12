import Image from "next/image"
import { Shrikhand } from "next/font/google";
import '../styles/header.css'


const danfo = Shrikhand({ subsets: ["latin"], weight: '400' });

const Header = ({currency, setCurrency}) => {

    const toggleCurrency = () => {
        if(currency == 'USD'){
            setCurrency("CAD")
        }
        else if(currency == 'CAD'){
            setCurrency("AUD")
        }
        else{
            setCurrency("USD")
        }
    }

    return(
        <div id='headerContainer' onClick={toggleCurrency}>
            {
                currency == "USD" &&
                <>
                <Image
                src='/benjamin-franklin.png'
                alt='Benjamin Franklin cartoon'
                width={100}
                height={100}
                />
                <h1 className={`${danfo.className} headerText`}>
                    DolarApp
                </h1>
                </>
            }
            {
                currency == "CAD" &&
                <>
                <Image
                src='/maple-syrup.png'
                alt='Maple Syrup bottle cartoon'
                width={100}
                height={100}
                />
                <h1 className={`${danfo.className} headerText`}>
                    DolarAppEh, Sorry
                </h1>
                </>
            }
            {
                currency == "AUD" &&
                <>
                <Image
                src='/kangaroo.png'
                alt='Kangaroo cartoon'
                width={100}
                height={100}
                />
                <h1 className={`${danfo.className} headerText`}>
                    AussieApp
                </h1>
                </>
            }
        </div>
    )
}
export default Header