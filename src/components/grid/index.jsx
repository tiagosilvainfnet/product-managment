import Grid from '@mui/material/Grid';

const DefaultGrid = (props) => {
    return (
        <Grid {...props}>
        {props.children}
        </Grid>
    );
}

export default DefaultGrid;