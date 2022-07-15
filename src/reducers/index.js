import serviceChange from "./serviceChange";
import options from "./options";
import coordinates from "./coordinates";
import { combineReducers } from "redux"
import serviceData  from "./serviceData";


const rootReducer = combineReducers({
    serviceChange,
    options,
    coordinates,
    serviceData
})

export default rootReducer
