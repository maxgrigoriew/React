import {NavLink} from "react-router-dom";
import React from "react";
import s from './DialogItem.module.css'

const DialogItem = (props) => {
	let path = `/dialogs/${props.id}`
	
	return (
		<div className={s.dialogItem}>
			<NavLink to={path}>
				<div className={s.wrapper}>
					<div>
						<img className={s.img} src={props.img} alt=""/>
					</div>
					<div>
						{props.name}
					</div>
				</div>
			</NavLink>
		</div>
	)
}
export default DialogItem