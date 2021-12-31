import initializeAuthentication from "../components/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    };

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })
        return unsubscribe;
    }, [auth]);

    return {
        user,
        registerUser,
        loginUser,
        logOut
    }
}
export default useFirebase;