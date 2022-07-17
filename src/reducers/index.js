import serviceChange from "./serviceChange";
import options from "./options";
import coordinates from "./coordinates";
import { combineReducers } from "redux"
import serviceData  from "./serviceData";
import serviceLocation from "./serviceLocation";


const rootReducer = combineReducers({
    serviceChange,
    options,
    coordinates,
    serviceData,
    serviceLocation
})

export default rootReducer
