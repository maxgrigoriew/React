import {combineReducers, createStore} from 'redux'
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";
import usersReduser from "./users-redusers";
import authReducer from "./auth-redusers";

let reducers = combineReducers({
	profileReducer,
	dialogsReducer,
	sidebarReducer,
	usersReduser,
	authReducer
})

const store = createStore(reducers)

window.store = store
export default store
