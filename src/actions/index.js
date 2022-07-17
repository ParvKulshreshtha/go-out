export const service = (service) =>{
    return {
        type:"SERVICE",
        service:service
    }
}

export const optionSelect = (option) =>{
    return{
        type:"OPTIONS",
        option:option
    }
}

export const coordinates = ({lat,lng}) =>{
    return{
        type:"COORDINATES",
        coordinate:{lat, lng}
    }
}

export const serviceDataChange = (data) =>{
    return{
        type:"SERVICE_DATA",
        data:data
    }
}

export const serviceClickLocation = ({lat,lng}) => {
    return{
        type:"CLICK_LOCATION",
        coordinate:{lat, lng}
    }
}