// let state = {
// 	profilePage: {
//
// 		myPosts: [
// 			{id: 1, mes: 'hello'},
// 			{id: 2, mes: 'how are you?'}
// 		],
// 	},
// 	dialogPage: {
// 		messages: [
// 			{id: 1, name: 'Hallo'},
// 			{id: 2, name: 'By'},
// 			{id: 3, name: 'You'},
// 		],
// 		dialogs: [
// 			{
// 				id: 1,
// 				name: 'Max',
// 				number: '22',
// 				img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-22.jpg"
// 			},
// 			{
// 				id: 2,
// 				name: 'Nikos',
// 				number: '22',
// 				img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-42.jpg"
// 			},
// 			{
// 				id: 3,
// 				name: 'Anya',
// 				number: '22',
// 				img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-12.jpg"
// 			}
// 		]
// 	},
// 	navBar:{
// 		navFrendsData: [
// 			{
// 				id: 1,
// 				name: "Max",
// 				img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-22.jpg"
// 			},
// 			{
// 				id: 2,
// 				name: "Nik",
// 				img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-42.jpg"
// 			},
// 			{
// 				id: 3,
// 				name: "Dasha",
// 				img: "https://phonoteka.org/uploads/posts/2021-04/1618996087_3-phonoteka_org-p-fon-na-rabochii-stol-koti-3.jpg"
// 			}
// 		]
//
// 	}
// }
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";

let store = {
	renderEntireThree() {
		return null
	},
	state: {
		profilePage: {
			myPosts: [
				{id: 1, mes: 'hello'},
				{id: 2, mes: 'how are you?'}
			],
			newPostText: ''
		},
		dialogsPage: {
			messages: [
				{id: 1, name: 'Hallo'},
				{id: 2, name: 'By'},
				{id: 3, name: 'You'},
			],
			messages1: [
				{id: 1, name: 'how are you?'},
				{id: 2, name: 'how are you?'},
				{id: 3, name: 'how are you?'},
			],
			dialogs: [
				{
					id: 1,
					name: 'Max',
					number: '22',
					img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-22.jpg"
				},
				{
					id: 2,
					name: 'Nikos',
					number: '22',
					img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-42.jpg"
				},
				{
					id: 3,
					name: 'Anya',
					number: '22',
					img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-12.jpg"
				}
			],
			navFrendsData: [
				{
					id: 1,
					name: "Max",
					img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-22.jpg"
				},
				{
					id: 2,
					name: "Nik",
					img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-42.jpg"
				},
				{
					id: 3,
					name: "Dasha",
					img: "https://phonoteka.org/uploads/posts/2021-04/1618996087_3-phonoteka_org-p-fon-na-rabochii-stol-koti-3.jpg"
				}
			],
			newMessages: '1',
			newMessages1: '332',
			
			
		},
		sidebar: {},
	},
	getState() {
		return this.state
	},
	//использовали эти ф-ии до применения dispatch
	// updateNewPostTest(newText){
	// 	this.state.profilePage.newPostText = newText
	// 	this.renderEntireThree(this.state)
	// },
	
	// addMessage(addMessage) {
	// 	let newMessage = {
	// 		id: 25,
	// 		name: addMessage
	// 	};
	// 	this.state.dialogsPage.messages.push(newMessage)
	// 	this.renderEntireThree(this.state)
	// },
	
	subscribe(observer) {
		this.renderEntireThree = observer
	},
	
	dispatch(action) {
		this.state.profilePage = profileReducer(this.state.profilePage, action)
		this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)
		this.state.sidebar = sidebarReducer(this.state.sidebar, action)
		this.renderEntireThree(this.state)
		// if (action.type === ADD_POST) {
		// 	let newPost = {
		// 		id: 4,
		// 		mes: this.state.profilePage.newPostText
		// 	};
		// 	this.state.profilePage.myPosts.push(newPost)
		// 	this.state.profilePage.newPostText = ''
		// 	this.renderEntireThree(this.state)
		// } else if (action.type === UPDATE_NEW_POST_TEXT) {
		// 	this.state.profilePage.newPostText = action.newText
		// 	this.renderEntireThree(this.state)
		// } else if (action.type === ADD_DIALOGS_MESSAGE) {
		// 	let newMessage = {
		// 		id: 25,
		// 		name: this.state.dialogsPage.newMessages
		// 	};
		// 	this.state.dialogsPage.messages.push(newMessage)
		// 	this.renderEntireThree(this.state)
		//
		// } else if (action.type === UPDATE_DIALOGS_NEW_MESSAGE) {
		// 	this.state.dialogsPage.newMessages = action.newText
		// 	this.renderEntireThree(this.state)
		// }
		//
		// else if (action.type === ADD_MESSAGE1) {
		// 	let newMessage = {
		// 		id: 25,
		// 		name: this.state.dialogsPage.newMessages1
		// 	};
		// 	this.state.dialogsPage.messages.push(newMessage)
		// 	this.renderEntireThree(this.state)
		// } else if (action.type === UPDATE_MESSAGE1) {
		// 	this.state.dialogsPage.newMessages1 = action.body
		// 	this.renderEntireThree(this.state)
		// }
	}
}


export default store
window.store = store
