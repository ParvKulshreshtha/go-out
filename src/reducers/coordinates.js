const initialState = {}

const coordinatesSelect = (state = initialState,action) => {
    console.log(action);
    switch(action.type) {
        case "COORDINATES" : return action.coordinate;
        default : return state;
    }
}

export default coordinatesSelect