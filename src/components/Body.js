import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import restroData from '../utils/mockdata';



const Body = () => {
    // const [ listOfRestro, setListOfRestro ] = useState([
    //     {   
    //         name: 'Dominoz',
    //         id: 98765,
    //         cuisine: ['Pizza', 'Burger', 'Coke', 'tacos'],
    //         ratings: 4.5,
    //         deliveryTime: '20 mins',
    //         costForTwo: 200,
    //     },
    //     {
    //         name: 'KFC',
    //         id: 54321,
    //         cuisine: ['Chicken legs', 'KFC bucket', 'Coke', 'French fries'],
    //         ratings: 3.5,
    //         deliveryTime: '40 mins',
    //         costForTwo: 600,
    //     },
    //     {
    //         name: 'MCD',
    //         id: 45678,
    //         cuisine: ['Burgers', 'Desserts', 'Coke', 'French fries'],
    //         ratings: 3.5,
    //         deliveryTime: '40 mins',
    //         costForTwo: 400,
    //     },
    //     {   
    //         name: 'Chillout ',
    //         id: 76854,
    //         cuisine: ['Noodles', 'Copsuey', 'Chicken', 'French fries'],
    //         ratings: 4.2,
    //         deliveryTime: '40 mins',
    //         costForTwo: 800,
    //     },
    // ]);

 const [listOfRestro, setListOfRestro] = useState(restroData);
    return (
        <div className='body'>
            {/* <div className='search-container'>Search</div> */}
            <div className='filter-container'>
                <button className='filter-btn' 
                onClick={() => {
                    const filteredList = listOfRestro.filter(
                        (res) => res.ratings >= 4
                    )
                    setListOfRestro(filteredList);

                }}>Top Rated</button>
                <button className='filter-btn' 
                onClick={() => {
                    const filteredList = listOfRestro.filter(
                        (res) => res.ratings > 2 && res.ratings < 4
                    )
                    setListOfRestro(filteredList);

                }}>3 Star</button>
                 
            </div>
            <div className='restaurant-container'>
               { listOfRestro.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restroData={restaurant} />
               ))}
                {/* <RestaurantCard name="Sanjana Foods" cuisine="Briyani, South Indian, North Indian, Chinese" ratings="4.5 rating" deliveryTime="38 mins" />
                <RestaurantCard name="KFC" cuisine="Chicken wings, chicken bowl" ratings="4.5 rating" deliveryTime="38 mins" />
                <RestaurantCard name="Mc Donalds" cuisine="Burgers, Coke" ratings="4.5 rating" deliveryTime="38 mins" />
                <RestaurantCard name="Dominozz" cuisine="Pizza, Pockets " ratings="4.5 rating" deliveryTime="38 mins" />
                <RestaurantCard name="Pizza Hut" cuisine="Pizza, Puff " ratings="4.5 rating" deliveryTime="38 mins" />
                 */}
            </div>
        </div>
    )
}

export default Body