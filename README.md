![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.giuseppemaccario.com%2Fwp-content%2Fuploads%2F2020%2F05%2FOpenWeather-Logo.jpg&f=1&nofb=1&ipt=c99b32bc4362340a6ea5eaab496f13f1c77f817c211ff2c3bcf52a0ab36289fe&ipo=images)

# Aplicación de Pronóstico del Tiempo

Esta Aplicación de Pronóstico del Tiempo es una aplicación sencilla basada en React que permite a los usuarios buscar información climática por nombre de ciudad. Utiliza la API de OpenWeatherMap para ofrecer datos meteorológicos actuales y un pronóstico de 3 horas.

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

- Los usuarios pueden ingresar el nombre de una ciudad para obtener el pronóstico del tiempo actual y un pronóstico de 3 horas.
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

Esta Aplicación de Pronóstico del Tiempo está creada por [Tu Nombre]. Puedes encontrar el repositorio en GitHub [aquí](enlace al repositorio).

¡Siéntete libre de contribuir, reportar problemas o sugerir mejoras para la aplicación!

