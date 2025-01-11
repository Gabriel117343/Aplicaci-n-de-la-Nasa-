## Aplicación de la NASA

- Este Proyecto es una aplicación móvil desarrollada con React Native y Expo, que muestra imágenes del día obtenidos de la API de la NASA. La aplicación utiza la API de la NASA para obtener datos astrónomicos diarios, incluyendo imágenes y videos, que se presentan a los usuarios de manera atractiva.

### Crear API KEYs

1. Instalar `eas-cli`
```bash
npm install -g eas-cli
```
**Configuración de las claves API con `eas secret:create`
2. Crear las claves API como secretos en Expo:
```bash
eas secret:create --name NASA_API_KEY --value tu_clave_api_de_nasa
eas secret:create --name DEEPL_API_KEY --value tu_clave_api_de_deepl
```
3. Verificar los secretos creados:
```bash
eas secret:list
```
**Configuración de `eas.json`
4. Configurar `eas.json` para usar las variables de entorno:
```json
{
  "build": {
    "development": {
      "env": {
        "NASA_API_KEY": "@env:NASA_API_KEY", // Tú api de la Nasa obtenida
        "DEEPL_API_KEY": "@env:DEEPL_API_KEY" // Tú api de traducción de deepl (El mejor traductor)
      }
    },
    "production": {
      "env": {
        "NASA_API_KEY": "@env:NASA_API_KEY",
        "DEEPL_API_KEY": "@env:DEEPL_API_KEY"
      }
    }
  }
}
```

### Generar APK con EAS Build

1. Asegúrate de tener instalado `eas-cli` globalmente:  
```bash
  npm install -g eas-cli
```
2. Verifica la configuración de variables de entorno en tu archivo eas.json (por ejemplo "NASA_API_KEY: "@ENV:NASA_API_KEY")
3. Ejecuta el siguiente comando para compilar la app en modo producción y generar el .apk
```bash
eas build --platform android --profile production
```
4. Cuando termine el proceso, encontrarás un enlace en la terminal para descargar tu `.apk` de la sección de "Builds" en la cuenta de tu proyecto de Expo.

### Dependencias

| Paquete                           | Versión    |
| --------------------------------- | ---------- |
| @expo/metro-runtime               | ~3.2.1     |
| @expo/vector-icons                | ^14.0.2    |
| @types/react                      | ~18.2.79   |
| axios                             | ^1.7.2     |
| date-fns                          | ^3.6.0     |
| dotenv                            | ^16.4.5    |
| expo                              | ~51.0.21   |
| expo-blur                         | ^13.0.2    |
| expo-constants                    | ~16.0.2    |
| expo-linear-gradient              | ~13.0.2    |
| expo-linking                      | ~6.3.1     |
| expo-router                       | ~3.5.20    |
| expo-status-bar                   | ~1.12.1    |
| nativewind                        | ^2.0.11    |
| react                             | 18.2.0     |
| react-dom                         | 18.2.0     |
| react-native                      | 0.74.3     |
| react-native-paper                | ^5.12.5    |
| react-native-safe-area-context    | 4.10.5     |
| react-native-screens              | 3.31.1     |
| react-native-web                  | ~0.19.10   |
| react-native-web-linear-gradient  | ^1.1.2     |
| react-native-webview              | 13.8.6     |
| react-native-youtube-iframe       | ^2.3.0     |
| typescript                        | ~5.3.3     |
| zustand                           | ^4.5.4     |

### Dependencias de Desarrollo

| Paquete               | Versión   |
| --------------------- | --------- |
| @babel/core           | ^7.20.0   |
| react-native-dotenv   | ^3.4.11   |
| tailwindcss           | 3.3.2     |

> Interfáz
<div style="display: flex; justify-content: space-around; align-items: center; gap: 50px;">
  <img src="https://github.com/user-attachments/assets/160727af-f8b9-4502-a821-ad6ce3fad233" alt="NASA Image 1" width="25%" />
  <img src="https://github.com/user-attachments/assets/69846f02-802f-4114-83ad-42a777a69484" alt="NASA Image 2" width="25%" />
  <img src="https://github.com/user-attachments/assets/a133c2ff-bb58-4db3-aa75-d60eb067cdf7" alt="NASA Image 3" width="25%" />
</div>
