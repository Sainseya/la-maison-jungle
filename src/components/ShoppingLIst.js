import { plantList } from '../datas/plantList.js'
import { uniq } from 'lodash';
import '../styles/ShoppingList.css'



function ShoppingList() {
    const uniqueCategories = uniq(plantList.map(e => e.category)) // La méthode uniq() permet d'afficher une liste d'élément unique (On supprime les doublons) 

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {uniqueCategories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>

            <h2>Liste de plantes</h2>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name} {plant.isBestSale ? <span>🔥</span> : null} 
                    </li>
                    // {plant.isBestSale && <span>🔥</span>}
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList