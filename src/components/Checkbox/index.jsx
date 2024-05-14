import { Checkbox as CheckboxMaterial } from "native-base";
import { Checkbox  as CheckboxNativeBase } from '@mui/material';

const CheckboxDefault = (props) => {
    return props.material ? <CheckboxMaterial {...props}>{props.children}</CheckboxMaterial> : <CheckboxNativeBase {...props}>{props.children}</CheckboxNativeBase>
}

export default CheckboxDefault;