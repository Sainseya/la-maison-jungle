import CareScale from "./CareScale"
import '../styles/PlantItem.css'


function PlantItem({name,cover,id,water,light}){


    return (
        <li key={id} className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='light' scaleValue={light} />
                <CareScale careType='water' scaleValue={water} />
            </div>
        </li>


    )
}

export default PlantItem