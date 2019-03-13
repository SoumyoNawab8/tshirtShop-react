const LOGIN='LOGIN';

export const loginUser=(values)=>{
    return {
        type:LOGIN,
        value:values
    }
}