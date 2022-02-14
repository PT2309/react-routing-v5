import { createContext, useState } from "react";

export const UserAuthContext = createContext();

const UserAuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

   return(
     <UserAuthContext.Provider value = { {isLoggedIn}}>
        {props.children}
    </UserAuthContext.Provider>)
}

export default UserAuthContextProvider;
