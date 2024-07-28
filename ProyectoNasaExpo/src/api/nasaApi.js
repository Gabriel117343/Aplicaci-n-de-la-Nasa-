import Constants from 'expo-constants';
import axios from 'axios';

const API_KEY = Constants.expoConfig?.extra?.NASA_API_KEY || Constants.manifest?.extra?.NASA_API_KEY;

// Creación de una instancia de axios para acceder a la API de la NASA
const nasaAPI = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod'
});

// esta función puede o no recibir un parámetro opcional para obtener imágenes de la NASA con filtros
export default function getAllImages (urlParams) {

  // el operador de coalesencia nula o Nullish coalescing operator (??) se utiliza para verificar si el valor de la variable es nulo o indefinido
  return nasaAPI.get(`?api_key=${API_KEY}${urlParams ?? ''}`);
  
}

