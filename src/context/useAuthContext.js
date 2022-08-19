import {createContext,useContext,useEffect,useState} from 'react';
import {createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut,sendPasswordResetEmail} from 'firebase/auth'

import {auth} from '../firebase'

const userAuthContext=createContext();

export function UserAuthContextProvider({children}){
    const [user,setUser]=useState({});

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function logout(){
        return signOut(auth);
    }

    function forgotPassword(email){
        return sendPasswordResetEmail(auth,email);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });

        return ()=>{
            unsubscribe();
        }
    },[])

    return (
        <userAuthContext.Provider value={{user,login,signup,logout,forgotPassword}}>
            {children}
        </userAuthContext.Provider>
    )
}


export function useUserAuth(){
    return useContext(userAuthContext);
}