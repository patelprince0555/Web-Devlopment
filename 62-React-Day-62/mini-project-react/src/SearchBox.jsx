import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox(){
    let[city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="a876ede7953902c7552fe767fde66ca7";

    let getWeatherInfo=async()=>{
        let response=await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse=await response.json();
        // console.log(jsonResponse);
        let result={
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            Humidity:jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            Weather:jsonResponse.weather[0].description,
        };
        console.log(result);
    }

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };

    let handleSubmit =(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
    return(
        <div className='searchbox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" 
            label="City Name" 
            variant="outlined" 
             required
              value={city} 
              onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" endIcon={<SendIcon />} type='submit'>Search</Button>
            </form>
        </div> 
    );
}