import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner(){
    const title = 'La maison jungle';
    return (
        <div>
        <div className="lmj-banner">
            <img src={logo} alt={title} className='lmj-logo' />
            <h1>{title}</h1>
        </div>
        </div>
    )
}
export default Banner