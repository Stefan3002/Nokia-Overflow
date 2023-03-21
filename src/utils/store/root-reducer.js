import {combineReducers} from "redux";
import {navigationReducer} from "./navigation-store/navigation-reducer";

export const rootReducer = combineReducers({
    navigationState: navigationReducer
})