import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { createWrapper } from "next-redux-wrapper"
import company_reducer from "./reducers"

// Initial states
const initialState = {}

// Middleware
const middleware = [thunk]

// Creating store
export const store = createStore(
    company_reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

// Assignment store to next wrappper
const makeStore = () => store

export const wrapper = createWrapper(makeStore)