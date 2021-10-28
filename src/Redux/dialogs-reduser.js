const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE'
const UPDATE_DIALOGS_NEW_MESSAGE = 'UPDATE-DIALOGS-NEW-MESSAGE'

let initaialSastate = {
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
	newMessages: '',
}
const dialogsReducer = (state = initaialSastate, action) => {
	switch (action.type) {
		case ADD_DIALOGS_MESSAGE:
			return {
				...state,
				messages: [...state.messages, {id: 33, name: state.newMessages}]
			};
		case UPDATE_DIALOGS_NEW_MESSAGE:
			return {
				...state,
				newMessages: action.newText
			};
		default:
			return state
	}
}

export const addDialogsMessages = () => {
	return {
		type: 'ADD-DIALOGS-MESSAGE'
	}
}
export const updateDialogsNewMessages = (text) => {
	return {
		type: 'UPDATE-DIALOGS-NEW-MESSAGE',
		newText: text
	}
}

export default dialogsReducer