// export const checkvalidateSignUp = (email,password,name) =>{

// const isNameValid =/^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
// const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
// const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

// if(!isEmailValid) 
//     return "E-mail ID is not valid";
// if(!isPasswordValid)
//     return "Password is not valid";
// if(!isNameValid)
//     return "Name is not valid";

// return null;
// };

export const checkValidateLogin = (email,password) =>{

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isEmailValid) 
        return "E-mail ID is not valid";
    if(!isPasswordValid)
        return "Password is not valid";
    return null;
    };
    
    
