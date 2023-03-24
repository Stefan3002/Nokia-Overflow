import {combineReducers} from "redux";
import {navigationReducer} from "./navigation-store/navigation-reducer";
import {userReducer} from "./user-store/user-reducer";
import {utilsReducer} from "./utils-store/utils-reducer";

export const rootReducer = combineReducers({
    navigationState: navigationReducer,
    userState: userReducer,
    utils: utilsReducer
})