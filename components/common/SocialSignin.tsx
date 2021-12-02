import { Typography } from '@mui/material';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { FacebookLoginButton, GoogleLoginButton, } from "react-social-login-buttons";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { useRouter } from 'next/dist/client/router';
import useSignin from '../../model/util-hooks/useSignin';
export default () => {
    const { url } = useSignin()

    return <>
        <Typography variant="h6" align="center">続行するにはログインしてください。</Typography>
        <GoogleLoginButton onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google, customState: url })} />
        <FacebookLoginButton onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook, customState: url })} />
    </>
}