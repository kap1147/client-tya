import React from 'react';
import './timeInput.styles.scss';
import Options from './Options'

export default function TimeInput(props){
    //TODO preselect user's requested time
    const timeMarkup = Options.map(option => 
        <button 
            className={(option.id === props.selected)? 'button selected' : 'button'} 
            id={option.id} 
            onClick={e => props.onClick(Number(e.target.id), option.value)} 
            >
            {option.display} {option.period}
        </button> 
    )
    return (
        <div className='time-container'>{timeMarkup}</div>
    )

}
