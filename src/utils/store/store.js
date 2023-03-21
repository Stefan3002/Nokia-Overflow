import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./root-reducer";
import {logger} from "redux-logger/src";
import thunk from 'redux-thunk'

const middleWares = [logger, thunk]
const enhancers = compose(applyMiddleware(...middleWares))
export const store = createStore(rootReducer, undefined, enhancers)