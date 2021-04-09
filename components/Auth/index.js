import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { firebaseClient, persistenceMode } from "../../config/firebase/client";

const AuthContext = React.createContext([{}, () => {}]);

export const login = async ({ email, password }) => {
  firebaseClient.auth().setPersistence(persistenceMode);
  try {
    const user = await firebaseClient
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (error) {}
};

export const logout = () => firebaseClient.auth().signOut();

export const signup = async ({ email, password, username }) => {
  try {
    const user = await firebaseClient
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await login({ email, password });
    //setupProfile();

    // const { data } = await axios({
    //   method: "post",
    //   header: { Authentication: `Bearer ${user.getToken()}` },
    //   url: "/api/profile",
    //   data: {
    //     userId: user.getToken(),
    //     username: username,
    //   },
    // });
  } catch (error) {
    console.log(error);
  }
};

export const useAuth = () => {
  const [auth] = useContext(AuthContext);
  return [auth, { login, logout, signup }];
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    loading: true,
    user: false,
  });

  useEffect(() => {
    const unsubscribe = firebaseClient.auth().onAuthStateChanged((user) => {
      setAuth({
        loading: false,
        user,
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
