import { Input as TextFieldNativeBase } from "native-base";
import { TextField  as TextFieldMaterial } from '@mui/material';

const DefaultTextField = (props) => {
    return props.material ? <TextFieldMaterial {...props}/> : <TextFieldNativeBase {...props} />
}

DefaultTextField.defaultProps = {
    material: false,
    text: ""
}

export default DefaultTextField;