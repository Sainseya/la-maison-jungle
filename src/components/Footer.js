import { useState } from 'react' //Permet de gérer l'état local
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	const [outputValue, setOutputValue]  = useState(null)
	const email= new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")
	const handleBlur = () =>(!email.test(inputValue) && setOutputValue("Ceci n'est pas une adresse mail valide"));

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<div>
				<input type="text" 
				value={inputValue} 
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Email" 
				onBlur={handleBlur}
				/>

				<button >Entrer</button>
			</div>
			{outputValue && <div>{outputValue}</div>}
		</footer>
	)

}
export default Footer