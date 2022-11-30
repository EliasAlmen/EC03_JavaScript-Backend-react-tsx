import React from "react";
import { NavLink } from "react-router-dom";

const Banner3Section: React.FC = () => {
	return (
		<section className="container banner-flashsale ">
			<div className="container-banner-flashsale">
				<h1>Up to 70% off*</h1>
				<p>Women's, Men's & Kids' Winter Fashion</p>
				<NavLink
					to={`/products`}
					className="button button-white bg-light"
				>
					FLASH SALE
				</NavLink>
			</div>
		</section>
	);
};

export default Banner3Section;
