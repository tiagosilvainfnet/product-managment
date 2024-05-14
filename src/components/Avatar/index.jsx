import { Avatar as AvatarMaterial } from '@mui/material';

const AvatarDefault = (props) => {
  return <AvatarMaterial {...props}>{props.children}</AvatarMaterial>
}

export default AvatarDefault;