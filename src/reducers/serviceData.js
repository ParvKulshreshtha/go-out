const initialState=[{}]

const serviceData = (state = initialState,action) => {
    console.log(action);
    switch(action.type) {
        case "SERVICE_DATA" : return action.data
        default : return null;
    }
}

export default serviceData