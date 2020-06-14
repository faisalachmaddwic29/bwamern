import React from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function Star({className, value, width, height, spacing}) {
    const decimals = Number(value) % 1

    const star = []
    let leftPost = 0;
    for(let index =0; index<5 && index < value - decimals ; index++){
        // const element = array[index];
        leftPost = leftPost + width
        star.push(
            <div 
                className="star" 
                key={`Star-${index}`} 
                style={{left:index * width, height: height, width: width, marginRight: spacing}}>
            </div>
        )
    }
    if(decimals > 0 && value <=5 ){
        star.push(
            <div 
                className="star" 
                key={`StarWithDecimal`} 
                style={{left:leftPost, height: height, width : decimals* width - spacing}}>
            </div>
        )
    }

    const starPlaceholder = []
    for(let i =0; i<5 ; i++){
        // const element = array[index];
        starPlaceholder.push(
            <div 
                className="star placeholder" 
                key={`StarPlaceholder-${i}`} 
                style={{left:i * width, height: height, width: width, marginRight: spacing}}>
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className={[`stars`, className].join(" ")} style={{height: height}}>
                {starPlaceholder}
                {star}
            </div>
        </React.Fragment>
    )
}

Star.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    width: propTypes.number,
    height: propTypes.number,
    spacing: propTypes.number,
}
