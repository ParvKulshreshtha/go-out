const initialState = []

const options = (state = initialState,action) => {
    console.log(action);
    switch(action.type) {
        case "OPTIONS" : return action.option;
        default : return state;
    }
}

export default options