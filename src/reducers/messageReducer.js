export const messageReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD':
          return state.concat(action.message);
        case 'REMOVE':
          state.splice(state.indexOf(action.message),1)
          return [...state];
        default:
         return state;
    }
}