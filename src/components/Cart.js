import '../styles/Cart.css';
import React, { useState} from 'react';

function Cart({ cart, updateCart }) {
  
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce((acc, val) => acc + (val.price * val.amount),0);
  
  function handleRemoveItem(name){
    const t = cart.filter(e => e.name !== name)
    updateCart(t)
  }

  return isOpen ? (
    <div className="lmj-cart">
      <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>fermer</button>
      
      <h2>Panier</h2>

      <ul> 
        {cart.map(({ name, price, amount }, index) => (
          <div className='lmj-cart-list'>
            <li key={`${name}-${index}`}>
            {name} {price}€ x {amount}
            <button className='lmj-cart-toggle-remove-button' onClick={() => handleRemoveItem(name)} >⤱</button>
            </li>
          </div>
        ))}
      </ul>

      <div>
        Total : {total} € ;

      </div>

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
