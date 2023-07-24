import '../styles/Cart.css'
import { useState } from 'react';

function Cart() {
    const monsteraPrice = 8;
    const [cart, updateCart] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    // const cart = {
    //     "Monstera": 10,
    //     "Lierre": 30,
    //     "bouquet de fleurs": 32,
    // };

    const panier = []

    function total() {
        let x = 0;
        for (const p in panier) {
            x += panier[p];
        }
        return <div>{x}</div>;
    }
    
    return isOpen ? (
        <div className="lmj-cart">
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>fermer</button>
            <h2>Panier</h2>
            <ul>
                {(panier).map((plant) => (
                    <li key={plant.id}>
                        {plant} : {panier[plant]}
                    </li>
                ))}
            </ul>

            <button className='lmj-cart-add-button' onClick={() => updateCart(cart + 1)}>
                Ajouter
            </button>

            Total : {total()}$
            to : {monsteraPrice * cart}

            <button className='lmj-cart-toggle-button' 
            onClick={() => updateCart(0)}>
                Vider la corbeille
            </button>

        </div>
    ) : (
        
        <div className='lmj-cart-closed'>
        <button onClick={() => setIsOpen(true)}>
            Ouvrir le panier
        </button>
        </div>

    )
}

export default Cart