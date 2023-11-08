import React from 'react';




const RestaurantCard = (props) => {
    // const RestaurantCard = ({name, cuisine, ratings, deliveryTime}) => { // Doesnt require props.name 
    const { restroData } = props; 
    const {name, cuisines, image, ratings, deliveryTime} = restroData; // Doesnt require props.name

    return (
        <div className='restro-card-container'>
        <div className='restro-card'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}` } />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <p>{ratings}</p>
            <p>{deliveryTime}</p>
        </div>
        </div>
    )
}


export default RestaurantCard;