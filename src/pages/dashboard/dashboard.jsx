import { useEffect } from "react";
import { logoutFirebase, verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

const Dashboard = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        verifyLogin(navigate);
    }, []);

    const logout = async () => {
        try{
            logoutFirebase(props.auth);
            window.localStorage.removeItem('user');
            navigate('/login');
        }catch(error){
            console.log(error);
        }
    }

    return <>
        'Dashboard'
        <Button onPress={logout}>Sair</Button>
    </>;
} 

export default Dashboard;