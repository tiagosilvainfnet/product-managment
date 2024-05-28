import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const ProductList = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        verifyLogin(navigate);
    }, []);

    useEffect(() => {
        props.setRoute(window.location.pathname)
    }, [])

    return 'ProductList';
} 

export default ProductList;