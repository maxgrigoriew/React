/** @format */

import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
	let newPastElement = React.createRef();
	let myPostsItems = props.myPosts.map((item) => (
		<Post text={item.mes} id={item.id} />
	));

	const addPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPastElement.current.value;
		props.onPostChange(text);
	};
	let handleKeyPress = (e) => {
		let key = e.keyCode || e.which;
		if (key === 13) {
			addPost();
		}
	};
	return (
		<div className={s.postsTop}>
			<div className={s.postsTop__inner}>
				<textarea
					onChange={onPostChange}
					ref={newPastElement}
					className={`bg-light ${s.textarea}`}
					value={props.newPostText}
					onKeyPress={handleKeyPress}></textarea>
				<button
					className={`btn btn-primary`}
					type='button'
					onClick={addPost}>
					Button
				</button>
			</div>
			{myPostsItems}
		</div>
	);
};
export default MyPost;
