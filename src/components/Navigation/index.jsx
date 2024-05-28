import { useNavigate } from "react-router-dom";
import { logoutFirebase } from "../../utils/auth";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from "..";
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = (props) => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const logout = async () => {
        try{
            logoutFirebase(props.auth);
            window.localStorage.removeItem('user');
            navigate('/login');
        }catch(error){
            console.log(error);
        }
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
            {props.menus.map((menu, index) => (
            <ListItem key={`${menu.label}_${index}`} disablePadding>
                <ListItemButton onClick={() => navigate(menu.path)}>
                    <ListItemIcon>
                        <menu.icon />
                    </ListItemIcon>
                    <ListItemText primary={menu.label} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {[
                {label: 'Configurações', path: '/settings', icon: SettingsIcon},
                {label: 'Sair', path: null, method: logout, icon: LogoutIcon},
            ].map((menu, index) => (
                <ListItem key={`${menu.label}_${index}`} disablePadding>
                    <ListItemButton onClick={menu.path === null ? () => menu.method() : () => navigate(menu.path)}>
                        <ListItemIcon>
                            <menu.icon />
                        </ListItemIcon>
                        <ListItemText primary={menu.label} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        </Box>
    );

    return  <div>
                <Button
                    sx={{
                        height: '64px',
                        fontSize: '2em',
                        position: 'absolute',
                        right: '0',
                        top: '0',
                    }} 
                    material={true}
                    onClick={toggleDrawer(true)}>
                    <MenuIcon
                        sx={{
                            fontSize: '1em'
                        }}
                    />
                </Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </div>;
}   

export default Navigation;