import React from "react";
import { createContext, useState, useEffect } from "react";
import { auth } from "./firebase";

export const AuthContext = createContext(); 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // User is authenticated 
                setUser(authUser);
            } else {
                // User is not authenticated
                setUser(null); 
            }
        });

        // Clean up the subscription when the component unmounts 
        return () => unsubscribe(); 
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};