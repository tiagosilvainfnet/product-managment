import { Alert } from '@mui/material';

const DefaultAlert = (props) => {
  return (
    <Alert {...props}>
        {props.children}
    </Alert>
  );
}

export default DefaultAlert;