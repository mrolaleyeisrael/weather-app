import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineArrowForwardIos, MdOutlineClose } from "react-icons/md";

const SearchSideBar = ({ setNavBar }) => {
	return (
		<div className=' relative bg-color1 md:fixed md:w-[30%] md:h-screen'>
			<MdOutlineClose onClick={() => setNavBar('default')} className=' absolute right-4 top-4 text-lg cursor-pointer font-bold ' />
			<div className=' flex flex-col py-14 px-3 '>
				<form className='w-full mb-[38px] flex justify-between'>
					<div className=' flex w-full items-center relative pl-[40px] mr-3  border border-white'>
						<AiOutlineSearch className='absolute left-[15px] text-color4 text-lg' />

						<input
							type='text'
							placeholder='search location'
							className='w-full  py-[14px] bg-transparent focus:outline-none text-white '
						/>
					</div>
					<button className=' justify-self-end px-4 py-3 bg-color3 text-white '>
						Search
					</button>
				</form>

				<div className='space-y-2'>
					<div className=' flex justify-between items-center px-3 py-[22px] text-white border border-gray-500 '>
						<p>London</p>
						<MdOutlineArrowForwardIos />
					</div>

					<div className=' flex justify-between items-center px-3 py-[22px] text-white border border-gray-500 '>
						<p>London</p>
						<MdOutlineArrowForwardIos />
					</div>


				</div>
			</div>
		</div>
	);
};

export default SearchSideBar;
