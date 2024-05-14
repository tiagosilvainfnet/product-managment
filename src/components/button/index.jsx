import { Button as ButtonNativeBase } from "native-base";
import { Button as ButtonMaterial } from '@mui/material';

const DefaultButton = (props) => {
    return props.material ? <ButtonMaterial {...props}>{props.children}</ButtonMaterial> : <ButtonNativeBase {...props}>{props.children}</ButtonNativeBase>
}

DefaultButton.defaultProps = {
    material: false,
    text: ""
}

export default DefaultButton;