import { Fab } from '@mui/material';

const DefaultFab = (props) => {
    return  <Fab {...props}>
                {props.children}
            </Fab>
}

export default DefaultFab;