import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const RecoveryPassword = () => {
    const navigate = useNavigate();

    useEffect(() => {
        verifyLogin(navigate);
    }, []);

    return 'RecoveryPassword';
} 

export default RecoveryPassword;