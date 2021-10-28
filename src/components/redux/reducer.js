import DISHES from '../data/dishes';
import COMMENTS from '../data/comments'

const initialState = {
     dishes:DISHES,
     comments:COMMENTS,
     new:'new'
}

export const Reducer = ( state = initialState, action ) =>{
     // console.log('Action', action)
     if(action.type == 'TEST'){
          return{
               ...state,
               new : action.new
          }
     }
     return state;
}

