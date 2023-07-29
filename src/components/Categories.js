import { uniq } from 'lodash';
import { plantList } from '../datas/plantList.js'

function Categories({updateChoixDeCategory}){ 
    const uniqueCategories = uniq(plantList.map(e => e.category)) // La méthode uniq() permet d'afficher une liste d'élément unique (On supprime les doublons) 



    return (
        <ul>
          <select onChange={e => updateChoixDeCategory(e.target.value)} >
            <option value="Tout">Tout</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </ul>
      );
      
}

export default Categories