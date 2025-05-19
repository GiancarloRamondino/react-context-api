import { createContext, useState } from "react";

const CountContext = createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export { CountContext, CountProvider };
