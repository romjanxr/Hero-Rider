import initializeAuthentication from "../components/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [userRole, setUserRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const registerUser = (email, password, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/dashboard')
            })
            .catch(error => {
                console.log(error.message)
            })
            .finally(() => setIsLoading(false))
    };

    const loginUser = (email, password, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/dashboard')
            })
            .catch(error => {
                console.log(error.message)
            })
            .finally(() => setIsLoading(false))
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
            setIsLoading(false);
        })
        return unsubscribe;
    }, [auth]);

    useEffect(() => {
        axios.get(`https://guarded-brook-42731.herokuapp.com/users/role?email=${user.email}`)
            .then(res => setUserRole(res.data.role))
    }, [user.email])

    return {
        user,
        registerUser,
        loginUser,
        logOut,
        userRole,
        isLoading
    }
}
export default useFirebase;