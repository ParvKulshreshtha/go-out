const initialState = {}

const serviceLocation = (state = initialState,action) => {
    console.log(action);
    switch(action.type) {
        case "CLICK_LOCATION" : return action.coordinate;
        default : return state;
    }
}

export default serviceLocation