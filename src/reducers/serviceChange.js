const initialState = ""

const serviceChange = (state = initialState,action) => {
    console.log(action.type);
    switch(action.type) {
        case "SERVICE" : return action.service;
        default : return state;
    }
}

export default serviceChange