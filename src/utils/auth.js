import { signInWithEmailAndPassword, signOut, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

const loginFirebase = async (auth, email, password) => {
    try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        const user = response.user;

        if(user.emailVerified){
            window.localStorage.setItem('user', JSON.stringify(response.user));
            return true;
        }else{
            await sendEmailVerification(user);
            return false;
        }
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
    else if(window.location.pathname !== '/login' && window.location.pathname !== '/recovery-password'){
        navigate('/login');
    }
}

const recoveryPasswordFirebase = async (auth, email) => {
    try{
        await sendPasswordResetEmail(auth, email);
    }catch(error){
        throw error;
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
    logoutFirebase,
    recoveryPasswordFirebase
}