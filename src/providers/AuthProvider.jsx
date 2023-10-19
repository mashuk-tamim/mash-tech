import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../firebase/firebase.config';


export const AuthContext = createContext("");

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(false);
        return signInWithPopup(auth, googleProvider);
    }

    const signUp = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthContext.propTypes = {
    children: PropTypes.node.isRequired,
};