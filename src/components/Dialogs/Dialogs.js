/** @format */

import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessagesItem from './MessagesItem/MessagesItem';

const Dialogs = (props) => {
	
	const dialogsItems = props.dialogs.map((item) => {
		return (
			<DialogItem
				name={item.name}
				id={item.id}
				img={item.img}
				number={item.number}
			/>
		);
	});
	const messagesItems = props.messages.map((item) => (
		<MessagesItem id={item.id} message={item.name} />
	));

	let addDialogs = () => {
		props.addDialogsMessages();
	};
	
	let updateDialogs = (e) => {
		let text = e.target.value;
		props.updateDialogsNewMessages(text);
	};

	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>{dialogsItems}</div>
				<div className='messages'>{messagesItems}</div>
			</div>
			<div className={s.wrapper}>
				<textarea
					value={props.newMessages}
					onChange={updateDialogs}
					className={`w-100 ${s.textarea}`}></textarea>
				<button onClick={addDialogs} className='btn btn-primary mb-2'>
					add post
				</button>
			</div>
		</div>
	);
};

export default Dialogs;
