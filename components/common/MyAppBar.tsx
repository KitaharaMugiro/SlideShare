import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import Link from "next/link";
import * as React from 'react';
import useUser from '../../model/hooks/useUser';
import { HeaderTitleAtom } from '../../model/jotai/HeaderTitle';
const MyAppBar = () => {
    const { user } = useUser()
    const [headerTitle] = useAtom(HeaderTitleAtom)
    const signOut = async () => {
        try {
            await Auth.signOut();
            window.location.href = "/"
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }


    const renderSigninOrOutButton = () => {
        if (user) {
            return <Button color="inherit" onClick={signOut}>Logout</Button>
        } else {
            return <Button color="inherit" href="/signin">Login</Button>
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                color="inherit"
                position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/">{headerTitle}</Link>
                    </Typography>
                    {renderSigninOrOutButton()}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MyAppBar