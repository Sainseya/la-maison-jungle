function CareScale({scaleValue, careType}) {


    const range = [1, 2, 3]

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem  && careType === 'light' ? <span key={rangeElem.toString()}>☀️</span> :
                careType === 'water' && scaleValue >= rangeElem ? <span key={rangeElem.toString()}>💧</span> : 
                null 
            )}
        </div>
    )
}

export default CareScale