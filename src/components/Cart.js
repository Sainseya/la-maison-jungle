import '../styles/Cart.css';
import React, { useState } from 'react';

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="lmj-cart">
      <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>fermer</button>
      
      <h2>Panier</h2>
      <ul> 
        {cart.map(({ name, price, amount }, index) => (
          <li key={`${name}-${index}`}>
            {name} {price}€ x {amount}
          </li>
        ))}
      </ul>

      <button className='lmj-cart-toggle-button' 
        onClick={() => updateCart([])}> 
        Vider la corbeille
      </button>
    </div>
  ) : (
    <div className='lmj-cart-closed'>
      <button onClick={() => setIsOpen(true)}>
        Ouvrir le panier
      </button>
    </div>
  );
}

export default Cart;
