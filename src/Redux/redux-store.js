import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
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

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store
