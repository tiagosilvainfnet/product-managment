import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const navigate = useNavigate();

    useEffect(() => {
        verifyLogin(navigate);
    }, []);

    return 'UserList';
} 

export default UserList;