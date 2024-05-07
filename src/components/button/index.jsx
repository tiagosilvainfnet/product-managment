import { Button as ButtonNativeBase } from "native-base";
import { Button as ButtonMaterial } from '@mui/material';

const NewButton = (props) => {
    return props.material ? <ButtonMaterial {...props} variant="text">{props.text}</ButtonMaterial> : <ButtonNativeBase {...props}>{props.text}</ButtonNativeBase>
}

NewButton.defaultProps = {
    material: false,
    text: ""
}

export default NewButton;