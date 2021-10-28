import React from "react";
import s from './NavFrends.module.css'

const NavFrend = (props) => {
	return (
		<div className={s.item}>
			{/* <img className="card-img"
			     src={props.img} alt="кот"/> */}
			<p className="text-muted">{props.mes}</p>
		</div>
	)
}
export default NavFrend