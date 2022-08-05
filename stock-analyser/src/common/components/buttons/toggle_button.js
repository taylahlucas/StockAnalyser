import React, { useState } from 'react'

const ToggleButton = (props) => {
    const [selected, setSelected] = useState(false)
    
    function handleClick() {
        setSelected(!selected)
        props.onSelect(selected)
    }   

    return(
        <div 
            style={{ 
                display: 'block',
                height: '12px',
                width: '12px', 
                border: '0.2px solid lightgray',
                borderRadius: '50%',
                backgroundColor: !selected ? "white" : "#61C6FC"
            }}
            onClick={() => handleClick()} />
    )
}

export default ToggleButton