import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const navigate = useNavigate();

    useEffect(() => {
        verifyLogin(navigate);
    }, []);

    return 'UserForm';
} 

export default UserForm;