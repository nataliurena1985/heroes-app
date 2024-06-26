import React, { useEffect, useReducer } from "react";
import { AppRouter } from "./routers/AppRouter";
import { authReducer } from "./auth/authReducer";
import { AuthContext } from "./auth/authContext";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

// const init = () => {
//   return { logged: true, name:"claudia tempooral" };
// };

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  
  useEffect(() => {
    if (!user) return;

    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
};
