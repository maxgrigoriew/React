/** @format */
import styled from 'styled-components';
import React from 'react';
import Preloader from './../UI/Preloader/Preloader';
import createPages from './../../myScripts/pagination';
import {NavLink} from 'react-router-dom';
import {usersAPI} from './../../api/api';

const ItemTop = styled.div`
	margin-right: 60px;
	display: flex;
	flex-direction: column;
`;
const Img = styled.img`
	width: 100px;
	height: 150px;
	object-fit: cover;
	border-radius: 15px;
	margin-bottom: 10px;
`;
const Button = styled.button`
	color: #fff;
	align-self: flex-end;
	width: 100%;
	background: #fff;
	border: none;
	color: var(--color-accent);
	height: 30px;
	border: 1px solid transparent;
	border-radius: 5px;
	&.loading {
		color: #fff;
		background: var(--color-accent);
		border: 1px solid #fff;
		cursor: wait;
	}
`;
const Name = styled.h1`
	font-size: 1.5em;
	text-transform: uppercase;
	color: #fff;
`;
const Item = styled.div`
	background: var(--color-accent);
	display: flex;
	margin-bottom: 30px;
	border-radius: 15px;
	padding: 30px;
	color: #fff;
`;

const City = styled.div``;
const Status = styled.div`
	color: red;
`;
const Pagination = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;
const PaginationItem = styled.div`
	padding 2px 5px;
	background: var(--color-accent);
	color: #fff;
	margin-left: 2px;
	margin-right: 2px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 2px;
	line-height: 20px;
	cursor: pointer;
	
	&.active {
		padding 4px 10px;
	}
`;
export default function Users(props) {
	let pages = [];
	let pagesCount = Math.ceil(props.totalCount / props.pageSize);

	createPages(pages, pagesCount, props.pageNumber);
	return (
		<div>
			{props.isFetching ? <Preloader /> : null}
			<Pagination>
				{pages.map((p) => {
					return (
						<PaginationItem
							className={props.pageNumber === p ? 'active' : null}
							onClick={() => {
								props.pageNumber !== p &&
									props.onPagesChanged(p);
							}}>
							{p}
						</PaginationItem>
					);
				})}
			</Pagination>
			{props.users.map((item) => (
				<Item key={item.id}>
					<ItemTop>
						<NavLink to={'/profile/' + item.id}>
							<Img
								src={
									item.photos.small == null
										? 'https://pp.userapi.com/c637323/v637323833/55842/T0EmQrWZ-QM.jpg'
										: item.photos.small
								}
								alt='logo'></Img>
						</NavLink>
						{item.followed ? (
							<Button
								className={
									props.followingInProgress.some(
										(id) => id === item.id
									)
										? 'loading'
										: ''
								}
								disabled={props.followingInProgress.some(
									(id) => id === item.id
								)}
								onClick={() => {
									props.unfollowThunkCreacor(item.id);
								}}>
								Follow
							</Button>
						) : (
							<Button
								className={
									props.followingInProgress.some(
										(id) => id === item.id
									)
										? 'loading'
										: ''
								}
								disabled={props.followingInProgress.some(
									(id) => id === item.id
								)}
								onClick={() => {
									props.followThunkCreacor(item.id);
								}}>
								Unfollow
							</Button>
						)}
					</ItemTop>
					<div className='wrapper'>
						<Name>{item.name}</Name>
						<City>{item.uniqueUrlName}</City>
						<Status>{item.status}</Status>
					</div>
				</Item>
			))}
		</div>
	);
}
