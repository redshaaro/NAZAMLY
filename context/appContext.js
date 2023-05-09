import React, { createContext, useState, useContext } from "react";

const AppContext = createContext(null); //create context object and put it in the AppContext constant
export const useAppContext = () => {
  //hook to call the context in a simple way
  const context = useContext(AppContext); //it acceptes the context object created by createContext and returns context values from the provider props
  if (context === undefined) {
    throw new Error("NO");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [userObj,setUser]=useState(null)
   

 

  return (
    <AppContext.Provider
      value={{userObj,setUser  }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

//createContext to create the context in the constant
//useContext to call the context inside the hook when it's called
