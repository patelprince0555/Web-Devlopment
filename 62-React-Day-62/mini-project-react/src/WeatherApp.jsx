import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp(){

    const [WeatherInfo,setWeatherInfo]=useState({
        city:"patna",
        feelslike:24.24,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        Humidity:47,
        Weather:"haze",
    });

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h4>Weather app by Prince patel</h4>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    )
}  