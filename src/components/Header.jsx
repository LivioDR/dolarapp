import Image from "next/image"
import { Shrikhand } from "next/font/google";


const danfo = Shrikhand({ subsets: ["latin"], weight: '400' });
const fontStyle = {
    fontSize: 'xxx-large',
    margin: '2%',
    color: 'white'
}

const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '15vh',
    margin: '0%',
    paddingLeft: '2%',
    paddingTop: '2%',
    backgroundColor: 'black',
}

const Header = () => {
    return(
        <div style={headerStyle}>
            <Image
            src='/benjamin-franklin.png'
            alt='Benjamin Franklin cartoon'
            width={100}
            height={100}
            />
            <h1 className={danfo.className} style={fontStyle}>
                DolarApp
            </h1>
        </div>
    )
}
export default Header