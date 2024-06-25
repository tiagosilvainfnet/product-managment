import { useEffect, useState } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Button, Grid, Textfield } from "../../components";
import { getData, saveData, updateData } from "../../utils/database";
import { AlertTitle } from "@mui/material";

const ProductForm = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const [data, setData] = useState({});
    const [showAlert, setShowAlert] = useState(null);

    useEffect(() => {
        verifyLogin(navigate);
        props.setRoute(window.location.pathname)
        load();
    }, []);

    const load = async () => {
        if(params.id !== "new"){
            const product = await getData("products", params.id);
            if(product !== null){
                setData(product);
            }
        }
    }

    const save = () => {
        let alert = {}
        try{
            if(params.id === "new") {
                saveData("products", data)
            }else{
                updateData("products", data, params.id)
            }
            alert = {
                title: "Sucesso",
                message: `Produto ${params.id !== "new" ? "editado" : "salvo"} com sucesso`,
                type: "success"
            }
        }catch(err){
            console.error(err);
            alert = {
                title: "Erro",
                message: `Erro ao salvar produto {err}`,
                type: "error"
            }
        }
        
        setShowAlert(alert);
        setTimeout(() => {
            setShowAlert(null);
            navigate("/products");
        }, 3000);
    }

    return  <Grid container spacing={2}>
                {
                    showAlert !== null ? 
                    <div style={{
                        position: "fixed",
                        top: 15,
                        right: 15,
                    }}>
                        <Alert severity="success">
                            <AlertTitle>{showAlert.title}</AlertTitle>
                            {showAlert.message}
                        </Alert>
                    </div> : null
                }
                <Grid item={true} xs={12} md={2}></Grid>
                <Grid item={true} xs={12} md={8}>
                    <Grid container spacing={2}>
                        <Grid item={true} xs={12}>
                            <h1>{params.id === "new" ? "Novo Produto" : "Editar Produto"}</h1>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Textfield
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                fullWidth={true}
                                material={true}
                                label="Nome" />
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Textfield
                                value={data.description}
                                onChange={(e) => setData({ ...data, description: e.target.value })}
                                fullWidth={true}
                                material={true}
                                multiline={true}
                                rows={4}
                                label="Descrição" />
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Textfield
                                value={data.price}
                                onChange={(e) => setData({ ...data, price: e.target.value })}
                                fullWidth={true}
                                material={true}
                                type="number"
                                label="Preço" />
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Textfield
                                value={data.quantity}
                                onChange={(e) => setData({ ...data, quantity: e.target.value })}
                                fullWidth={true}
                                material={true}
                                label="Quantidade" />
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Button onPress={save}>{params.id === "new" ? "Salvar" : "Editar"}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>;
} 

export default ProductForm;