import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('New York'); // Ciudad predeterminada

  const apiKey = 'TU_API_KEY'; // Reemplaza 'TU_API_KEY' con tu clave de OpenWeatherMap

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError('No se pudo obtener la información del clima');
      }
      setLoading(false);
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Ingrese una ciudad"
        className="input"
      />
      {loading ? (
        <p className="loading">Cargando...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        weatherData && (
          <div className="weatherCard">
            <h2>{weatherData.name}</h2>
            <p>{weatherData.weather[0].description}</p>
            <p>{`Temperatura: ${weatherData.main.temp} °C`}</p>
            <p>{`Humedad: ${weatherData.main.humidity} %`}</p>
            <p>{`Viento: ${weatherData.wind.speed} m/s`}</p>
          </div>
        )
      )}
    </div>
  );
};

export default App;
