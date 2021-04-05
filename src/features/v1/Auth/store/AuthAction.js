

export const setLoginUser = (auth) => {
         return {
            type: "SETLOGIN",
            payload: auth[0]
        };
    
};
export const setLoginError = () => {
    return {
       type: "LOGINERROR",
       payload: []
   };

};

export const LoginUserAction = (user) => {
        return {
            type: "LOGIN",
            payload: user
        };
   
};

export const newUserregister = () => {
    return {
        type: "NEWUSERREGISTER",
    };

};



export const RegisterUserAction = (user) => {
    return {
        type: "REGISTER",
        payload: user
    };

};


 

