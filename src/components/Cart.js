import '../styles/Cart.css'
import { useState } from 'react';

function Cart() {
    const [x, updateCart] = useState(null)

    const cart = {
        "Monstera": 10,
        "Lierre": 30,
        "bouquet de fleurs": 32,
    };
    
    function total() {
        let x = 0;
        for (const p in cart) {
            x += cart[p];
        }
        return <div>{x}</div>;
    }
    
    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                {Object.keys(cart).map((plant) => (
                    <li key={plant.id}>
                        {plant} : {cart[plant]}
                    </li>
                ))}
            </ul>
            <button onClick={() => updateCart}>Ajouter</button>
            Total : {total()}$
        </div>
    );
    
}

export default Cart