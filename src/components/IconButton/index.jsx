import { IconButton } from '@mui/material';

const DefaultIconButton = (props) => {
    return  <IconButton {...props}>
                {props.children}
            </IconButton>

}

export default DefaultIconButton;