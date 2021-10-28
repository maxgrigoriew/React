/** @format */

import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {
	addDialogsMessages,
	updateDialogsNewMessages,
} from '../../Redux/dialogs-reduser';

let mapStateToProps = (state) => {
	console.log(state)
	return {
		messages: state.dialogsReducer.messages,
		newMessages: state.dialogsReducer.newMessages,
		dialogs: state.dialogsReducer.dialogs,
	};
};
// let mapDispatchToProps = (dispatch) =>{
// 	return {
// 		addDialogs: () => {
// 			dispatch(addDialogsMessageCreator())
// 		},
// 		updateDialogs: (body)=> {
// 			dispatch(updateDialogsNewMessageCreator(body))
// 		},
//
// 	}
//
// }

let DialogsContainer = connect(mapStateToProps,
	{addDialogsMessages,
	updateDialogsNewMessages,}
)(Dialogs);

export default DialogsContainer;
