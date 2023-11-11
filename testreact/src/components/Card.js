import React from 'react';
import Spinner from './Spinner';


const Card = ({loadingData, showData, weather, forecast})=>{

//Fecha Actual
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = day + '/' + month + '/' + year;

let url = "";
let iconUrl = "";

//Iconos para la prediccion c/ 3 horas
let iconUrl3 = "";
let iconUrl6 = "";
let iconUrl9 = "";

let forecastDate3 = "";
let forecastDate6 = "";
let forecastDate9 = "";

if(loadingData){
    return <Spinner />
}

if(showData){
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[8].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[16].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[24].weather[0].icon + ".png";
    
//     let log = url + forecast.list[1].dt_txt ;

// console.log("card console log " + log);

    //Extraemos con subStrig los datos tipo text de la fecha para cambiar el formato
    forecastDate3 = forecast.list[8].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4);

    
    forecastDate6 = forecast.list[16].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4);
    
    forecastDate9 = forecast.list[24].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4); 
    
   
}

    return(
        <div className="mt-5">
            {
                showData === true ? (
                        <div className='container'>
                            <div className='card mb-3 mx-auto bg-dark text-light'>
                                <div className='row g-0'>
                                    <div className='col-md-4'>
                                        {/*para la imagen */}
                                        <h3 className='card-title'>{weather.name}</h3>
                                        <p className='card-date'>{date}</p>
                                        <h1 className='card-temp'>{(weather.main.temp - 273.15).toFixed(1)} °C</h1>
                                        <p className='card-desc'><img src={iconUrl} alt='icon-weather'/>{weather.weather[0].description}</p>
                                        <img src='https://images.pexels.com/photos/1980720/pexels-photo-1980720.jpeg' className='img-fluid rounded-start' alt="City-Image"  />
                                    </div>

                                    <div className='col-md-8'>
                                         {/* para toda la info */}
                                         <div className='card-body text-start mt-2'>
                                            
                                                <h5 className='card-text'>Temperatura Máxima: {(weather.main.temp_max - 273.15).toFixed(1)} °C</h5>
                                            
                                                <h5 className='card-text'>Temperatura Mínima: {(weather.main.temp_min - 273.15).toFixed(1)} °C</h5>
                                            
                                                <h5 className='card-text'>Sensación Térmica: {(weather.main.feels_like - 273.15).toFixed(1)} °C</h5>
                                               
                                                <h5 className='card-text'>Humedad: {weather.main.humidity} %</h5>
                                               
                                                <h5 className='card-text'>Viento: {weather.wind.speed} km/h</h5>
                                                <hr />

                                                <div className='row mt-4'>
                                                    <div className='col'>
                                                        <p>{forecastDate3}</p>
                                                        <p className='description'><img src={iconUrl3} alt="icon-forecast"/>{forecast.list[1].weather[0].description}</p>
                                                        <p className='temp'>{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                                                    </div>

                                                    <div className='col'>
                                                        <p>{forecastDate6}</p>
                                                        <p className='description'><img src={iconUrl6} alt="icon-forecast"/>{forecast.list[2].weather[0].description}</p>
                                                        <p className='temp'>{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                                                    </div>

                                                    <div className='col'>
                                                        <p>{forecastDate9}</p>
                                                        <p className='description'><img src={iconUrl9} alt="icon-forecast"/>{forecast.list[3].weather[0].description}</p>
                                                        <p className='temp'>{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                                                    </div>

                                                </div>
                                            
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                ):(<h2 className="text-light">Sin datos</h2>)
            }
        </div>
        );

}

export default Card;