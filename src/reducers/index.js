import serviceChange from "./serviceChange";
import options from "./options";
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    serviceChange,
    options
})

export default rootReducer