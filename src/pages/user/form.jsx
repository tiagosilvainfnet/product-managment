import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate, useParams } from "react-router-dom";

const UserForm = (props) => {
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        verifyLogin(navigate);
        console.log(params.id);
    }, []);

    useEffect(() => {
        props.setRoute(window.location.pathname)
    }, [])

    return 'UserForm';
} 

export default UserForm;