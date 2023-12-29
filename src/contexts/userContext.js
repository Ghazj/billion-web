import React, { useState, useEffect } from 'react';

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(null);
  const [tokenStatus, setTokenStatus] = useState(true);

  return (
    <Context.Provider value={{ jwt, setJWT }}>
      {children}
    </Context.Provider>
  );
}

export default Context;