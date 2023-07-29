import { plantList } from '../datas/plantList.js'
import '../styles/ShoppingList.css'
import './CareScale.js'
import '../components/Categories.js'
import PlantItem from './PlantItem.js';
import React from 'react';
import Categories from '../components/Categories.js';
import { useState } from 'react';


function ShoppingList({cart,updateCart}) {
    
    const [choixDeCategory, updateChoixDeCategory] = useState('Tout');


    function addToCard(name, price){
        const currentPlantSaved = cart.find((plant) => plant.name === name) // On cherche si le tableau contient la plante passé en paramètre. 
        if (currentPlantSaved){
            const cartFIlteredCurrentPlant = cart.filter((plant) => plant.name !== name) // supprime la plante dont le nom correspond à celui passé en paramètre dans la fonction addToCard 
            updateCart([...cartFIlteredCurrentPlant,{ name, price , amount: currentPlantSaved.amount +1}])
        }else{updateCart([...cart, {name, price, amount: 1}])}
    }

    function hide(){
        if(true){
            plantList.pop(PlantItem.name)
        }
    }
    
    return (
        <div>
          <Categories choixDeCategory={choixDeCategory} updateChoixDeCategory={updateChoixDeCategory}></Categories>
          <ul className='lmj-plant-list'>
            { choixDeCategory === 'Tout' ? 
            (plantList
              .map(({ id, cover, light, name, water, price, category }, index) => (
                <div key={`${id}-${index}`}>
                  <button onClick={() => hide(false)}>hide</button>
                  <PlantItem
                    id={id}
                    name={name}
                    cover={cover}
                    water={water}
                    light={light}
                    price={price}
                    category={category}
                  />
                  <button onClick={() => addToCard(name, price)}>Ajouter</button>
                </div>
              ))): 
              
              (plantList
                .filter((plant) => plant.category === choixDeCategory )
                .map(({ id, cover, light, name, water, price, category }, index) => (
                  <div key={`${id}-${index}`}>
                    <button onClick={() => hide(false)}>hide</button>
                    <PlantItem
                      id={id}
                      name={name}
                      cover={cover}
                      water={water}
                      light={light}
                      price={price}
                      category={category}
                    />
                    <button onClick={() => addToCard(name, price)}>Ajouter</button>
                  </div>
              )))}
          </ul>
        </div>
      )
}

export default ShoppingList