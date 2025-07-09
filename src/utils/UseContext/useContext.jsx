import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [ContextHomeDataAPI, setContextHomeDataAPI] = useState();
  const [ContextFaqsDataAPI, setContextFaqsDataAPI] = useState();
  const [ContextMyRewardDataAPI, setContextMyRewardDataAPI] = useState();
  const [AuthLocal, setAuthLocal] = useState();
  return (
    <UserContext.Provider
      value={{
        ContextHomeDataAPI,
        setContextHomeDataAPI,
        ContextMyRewardDataAPI,
        setContextMyRewardDataAPI,
        ContextFaqsDataAPI,
        setContextFaqsDataAPI,
        AuthLocal,
        setAuthLocal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
