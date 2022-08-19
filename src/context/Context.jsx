import { createContext, useState } from "react";
import axios from "axios";


const AppContext = createContext()


const AppContextProvider = ({ children }) => {
  // Default coordinates is Lagos Nigeria but will be overwritten by the user's geolocation
  const [geoLocationLat, setGeoLocationLat] = useState("6.4550575")
  const [geoLocationLong, setGeoLocationLong] = useState("3.3941795")
  const [currentLocation, setCurrentLocation] = useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY

  const kelvinToCelsius = (kelvin) => kelvin - 273.15;
  const kelvinToFarenheit = (kelvin) => (kelvin - 273.15) * 1.8 + 32;

  let unitOfTemperature = "°C";


  const geoLocationOfUser = async () => {
    const getHisCoords = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setGeoLocationLong(position.coords.latitude);
          setGeoLocationLat(position.coords.longitude);
        });
      } else {
        return "geodisabled";
      }
    };

    const coordsStatus = await getHisCoords();

    const getHisCityNameWithHisCoords = async () => {
      const getCityName = await axios.get(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${geoLocationLat}&lon=${geoLocationLong}&appid=${API_KEY}`
      );
      const cityName = getCityName.data[0].name;
      return cityName;
    };

    if (coordsStatus !== "geodisabled") {
      return getHisCityNameWithHisCoords().then((cityName) => cityName);
    } else {
      alert(
        "Désolé mais l'application a besoin d'avoir la permission de vous localiser pour trouver la météo correspondant à votre ville. Nous vous plaçons donc par défaut sur Paris. Actualisez la page pour réautoriser l'accès à votre position."
      );
      return "Paris";
    }
  };

  return <AppContext.Provider
    value={{
      API_KEY,
      currentLocation,
      setCurrentLocation
    }}>
    {children}

  </AppContext.Provider>
}
export default AppContextProvider