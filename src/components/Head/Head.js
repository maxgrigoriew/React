/** @format */

import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Head.module.css';

const Head = (props) => {
	return (
		<header className={s.header}>
			<img
				className={s.logo}
				src='https://phonoteka.org/uploads/posts/2021-05/thumbs/1620314781_5-phonoteka_org-p-avatarki-s-prozrachnim-fonom-5.png'
				alt=''
			/>
			{props.isAuth ? props.login :
				<NavLink to='/login'>
					<span className={s.header__text}>Login</span>
				</NavLink> }
		</header>
	);
};
export default Head;
