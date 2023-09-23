import * as React from 'react';
import { useEffect, useState } from 'react';
import './css/App.css';
import SingleWeatherComponent from './singleWeatherComponent';
import {IWeatherProps,IWeather,Idata,IFullData} from './IWeatherDataAPI';
import VerticalStackConfigureExampleContent from './SingleFUIC';


const WeatherForecast = () : JSX.Element =>{

    const [data,setData] = useState<IFullData>({
        country_code:"BA",
        city_name:"Sarajevo",
        data:[{
            app_max_temp:27.4,
            app_min_temp:12.9,
            clouds:26,
            clouds_hi:36,
            clouds_low:11,
            clouds_mid:33,
            datetime: new Date("2023-09-20"),
            dewpt:13.8,
            high_temp:25.9,
            low_temp:16.7,
            max_dhi:null,
            max_temp:27.2,
            min_temp:12.9,
            moon_phase:0.395375,
            moon_phase_lunation:0.2,
            moonrise_ts:"1695204228",
            moonset_ts:"1695239111",
            ozone:271.5,
            pop:0,
            precip:0,
            pres:948.5,
            rh:68,
            slp:1017.3,
            snow:0,
            snow_depth:0,
            sunrise_ts:"1695184204",
            sunset_ts:"1695228383",
            temp:20.5,
            ts:"1695160860",
            uv:0.8,
            valid_date:"2023-09-20",
            vis:24.128,
            weather:{
                code:802,
                icon:"c02d",
                description:"Scattered clouds"
            },
            wind_cdir:"SSW",
            wind_cdir_full:"south-southwest",
            wind_dir:203,
            wind_gust_spd:2.9,
            wind_spd:1.2
        }],
        lat:"43.84864",
        lon:"18.35644",
        timezone:"Europe/Sarajevo",
        state_code:"01",
    });
    const dayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=Sarajevo&days=5&key=b36a1ad663914cbdaa66137b8519e803`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        
        fetchData();
    },[]);

    function getDayName(date:string){
        let realDate:Date = new Date(date);
        return dayNames[realDate.getDay()];
    }

    return (
        <div className="body-div">
            <h1>Weather Forecast App</h1>
            <div className="weather">
                {data['data']?.map((element:Idata,index:number) => {
                    const propdata : IWeatherProps = {
                        day_name: getDayName(element.valid_date),
                        valid_date: element.valid_date,
                        icon_code: element.weather.icon,
                        temperature: element.temp,    
                        city_name: data.city_name,
                        description: element.weather.description
                    }
                    return (
                    <div className="item-wrapper">
                        <SingleWeatherComponent {...propdata}/>
                    </div>
                    )
                })}
            </div>
            <div className="weather2">
                {
                   data['data']?.map((element:Idata,index:number) => {
                    const propdata : IWeatherProps = {
                        day_name: getDayName(element.valid_date),
                        valid_date: element.valid_date,
                        icon_code: element.weather.icon,
                        temperature: element.temp,    
                        city_name: data.city_name,
                        description: element.weather.description
                    }
                    return (<VerticalStackConfigureExampleContent {...propdata}/>);
                    })
                }                   
            </div>
        </div>
    );
};

export default WeatherForecast;