// import React from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../../firebase.init";
import { useEffect, useState } from "react";


const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const registerUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signOutUser=()=>{
        return signOut(auth);
    }
    const updataUser=(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }
    //observer:
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signInGoogle,
        signOutUser,
        updataUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;