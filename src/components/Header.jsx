import Image from "next/image"
import { Shrikhand } from "next/font/google";
import '../styles/header.css'


const danfo = Shrikhand({ subsets: ["latin"], weight: '400' });

const Header = () => {
    return(
        <div id='headerContainer'>
            <Image
            src='/benjamin-franklin.png'
            alt='Benjamin Franklin cartoon'
            width={100}
            height={100}
            />
            <h1 className={`${danfo.className} headerText`}>
                DolarApp
            </h1>
        </div>
    )
}
export default Header