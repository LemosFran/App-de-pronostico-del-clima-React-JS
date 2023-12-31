import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";

const WeatherPanel = ()=>{                                                  //Token (personal token)
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?&appid=de864dfc7bf11149742461984710e845&lang=es';
    let cityUrl = '&q=';

    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?&appid=de864dfc7bf11149742461984710e845&lang=es';

    const[weather, setWeather]= useState([]);
    const[forecast, setForecast]= useState([]);
    const[loading, setLoading]= useState(false);
    const[show, setShow]= useState(false);
    const[location, setLocation]= useState("");

    const getLocation = async(loc)=>{
        setLoading(true);
        setLocation(loc);

        //Weather
        urlWeather = urlWeather + cityUrl +loc;

        await fetch(urlWeather).then((response)=>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData)=>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Forecast
        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response)=>{
            if(!response.ok) throw {response}
            return response.json();
            console.log(response.data);
        }).then((forecastData)=>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

    }

    //Vista de la información
    return(
        <React.Fragment>
        
        <Form 
        newLocation={getLocation} 
        />

        <Card 
            showData = {show}
            loadingData = {loading}
            weather = {weather}
            forecast = {forecast}
        /> 
        
    </React.Fragment>
    );

}

export default WeatherPanel;