// AIzaSyDA3Qt0qaPmIbR8R_KgAHHDQB2KCaVO_Ak

{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoq4_-BeKtYRIs-3FjJL721G1eP5DaU0g&libraries=places"></script> */}



	// if ("weather-unit" in localStorage) {
	// 	unitOfTemperature = localStorage.getItem("weathme-unit");
	// } else {
	// 	unitOfTemperature = "°C";
	// }

	// const unixTimeToDate = (unixTime) =>
	// 	new Date(unixTime * 1000).toLocaleDateString("en-gb", {
	// 		weekday: "short",
	// 		day: "numeric",
	// 		month: "short",
	// 	});

	
  
    // const geoLocationOfUser = async () => {
	// 	const getHisCoords = async () => {
	// 		if (navigator.geolocation) {
	// 			navigator.geolocation.getCurrentPosition((position) => {
	// 				setGeoLocationLong(position.coords.latitude);
	// 				setGeoLocationLat(position.coords.longitude);
	// 			});
	// 		} else {
	// 			return "geodisabled";
	// 		}
	// 	};

	// 	const coordsStatus = await getHisCoords();

	// 	// get the name of the city from the coords
	// 	const getHisCityNameWithHisCoords = async () => {
	// 		const getCityName = await axios.get(
	// 			`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${geoLocationLat}&lon=${geoLocationLong}&cnt=6&appid=${API_KEY}`
	// 		);
	// 		const cityName = getCityName.data.city.name;
  //     // console.log(getCityName);
  //     // console.log(cityName);
	// 		return cityName;
	// 	};

	// 	if (coordsStatus !== "geodisabled") {
	// 		return getHisCityNameWithHisCoords().then((cityName) => cityName);
	// 	} else {
	// 		alert(
	// 			"Sorry but the application needs permission to locate you to find the weather for your city.We therefore place you by default in Paris.Refresh the page to allow access to your location again."
	// 		);
	// 		return "Lagos";
	// 	}
	// };

	// getting weather details of a location searched for
	// const getWeatherInformationsFromLocation = async (date) => {
	//   const getLocation = await axios.get(
	//     `https://api.openweathermap.org/geo/1.0/direct?q=${currentLocation}&appid=${API_KEY}`
	//   );
	//   const locationCoords = {
	//     lat: getLocation.data[0].lat,
	//     lon: getLocation.data[0].lon,
	//   };

	// }




  

  // useEffect(() => {
	// 	geoLocationOfUser().then((cityName) => {
	// 		setCurrentLocation(cityName);
	// 	});
	// }, [geoLocationLat, geoLocationLong]);