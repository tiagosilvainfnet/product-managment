import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
    const navigate = useNavigate();

    useEffect(() => {
        verifyLogin(navigate);
    }, []);

    return 'ProductForm';
} 

export default ProductForm;