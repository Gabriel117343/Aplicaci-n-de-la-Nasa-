import axios, { type AxiosResponse, type AxiosError } from 'axios'
import Constants from 'expo-constants'
import { NASA_API_KEY } from '@env' // importa la variable de entorno API_KEY

const KEY =
  NASA_API_KEY ||
  Constants?.expoConfig?.extra?.nasaApiKey ||
  process.env.NASA_API_KEY

// Creación de una instancia de axios para acceder a la API de la NASA
export const nasaAPI = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 10000
})

// esta función puede o no recibir un parámetro opcional para obtener imágenes de la NASA con filtros

interface GetAllImagesProps {
  urlParams: string
  keyIngresada?: string
}
const getAllImages = async ({ urlParams = '', keyIngresada }: GetAllImagesProps): Promise<AxiosResponse | AxiosError> => { // el retorno de la función es una promesa o Promise entonces que se espera un objeto de tipo AxiosResponse o
  if (KEY.length === 0 && keyIngresada?.length === 0) {
    return await Promise.reject(new Error('Se espera una API Key de la NASA'))
  }

  // el operador de coalesencia nula o Nullish ?? se utiliza para verificar si el valor de la variable es nulo o indefinido
  // primero se le da importancia a la keyIngresada y luego a la KEY por defecto
  return await nasaAPI.get(`?api_key=${keyIngresada ?? KEY}${urlParams ?? ''}`)
}
export default getAllImages
