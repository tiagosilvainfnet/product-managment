import { useEffect, useState } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { Alert, Datagrid, Dialog, Fab, Grid, SearchBar } from "../../components";
import AddIcon from '@mui/icons-material/Add';
import { GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { deleteData, loadData } from "../../utils/database";
import { AlertTitle } from "@mui/material";

const ProductList = (props) => {
    const navigate = useNavigate();
    const [dialogOpen, dialogSetOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);	
    const [showAlert, setShowAlert] = useState(null);

    const edit = (id) => {
        navigate(`/products/${id}`);
    }

    const openDelete = (id) => {
        dialogSetOpen(true);
        setSelectedRow(id);
    }

    const deleteRow = () => {
        let alert = {}

        try{
            deleteData('products', selectedRow);
            setSelectedRow(null);
            load();
            alert = {
                title: "Sucesso",
                message: "Produto excluído com sucesso"
            }
        }catch(err){
            console.error(err);
            alert = {
                title: "Erro",
                message: `Erro ao excluir produto {err}`
            }
        }

        setShowAlert(alert);

        setTimeout(() => {
            setShowAlert(null);
        }, 3000);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Nome',
            width: 150,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Preço',
            width: 150,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Descrição',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'quantity',
            headerName: 'Quantidade',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        onClick={() => edit(id)}
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={() => openDelete(id)}
                    />
                ];
            }
        }];
    const [rows, setRows] = useState([]);

    const load = async () => {  
        const result = await loadData('products');
        setRows(result);
    }
    useEffect(() => {
        verifyLogin(navigate);
        load();
    }, []);

    useEffect(() => {
        props.setRoute(window.location.pathname)
    }, [])

    return  <>
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
                <Dialog 
                    onConfirm={deleteRow}
                    title={"Confirmação"}
                    text={"Deseja realmente excluir o produto?"}
                    open={dialogOpen} 
                    setOpen={dialogSetOpen}/>
                <Grid container={true}>
                    <Grid item={true} xs={1}></Grid>
                    <Grid item={true} xs={10}>
                        <SearchBar 
                            placeholder={"Buscar produtos"}    
                        />
                    </Grid>
                </Grid>
                <Grid 
                    sx={{
                        marginTop: 2
                    }}
                    container={true}>
                    <Grid item={true} xs={1}></Grid>
                    <Grid item={true} xs={10}>
                        <Datagrid 
                            columns={columns}
                            rows={rows ? rows : []}
                        />
                    </Grid>
                </Grid>
                <Fab 
                    sx={{
                        position: 'fixed',
                        right: '15px',
                        bottom: '15px'
                    }}
                    onClick={() => navigate('/products/new')}
                    color="primary" aria-label="add"
                    data-cy="e2e-button-add-product">
                    <AddIcon />       
                </Fab>
            </>    
            ;
} 

export default ProductList;