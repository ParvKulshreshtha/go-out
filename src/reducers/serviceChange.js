const initialState = ""

const serviceChange = (state = initialState,service) => {
    console.log(service.type);
    switch(service.type) {
        case "SERVICE" : return service.service;
        default : return state;
    }
}

export default serviceChange