import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const loginFirebase = async (auth, email, password) => {
    try{
        const response = await signInWithEmailAndPassword(auth, email, password);

        return response;
    }catch(error){
        throw error;
    }
}

const verifyLogin = (navigate) => {
    if(window.localStorage.getItem('user') && window.location.pathname !== '/login' && window.location.pathname !== '/recovery-password'){
        return;
    }else if(window.localStorage.getItem('user') && (window.location.pathname === '/login' || window.location.pathname === '/recovery-password')){
        navigate('/dashboard');
    }
    else{
        navigate('/login');
    }
}

const logoutFirebase = async (auth) => {
    try{
        await signOut(auth);
    }catch(error){
        throw error;
    }
}

export {
    loginFirebase,
    verifyLogin,
    logoutFirebase
}