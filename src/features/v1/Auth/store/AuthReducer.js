// export const UserInitialState = [];
export const INITIAL_STATE = {
   isLoader:true,
   users: {},
 
  
  

}

const LoginReducer = (state = INITIAL_STATE, action) => {
 
  switch (action.type) {
    case "SETLOGIN":
     return ({
        ...state,
        users: action.payload,
        isLoader:false
    })  
    
    case "LOGINERROR":
      return ({
        ...state,
        users: {},
        isLoader:false

    })
    case "NEWUSERREGISTER":
      console.log("state NEWUSERREGISTER",state)
      return ({
        ...state,
        isLoader:false

    })

    
   
     default:
      return state;
  }
};

export default LoginReducer;