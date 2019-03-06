const REMOVE='REMOVE';

export const removeMessage=(message)=>{
    return {
        type:REMOVE,
        message:message
    }
}