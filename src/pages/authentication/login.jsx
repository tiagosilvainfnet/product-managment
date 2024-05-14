import { Button, Avatar, Checkbox, Grid, Textfield } from "../../components";
import Logo from "../../assets/img/logo.svg";
import BackgroundLogin from "../../assets/img/wallpaper-login.jpg";
import { useEffect, useState } from "react";
import { loginFirebase, verifyLogin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        try{
            const response = await loginFirebase(props.auth, email, password);
            window.localStorage.setItem('user', JSON.stringify(response.user));
            navigate('/dashboard');
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        verifyLogin(navigate);
    }, []);

    return <Grid container={true} spacing={2} className="login-body" sx={{
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        marginTop: '0px',
        '@media (max-width: 899px)': {
            alignItems: 'start'
        }
    }}>
                <Grid 
                    sx={{
                        backgroundImage: `url(${BackgroundLogin})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        '@media (max-width: 899px)': {
                            display: 'none'
                        }
                    }}
                    item={true} xs={0} md={7} lg={8}>
                    
                </Grid>
                <Grid item={true} xs={12} md={5} lg={4}
                    sx={{
                        padding: '2em',
                        '@media (max-width: 899px)': {
                            backgroundImage: `url(${BackgroundLogin})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh',
                        }
                    }}
                >
                    <Grid container={true} spacing={2} sx={{
                        '@media (max-width: 899px)': {
                            background: 'rgba(0, 0, 0, 0.6)',
                            padding: '1.5em'
                        }
                    }}>
                        <Grid item={true} xs={12} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                '@media (max-width: 899px)': {
                                    padding: '1em'
                                }
                        }}>
                            <Avatar src={Logo} sx={{ width: 120, height: 120 }}/>
                        </Grid>
                        <Grid item={true} xs={12} sx={{
                                '@media (max-width: 899px)': {
                                    padding: '1em'
                                }
                        }}>
                            <Textfield placeholder="E-mail" value={email} type="email" onChange={(event) => {setEmail(event.target.value)}}/>
                        </Grid>
                        <Grid item={true} xs={12} sx={{
                                '@media (max-width: 899px)': {
                                    padding: '1em'
                                }
                        }}>
                            <Textfield placeholder="Password" type="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                        </Grid>
                        <Grid item={true} xs={12} sx={{
                                '@media (max-width: 899px)': {
                                    padding: '1em'
                                }
                        }}>
                            <Checkbox id="keep_logged" value="1" accessibilityLabel="Manter logado"></Checkbox>
                            <label for="keep_logged">Manter logado</label>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Button onPress={login}>Login</Button>
                        </Grid>
                    </Grid>
                </Grid>
                
           </Grid>
} 

export default Login;