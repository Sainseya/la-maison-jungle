function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]

    function Precaution(e){
        e.preventDefault()
        
        if(careType === 'light'){
            if(scaleValue === 1){
                alert("Cette plante requiert peu de lumière !")
            } else if(scaleValue === 2){
                alert("Cette plant requiert une lumière modérée !")
            }else {
                alert("Cette plante requiert beaucoup de lumière !")
            }
        }
        else if(careType === 'water'){
            if(scaleValue === 1){
                alert("Cette plante requiert peu d'eau !")
            } else if(scaleValue === 2){
                alert("Cette plant requiert de l'eau modérement !")
            }else {
                alert("Cette plante requiert beaucoup d'eau !")
            }
        }
    }

    return (
        <div onClick={Precaution}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem  && careType === 'light' ? <span key={rangeElem.toString()}>☀️</span> :
                careType === 'water' && scaleValue >= rangeElem ? <span key={rangeElem.toString()}>💧</span> : 
                null 
            )}
        </div>
    )
}

export default CareScale
