import React, { createContext, useState } from "react";
export const userContext = createContext();
export const UserProvider = (props) => {
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });

  
  return (
    <userContext.Provider value={[userData, setUserData]}>
      {props.children}
    </userContext.Provider>
  );
};