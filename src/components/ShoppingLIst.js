import { plantList } from '../datas/plantList.js'
import { uniq } from 'lodash';
import '../styles/ShoppingList.css'
import '../components/CareScale.js'
import PlantItem from '../components/PlantItem.js';




function ShoppingList() {
    const uniqueCategories = uniq(plantList.map(e => e.category)) // La méthode uniq() permet d'afficher une liste d'élément unique (On supprime les doublons) 
        
    return (
        <div>
            <ul>
                {uniqueCategories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>

            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, light, name, water}) => (
                    <li key={id}>
                        <PlantItem id={id} name={name} cover={cover} water={water} light={light} />
                </li>
                ))}


            </ul>
        </div>
    )
}

export default ShoppingList