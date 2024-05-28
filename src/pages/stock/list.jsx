import { useEffect, useState } from "react";
import { verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { Datagrid, Grid, SearchBar } from "../../components";

const StockList = (props) => {
    const navigate = useNavigate();
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        }];
    const [rows, setRows] = useState([
                                    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
                                    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
                                    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
                                    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
                                    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
                                    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
                                    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
                                    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
                                    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
                                    ]);

    useEffect(() => {
        verifyLogin(navigate);
    }, []);

    useEffect(() => {
        props.setRoute(window.location.pathname)
    }, [])

    return  <>    
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={1}></Grid>
                    <Grid item={true} xs={10}>
                        <SearchBar
                            placeholder={"Buscar produtos no estoque"}    
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
                            rows={rows}
                        />
                    </Grid>
                </Grid>
            </>;
} 

export default StockList;