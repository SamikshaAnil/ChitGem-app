const initialState={
    users:{}
}
const UersReducers=(state=initialState,action)=>{
      switch(action.type){
        case "SET_USERS_DETAIL":{
            return {...state,users:{...action.payload}}
        }
        default :{
            return state
        }
      }
}
export default usersReducers