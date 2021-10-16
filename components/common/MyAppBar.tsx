import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { UserAtom } from '../../model/jotai/User';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
const MyAppBar = () => {
    const [user, _] = useAtom(UserAtom)
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
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Slide Share(仮)
                    </Typography>
                    {renderSigninOrOutButton()}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MyAppBar