import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [ContextHomeDataAPI, setContextHomeDataAPI] = useState();
  const [ContextMyRewardDataAPI, setContextMyRewardDataAPI] = useState();
  const [AuthLocal, setAuthLocal] = useState();
  return (
    <UserContext.Provider
      value={{
        ContextHomeDataAPI,
        setContextHomeDataAPI,
        ContextMyRewardDataAPI,
        setContextMyRewardDataAPI,
        AuthLocal,
        setAuthLocal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
