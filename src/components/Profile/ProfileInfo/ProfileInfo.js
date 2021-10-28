/** @format */

import React from 'react';
import Preloader from './../../UI/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}
	return (
		<div className={s.profile__info}>
			<div className={s.profile__img}>
				<img
					src={
						!props.profile.photos.large
							? 'https://get.wallhere.com/photo/1680x1050-px-cat-funny-1910317.jpg'
							: props.profile.photos.large
					}
					alt=''
				/>

				{/* <img
					src='https://proprikol.ru/wp-content/uploads/2021/01/krasivye-kartinki-sobak-27.jpg'
					alt=''
				/> */}
			</div>
			<div className={s.profile__infoText}>
				<div className={s.profile__item}>{props.profile.fullName}</div>
				<div className={s.profile__item}>
					{props.profile.lookingForAJobDescription}
				</div>
				<div className={s.profile__item}>{props.profile.aboutMe}</div>
			</div>
		</div>
	);
};
export default ProfileInfo;
