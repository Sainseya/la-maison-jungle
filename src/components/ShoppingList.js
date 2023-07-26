import { plantList } from '../datas/plantList.js'
import { uniq } from 'lodash';
import '../styles/ShoppingList.css'
import './CareScale.js'
import PlantItem from './PlantItem.js';
import React from 'react';


function ShoppingList({cart,updateCart}) {
    const uniqueCategories = uniq(plantList.map(e => e.category)) // La méthode uniq() permet d'afficher une liste d'élément unique (On supprime les doublons) 

    function addToCard(name, price){
        const currentPlantSaved = cart.find((plant) => plant.name === name) // On cherche si le tableau contient la plante passé en paramètre. 
        if (currentPlantSaved){
            const cartFIlteredCurrentPlant = cart.filter((plant) => plant.name !== name) // supprime la plante dont le nom correspond à celui passé en paramètre dans la fonction addToCard 
            updateCart([...cartFIlteredCurrentPlant,{ name, price , amount: currentPlantSaved.amount +1}])
        }else{updateCart([...cart, {name, price, amount: 1}])}
    }
    
    return (
      <div>
            <ul>
                {uniqueCategories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, light, name, water, price}, index) => (
                    <div key={`${id}-${index}`}>
                        <PlantItem id={id}name={name}cover={cover}water={water}light={light} price={price}/>
                        <button onClick={() => addToCard(name, price)}>Ajouter</button> 
                    </div>
                ))}
            </ul>
        </div>
                )             
}

export default ShoppingList