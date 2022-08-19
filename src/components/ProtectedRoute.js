import React from 'react';
import {Navigate} from 'react-router-dom';
import {useUserAuth} from '../context/useAuthContext'

const ProtectedRoute=({children})=>{
    const {user}=useUserAuth();
    
    console.log("check user in private : ",user);
    if(!user){
        return <Navigate to={"/login"}/>
        
    }
    return children;
};

export default ProtectedRoute