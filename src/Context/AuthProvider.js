import React, { createContext, useEffect, useState } from "react";
import app from "./../Firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signUpUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };
    const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    };

    const forgetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    useEffect(() => {
        const unSubscirbe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscirbe();
        };
    }, []);

    const authInfo = { googleSignin, createUser, signUpUser, user, logOutUser, updateUser, loading, forgetPassword };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
