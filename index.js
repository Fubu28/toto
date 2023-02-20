import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const API_KEY = "8625e5d94ba583d08e28ba33cdc02b65";
const CITY = "Paris";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  return (
    <View style={styles.container}>
      {weatherData ? (
        <View style={styles.weatherContainer}>
          <Text style={styles.cityName}>{weatherData.name}</Text>
          <Text style={styles.temperature}>{Math.round(weatherData.main.temp)}°C</Text>
          <Text style={styles.description}>{weatherData.weather[0].description}</Text>
        </View>
      ) : (
        <Text style={styles.loadingText}>Chargement...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  weatherContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityName: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 24,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});