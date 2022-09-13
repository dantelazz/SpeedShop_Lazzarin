import React from "react";
import "./Images/ItemDetail.css";


export const ItemDetail = ({ data }) => {
	return (
		<div className="container">
			<div className="detail">
				<img className="detail__image" src={data.image} alt="" />
				<div className="content">
					<h1>{data.title}</h1>
					<h2>{data.price}</h2>
					<div>{data.info}</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;