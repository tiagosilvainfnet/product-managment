import { Button, Avatar, Checkbox, Grid, Textfield, Alert } from "../../components";
import Logo from "../../assets/img/logo.svg";
import BackgroundLogin from "../../assets/img/wallpaper-login.jpg";
import { useEffect, useState } from "react";
import { recoveryPasswordFirebase, verifyLogin } from "../../utils/auth";
import { Link, useNavigate } from "react-router-dom";

const RecoveryPassword = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({message: '', type: ''});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        props.setRoute(window.location.pathname)
    }, [])

    const recoveryPassword = async () => {
        setIsLoading(true);
        try{
            const response = await recoveryPasswordFirebase(props.auth, email);
            setAlert({message: 'E-mail de reset enviado com sucesso.', severity: 'success'});
        }catch(error){
            setAlert({message: error.toString(), severity: 'error'});
        }

        setIsLoading(false);
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
                        {
                            alert.message !== ''
                            ?   <Grid item={true} xs={12} sx={{
                                        '@media (max-width: 899px)': {
                                            padding: '1em'
                                        }
                                }}>
                                    <Alert severity={alert.severity}>{alert.message}</Alert>
                                </Grid>
                            : null
                        }
                        <Grid item={true} xs={12}>
                            <Button isLoading={isLoading} isLoadingText="Carregando..." disabled={isLoading} onPress={recoveryPassword}>Recuperar senha</Button>
                        </Grid>
                        <Grid 
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                '@media (max-width: 899px)': {
                                    padding: '1em'
                                }
                            }}
                            item={true} xs={12}>
                            <Link
                                style={{
                                    color: '#000',
                                    textDecoration: 'none'
                                }}
                                to="/login">Entrar</Link>
                        </Grid>
                    </Grid>
                </Grid>
                
           </Grid>
} 

export default RecoveryPassword;