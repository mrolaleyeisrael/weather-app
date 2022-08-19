import React, { useContext, useEffect, useState } from "react";
// import { AppContextProvider } from "../context/Context";
import AppContextProvider from "../context/Context";


const Main = () => {
	const app = useContext(AppContextProvider);

	return (
		<>
			<div className=' bg-color2 w-full min-h-screen '>
				<div className=' flex items-center space-x-3 justify-end pt-5 pr-5 mb-10 md:mb-[66px]'>
					<button className=' px-[9px] py-[4px] text-2xl bg-color4 rounded-full'>
						{" "}
						&deg;C
					</button>
					<button className=' px-[9px] py-[4px] text-2xl bg-color4 rounded-full'>
						{" "}
						&deg;F
					</button>
				</div>

				<div className=' w-full px-[25px] md:px-[50px] text-gray-300'>
					<div className=' mt-[60px] grid grid-cols-2 gap-5 md:grid-cols-5'>
						<div className=' flex flex-col justify-center text-center bg-color1 p-4'>
							<h2 className=' mb-[10px]'>Tomorrow</h2>
							<img src='' alt='' className='mb-[31px] h-20' />
							<div className='flex justify-between'>
								<p>16 &deg;C</p>
								<p>11 &deg;C</p>
							</div>
						</div>

						<div className=' flex flex-col justify-center text-center bg-color1 p-4'>
							<h2 className=' mb-[10px]'>Tomorrow</h2>
							<img src='' alt='' className='mb-[31px] h-20' />
							<div className='flex justify-between'>
								<p>16 &deg;C</p>
								<p>11 &deg;C</p>
							</div>
						</div>

						<div className=' flex flex-col justify-center text-center bg-color1 p-4'>
							<h2 className=' mb-[10px]'>Tomorrow</h2>
							<img src='' alt='' className='mb-[31px] h-20' />
							<div className='flex justify-between'>
								<p>16 &deg;C</p>
								<p>11 &deg;C</p>
							</div>
						</div>

						<div className=' flex flex-col justify-center text-center bg-color1 p-4'>
							<h2 className=' mb-[10px]'>Tomorrow</h2>
							<img src='' alt='' className='mb-[31px] h-20' />
							<div className='flex justify-between'>
								<p>16 &deg;C</p>
								<p>11 &deg;C</p>
							</div>
						</div>

						<div className=' flex flex-col justify-center text-center bg-color1 p-4'>
							<h2 className=' mb-[10px]'>Tomorrow</h2>
							<img src='' alt='' className='mb-[31px] h-20' />
							<div className='flex justify-between'>
								<p>16 &deg;C</p>
								<p>11 &deg;C</p>
							</div>
						</div>
					</div>

					<div className=' mt-10 mb-20'>
						<h2 className='mb-6'>Today's Highlights</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

							<div className=" flex flex-col text-center justify-center  bg-color1 pt-[22px] pb-[35px]">
								<p className=" mb-[6px]">Wind status</p>
								<h2 className=" text-7xl font-bold mb-5">
									7<span className=" text-3xl">mph</span>
								</h2>
								<div className="flex justify-center space-x-[8px]">
									<img src='' alt='' />
									<p>WSW</p>
								</div>
							</div>

							<div className=" flex flex-col text-center justify-center  bg-color1 pt-[22px] pb-[35px]">
								<p className=" mb-[6px]">Wind status</p>
								<h2 className=" text-7xl font-bold mb-5">
									7<span className=" text-3xl">mph</span>
								</h2>
								<div className="flex justify-center space-x-[8px]">
									<img src='' alt='' />
									<p>WSW</p>
								</div>
							</div>

							<div className=" flex flex-col text-center justify-center  bg-color1 pt-[22px] pb-[35px]">
								<p className=" mb-[6px]">Wind status</p>
								<h2 className=" text-7xl font-bold mb-5">
									7<span className=" text-3xl">mph</span>
								</h2>
								<div className="flex justify-center space-x-[8px]">
									<img src='' alt='' />
									<p>WSW</p>
								</div>
							</div>

							<div className=" flex flex-col text-center justify-center  bg-color1 pt-[22px] pb-[35px]">
								<p className=" mb-[6px]">Wind status</p>
								<h2 className=" text-7xl font-bold mb-5">
									7<span className=" text-3xl">mph</span>
								</h2>
								<div className="flex justify-center space-x-[8px]">
									<img src='' alt='' />
									<p>WSW</p>
								</div>
							</div>


						</div>
					</div>
				</div>

				<div className=" text-center">Independence</div>
			</div>
		</>
	);
};

export default Main;
