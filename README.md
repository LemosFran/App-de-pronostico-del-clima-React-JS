![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.giuseppemaccario.com%2Fwp-content%2Fuploads%2F2020%2F05%2FOpenWeather-Logo.jpg&f=1&nofb=1&ipt=c99b32bc4362340a6ea5eaab496f13f1c77f817c211ff2c3bcf52a0ab36289fe&ipo=images)
(ESP)
# Aplicación de Pronóstico del Tiempo

Esta Aplicación de Pronóstico del Tiempo es una aplicación sencilla basada en React que permite a los usuarios buscar información climática por nombre de ciudad. Utiliza la API de OpenWeatherMap para ofrecer datos meteorológicos actuales y un pronóstico de 72 horas (3 días).

## Tecnologías Utilizadas

- **React:** La aplicación está construida utilizando React, lo que permite una interfaz de usuario dinámica e interactiva.
- **API de OpenWeatherMap:** Se utiliza esta API para obtener datos meteorológicos basados en la entrada del usuario.

## Estructura de Componentes

La aplicación está estructurada en los siguientes componentes:

- **App.js:** Renderiza la estructura principal de la aplicación, incluyendo la barra de navegación, panel climático y pie de página.
- **WeatherPanel.js:** Maneja la funcionalidad para obtener datos meteorológicos y de pronóstico basados en la ubicación proporcionada por el usuario.
- **Card.js:** Muestra la información climática y del pronóstico en una vista de tarjeta formateada.
- **Form.js:** Ofrece un campo de entrada para que los usuarios ingresen el nombre de una ciudad para obtener información meteorológica.

## Características

- Los usuarios pueden ingresar el nombre de una ciudad para obtener el pronóstico del tiempo actual y un pronóstico de 3 días.
- La aplicación muestra el nombre de la ciudad, temperatura actual, temperaturas máximas y mínimas, humedad, velocidad del viento y una breve descripción del clima. Además, muestra el pronóstico para los próximos tres periodos.

## Cómo Ejecutar

Para ejecutar la aplicación, sigue estos pasos:

1. Clona el repositorio.
2. Instala las dependencias usando `npm install`.
3. Inicia la aplicación con `npm start`.
4. Abre la aplicación en tu navegador web.

## Uso

1. Ingresa el nombre de la ciudad en el campo de entrada y haz clic en "Buscar".
2. La aplicación mostrará la información meteorológica actual y el pronóstico de 3 horas para la ciudad ingresada.
3. Si no se encuentran datos para la ciudad proporcionada, se mostrará un mensaje de "Sin datos".

## Mejoras Futuras

- Implementar características adicionales como pronósticos extendidos o recuperación del clima basada en geolocalización.
- Mejorar el manejo de errores y la experiencia del usuario para problemas de recuperación de datos.

## Autor

Esta Aplicación de Pronóstico del Tiempo está creada por [Franco Ariel Lemos]. Puedes encontrar el repositorio en GitHub [https://github.com/LemosFran](enlace al repositorio).

¡Siéntete libre de contribuir, reportar problemas o sugerir mejoras para la aplicación!


(EN)
# Weather Forecast Application

This Weather Forecast Application is a simple React-based app that allows users to search for weather information by city name. It uses the OpenWeatherMap API to provide current weather data and a 72-hour forecast (3 days).

## Technologies Used

- **React:** The application is built using React, enabling a dynamic and interactive user interface.
- **OpenWeatherMap API:** This API is used to retrieve weather data based on user input.

## Components Structure

The application is structured into the following components:

- **App.js:** Renders the main structure of the application, including the navigation bar, weather panel, and footer.
- **WeatherPanel.js:** Manages the functionality to obtain weather and forecast data based on the user-provided location.
- **Card.js:** Displays weather and forecast information in a formatted card view.
- **Form.js:** Provides an input field for users to enter the name of a city to retrieve weather information.

## Features

- Users can enter the name of a city to get the current weather forecast and a 3-day forecast.
- The application displays the city name, current temperature, maximum and minimum temperatures, humidity, wind speed, and a brief weather description. It also shows the forecast for the next three periods.

## How to Run

To run the application, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the application with `npm start`.
4. Open the application in your web browser.

## Usage

1. Enter the name of the city in the input field and click "Search."
2. The application will display the current weather information and a 3-hour forecast for the entered city.
3. If no data is found for the provided city, a "No data" message will be displayed.

## Future Improvements

- Implement additional features such as extended forecasts or weather retrieval based on geolocation.
- Improve error handling and user experience for data retrieval issues.

## Author

This Weather Forecast Application is created by [Franco Ariel Lemos]. You can find the repository on GitHub [here](https://github.com/LemosFran).

Feel free to contribute, report issues, or suggest improvements for the application!

