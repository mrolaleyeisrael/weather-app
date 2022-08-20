// React import
import { useState, useEffect, useContext } from "react";

// contexts
import AppContext from "../../context/Context";


import { BiCurrentLocation } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import bgCloud from "../../assets/images/Cloud-background.png";
import shower from "../../assets/images/Shower.png";

// import images
const importAllImagesFromDirectory = (r) => {
	let images = {};
	r.keys().map((item, index) => (images[item.replace("./", "")] = r(item)));
	return images;
};

const images = importAllImagesFromDirectory(
	require.context("../../assets/images/", false, /\.(png||svg)$/)
)


const DefaultSideBar = ({ setNavBar }) => {
	const app = useContext(AppContext)

	const date = new Date().toLocaleDateString("en-gb", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

	const [actualWeatherInformations, setActualWeatherInformations] = useState(
    {}
  );
	return (
		<div className=' bg-color1 h-full relative md:w-[30%] md:fixed overflow-hidden'>
			<div className=' flex justify-between items-center pt-[18px] px-[11px]  '>
				<button
					onClick={() => setNavBar("search")}
					className=' bg-color4 px-[18px] py-[11px] text-gray-200 '>
					{" "}
					Search for places
				</button>
				<button className=' bg-color4 p-[9px] rounded-full text-gray-200 text-2xl focus:outline-none'>
					{" "}
					<BiCurrentLocation />{" "}
				</button>
			</div>

			{/* background cloud  */}
			<div className=' absolute -right-28 -left-32 opacity-10 '>
				<img src={bgCloud} alt='' className=' object-fill' />
			</div>

			{/* weather icon  */}
			<div className=' flex justify-center mt-[76px] md:mt-[80px] '>
				<img src={shower} alt='' className=' w-[150px]' />
			</div>

			{/* degree of weather  */}
			<div className=' text-center mt-[40px] mb-[23px] md:my-[57px]  '>
				<p className=' text-5xl text-white'>
					15<sub className=' text-3xl'>&deg;C</sub>
				</p>

				{/* weather type  */}
				<p className='  text-gray-400 text-4xl'>Shower</p>

				{/* date */}
				<div className=' flex justify-center items-center space-x-[16px] text-center text-lg text-gray-400  mt-12'>
					<p>Today</p>
					<span className=' font-bold'> &bull; </span>
					<p>Fri, 5 Jun</p>
				</div>

				{/* location  */}
				<div className=' flex justify-center items-center mt-[33px] text-gray-400 text-lg space-x-[9px] '>
					<MdLocationOn />
					<p>Nigeria</p>
				</div>
			</div>
		</div>
	);
};

export default DefaultSideBar;
