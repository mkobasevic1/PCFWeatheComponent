import * as React from 'react';
import { useEffect, useState } from 'react';
import { Stack, IStackStyles, IStackTokens, IStackItemStyles, IStackProps } from '@fluentui/react/lib/Stack';
import './../css/Fluent.css';
import { Icon } from '@fluentui/react/lib/Icon';
import {IWeatherProps} from './../interface/IWeatherDataAPI';
import {WeatherTypeIcon} from './../enum/WeatherType';


const StackComponent = (props:IWeatherProps) : React.JSX.Element => {

    /*
        function for filtering numerous weather descriptions from API
        to match icon names from FluentUI
    */
    function getIconName(desc : string) :WeatherTypeIcon{
        if(props.description.includes("Thunderstorm")){
            return WeatherTypeIcon.THUNDERSTORMS;
        }
        else if(props.description.includes("Drizzle")){
            return WeatherTypeIcon.RAIN_SNOW;
        }
        else if(props.description.includes("Shower rain")){
            return WeatherTypeIcon.RAIN_SHOWERS_DAY;
        }
        else if(props.description.includes("Scattered clouds") || props.description.includes("Few clouds")){
            return WeatherTypeIcon.PARTLY_CLOUDY_DAY;
        }
        else if(props.description.includes("Snow shower")){
            return WeatherTypeIcon.SNOW_SHOWERS_DAY;
        }
        else if(props.description.includes("Mix")){
            return WeatherTypeIcon.RAIN_SNOW;
        }
        else if(props.description.includes("Rain") || props.description.includes("rain")){
            return WeatherTypeIcon.RAIN;
        }
        else if(props.description.includes("Snow")){
            return WeatherTypeIcon.SNOW;
        }
        else if(props.description.includes("Overcast clouds")){
            return WeatherTypeIcon.CLOUDY;
        }
        else if(props.description.includes("Clear")){
            return WeatherTypeIcon.SUNNY;
        }
        return WeatherTypeIcon.CLOUD;
    }

  return (
    
    <Stack gap={8} verticalAlign="center" horizontalAlign="center" padding="15px 10px" className="stack">
        <Stack.Item>
            <h3 className="day">{props.day_name}</h3>
        </Stack.Item>
        <Stack.Item>
            <span>{props.valid_date}</span>
        </Stack.Item>
        <Stack.Item>
            <Icon iconName={getIconName(props.description)} className="icon2"/>
        </Stack.Item>
        <Stack.Item>
            <span className="temp">{Math.round(props.temperature)}°C</span>
        </Stack.Item>
        <Stack.Item>
            <span className="desc">{getIconName(props.description)}</span>
        </Stack.Item>
    </Stack>
  )
};

export default StackComponent;