/** @format */

import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import NavFrends from './NavFrends/NavFrends';

const Nav = (props) => {
	let styles = {
		color: '',
	};
	return (
		<div className={s.navWrapper}>
			<nav className={s.nav}>
				<ul className={s.nav__list}>
					<li className={`${s.nav__item} ${s.active}`}>
						<NavLink
							to='/profile'
							className={`nav-link ${s.nav__link}`}
							activeClassName={s.active}
							style={styles}>
							Profile
						</NavLink>
					</li>
					<li className={s.nav__item}>
						<NavLink
							to='/users'
							className={`nav-link ${s.nav__link}`}
							activeClassName={s.active}>
							Users
						</NavLink>
					</li>
					<li className={s.nav__item}>
						<NavLink
							to='/dialogs'
							className={`nav-link ${s.nav__link}`}
							activeClassName={s.active}>
							Messages
						</NavLink>
					</li>
					<li className={s.nav__item}>
						<NavLink
							to='/news'
							className={`nav-link ${s.nav__link}`}
							activeClassName={s.active}>
							News
						</NavLink>
					</li>

					<li className={s.nav__item}>
						<NavLink
							to='/musik'
							className={`nav-link ${s.nav__link}`}
							activeClassName={s.active}>
							Musik
						</NavLink>
					</li>
					<li className={s.nav__item}>
						<NavLink
							to='Settings'
							className={`nav-link ${s.nav__link}`}
							activeClassName={s.active}>
							Settings
						</NavLink>
					</li>
				</ul>
			</nav>
			{/* <NavFrends navFrendsItems={props.navFrendsData} /> */}
		</div>
	);
};

export default Nav;
