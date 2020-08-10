import React, { createContext, useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import firebase from "./firebase";
import styles from "./Auth.module.css";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [pending, setPending] = useState(true);

  // state={

  // }

  useEffect(() => {
    const fetchDetails = () => {};

    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, [currentUser]);

  if (pending) {
    return (
      <div className={styles.container}>
        <CircularProgress className={styles.circularProgress} />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ currentUser, userDetails }}>
      {children}
    </AuthContext.Provider>
  );
};
