//props needed for rendering single weather component
export interface IWeatherProps {
    day_name: string,
    valid_date: string,
    icon_code: string,
    temperature: number,    
    city_name: string,
    description: string
}

export interface IWeather{
    code:number,
    icon:string,
    description:string
}

//data for one day forecast from Weatherbit API
export interface Idata{  
    app_max_temp:number | null,
    app_min_temp:number | null,
    clouds:number | null,
    clouds_hi:number | null,
    clouds_low:number | null,
    clouds_mid:number | null,
    datetime:Date,
    dewpt:number | null,
    high_temp:number,
    low_temp:number,
    max_dhi:number | null,
    max_temp:number,
    min_temp:number,
    moon_phase:number | null,
    moon_phase_lunation:number | null,
    moonrise_ts:string | null,
    moonset_ts:string | null,
    ozone:number | null,
    pop:number | null,
    precip:number | null,
    pres:number | null,
    rh:number | null,
    slp:number | null,
    snow:number | null,
    snow_depth:number | null,
    sunrise_ts:string | null,
    sunset_ts:string | null,
    temp:number,
    ts:string | null,
    uv:number | null,
    valid_date:string,
    vis:number | null,
    weather:IWeather,
    wind_cdir:string | null,
    wind_cdir_full:string | null,
    wind_dir:number | null,
    wind_gust_spd:number | null,
    wind_spd:number | null,
}

//complete data for 5 day forecast from Weatherbit API
export interface IFullData{
    country_code:string,
    city_name:string,
    data : Idata[],
    lat:string,
    lon:string,
    timezone:string,
    state_code:string
}