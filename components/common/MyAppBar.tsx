import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import Link from "next/link";
import * as React from 'react';
import useSignin from '../../model/util-hooks/useSignin';
import useUser from '../../model/util-hooks/useUser';
import { HeaderTitleAtom } from '../../model/jotai/HeaderTitle';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
const MyAppBar = () => {
    const router = useRouter()
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
    const { goSignin } = useSignin()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const goToMyAccount = () => {
        router.push("/mypage")
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const renderSigninOrOutButton = () => {
        if (user) {
            //return <Button color="inherit" onClick={signOut}>Logout</Button>
            return <div>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={goToMyAccount}>My account</MenuItem>
                    <MenuItem onClick={signOut}>Logout</MenuItem>
                </Menu>
            </div>
        } else {
            return <Button color="inherit" onClick={goSignin}>Login</Button>
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