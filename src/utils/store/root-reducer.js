import {combineReducers} from "redux";
import {navigationReducer} from "./navigation-store/navigation-reducer";
import {userReducer} from "./user-store/user-reducer";

export const rootReducer = combineReducers({
    navigationState: navigationReducer,
    userState: userReducer
})