import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const StockList = () => {
    const navigate = useNavigate();

    useEffect(() => {
        verifyLogin(navigate);
    }, []);

    return 'StockList';
} 

export default StockList;