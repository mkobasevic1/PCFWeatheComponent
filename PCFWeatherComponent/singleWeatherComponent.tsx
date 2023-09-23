import * as React from 'react';
import './css/App.css';
import {IWeatherProps} from './IWeatherDataAPI';


const SingleWeatherComponent = (props : IWeatherProps) : JSX.Element =>{

    return (
        <div className="singleItem">
            <h3 className="day line">{props.day_name}</h3>
            <p className="date line">{props.valid_date}</p>
            <div className="group line">
                <img className="icon" src={`https://cdn.weatherbit.io/static/img/icons/${props.icon_code}.png`} alt="icon" />
                <div className="text-group">
                    <span className="temperature">{Math.round(props.temperature)}°C</span>
                    <p className="city">{props.city_name}</p>
                </div>
                
            </div>
            <span className="description">{props.description}</span>
        </div>
    );
};

export default SingleWeatherComponent;