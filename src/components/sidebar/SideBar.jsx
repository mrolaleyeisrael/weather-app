// React import
import { useState } from "react";

// components
import DefaultSideBar from "./DefaultSideBar";
import SearchSideBar from "./SearchSideBar";

const SideBar = () => {
	const [navBar, setNavBar] = useState("default");

	const displayNavbar =
		navBar === "default" ? (
			<DefaultSideBar setNavBar={setNavBar} />
		) : (
			<SearchSideBar setNavBar={setNavBar} />
		);
	return displayNavbar;
};

export default SideBar;
