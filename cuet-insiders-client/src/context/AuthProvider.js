import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currUser, setCurrUser] = useState([]);
    
    const googleProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const addUserToDb = () => {
        const { uid, displayName, email, photoURL } = user;
        const newUser = {
            userId: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            coverURL: '',
            bio: '',
            isMentor: false,
            isAvailable: false,
            deptName: '',
            position: '',
            institution: '',
            batch: '',
            currentLoc: '',
            facebook: '',
            linkedin: '',
            mailSocial: '',
            interests: '',
            followers: [],
            following: [],
            bookmarks: []
        };
        if(user.email) setCurrUser(newUser);
        if (user.email && user.displayName) {        
            fetch("http://localhost:5000/users", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser),  
            })
                .then(res => res.json())
                .then(data => {})
                .catch(error => console.error(error));
        }
        
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user inside state change ', currentUser);
            setUser(currentUser);
            if (currentUser) addUserToDb();
            setLoading(false);
        })

        return () => unsubscribe();

    }, [user?.displayName])
    
    const authInfo = {
        user,
        currUser,
        loading,
        setUser,
        createUser,
        signIn,
        updateUserProfile,
        googleProviderLogin,
        logout
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;