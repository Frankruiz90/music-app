import { useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return localStorage.getItem('token') || {logeed: false}
}

export const MusicApp = () => {

  const [ user, dispatch ] = useReducer( authReducer, {}, init )
  return (
  <AuthContext.Provider value={{
    user,
    dispatch
  }}>
    <AppRouter /> 
  </AuthContext.Provider>
    )
};
