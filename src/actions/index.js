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