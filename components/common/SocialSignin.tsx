import { Typography } from '@mui/material';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { FacebookLoginButton, GoogleLoginButton, } from "react-social-login-buttons";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
export default () => {


    return <>
        <Typography variant="h6" align="center">続行するにはログインしてください。</Typography>
        <GoogleLoginButton onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })} />
        <FacebookLoginButton onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook })} />

    </>
}