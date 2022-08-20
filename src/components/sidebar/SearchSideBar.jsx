import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineArrowForwardIos, MdOutlineClose } from "react-icons/md";

import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";




const API_KEY = process.env.REACT_MAP_APP_API_KEY

const mapAPIJS = 'https://maps.googleapis.com/maps/api/place/details/output'

const SearchSideBar = ({ setNavBar }) => {





	return (
		<div className=' relative bg-color1 md:fixed md:w-[30%] md:h-screen'>
			<MdOutlineClose onClick={() => setNavBar('default')} className=' absolute right-4 top-4 text-lg cursor-pointer font-bold ' />




			<PlaceAutocomplete />



		</div>
	);
};

export default SearchSideBar;




const PlaceAutocomplete = () => {
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete();

	// const ref = useOnclickOutside(() => {
	// 	// When user clicks outside of the component, we can dismiss
	// 	// the searched suggestions by calling this method
	// 	clearSuggestions();
	// });


	return (
		<div className=' flex flex-col py-14 px-3 '>
			<form className='w-full mb-[38px] flex justify-between'>
				<div className=' flex w-full items-center relative pl-[40px] mr-3  border border-white'>
					<AiOutlineSearch className='absolute left-[15px] text-color4 text-lg' />

					<input
						type='text'
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder='search location'
						className='w-full  py-[14px] bg-transparent focus:outline-none text-white '
					/>
				</div>
				<button className=' justify-self-end px-4 py-3 bg-color3 text-white '>
					Search
				</button>
			</form>

			<div className='space-y-2'>
				{status === 'OK' && data.map(({ place_id, desc }) =>

					<div key={place_id} className=' flex justify-between items-center px-3 py-[22px] text-white border border-gray-500 '>
						<p>{desc}</p>
						<MdOutlineArrowForwardIos />
					</div>
				)}




			</div>
		</div>
	)

}