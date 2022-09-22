import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, region, population, area, flags } = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" height={200} width={300}/>
            <p>Name: {name.common}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;