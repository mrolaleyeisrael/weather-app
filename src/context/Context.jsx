import React, { useEffect, useState } from "react";
import axios from "axios";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
	const [latitude, setLatitude] = useState("6.4550575");
	const [longitude, setLongitude] = useState("3.3941795");
	const [searchLocation, setSearchLocation] = useState(null);
	// api_key
	const API_KEY = process.env.REACT_APP_API_KEY;

	const kelvinToCelsius = (kelvin) => kelvin - 273.15;
	const kelvinToFarenheit = (kelvin) => (kelvin - 273.15) * 1.8 + 32;

	let unitOfTemperature = "°C";

  useEffect (() =>{
    if(navigator.geolocation){
      console.log("Location is enabled");
    }
  }, [])




	return (
		<AppContext.Provider
			value={{
				API_KEY,
				searchLocation,
				setSearchLocation,
				// getWeatherInformationsFromLocation,
				// geoLocationOfUser,
				unitOfTemperature,
			}}>
			{children}
		</AppContext.Provider>
	);
};
export default AppContextProvider;
