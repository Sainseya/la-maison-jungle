import CareScale from "./CareScale"
import '../styles/PlantItem.css'


function PlantItem({name,cover,id,water,light}){

    function handleClick(){
        <div>
            alert(`vous avez acheter 1 ${name}`)
        </div>
    }

    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
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