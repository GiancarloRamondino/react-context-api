import { createContext } from "react";

const CountContext = createContext();

const CountProvider = ({ children }) => {

  return (
    <CountContext.Provider value={{ count: 0 }}>
      {children}
    </CountContext.Provider>
  );
}

export { CountContext, CountProvider };
