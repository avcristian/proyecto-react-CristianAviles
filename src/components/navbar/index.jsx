import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const NavBar = () => {
    return(
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
        <Toolbar sx= {{bgcolor: '#ff681c'}}>
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
            Frany Burger
        </Typography>
        <Badge badgeContent={4} color="error">
            <ShoppingCartIcon/>
        </Badge>
        </Toolbar>
        </AppBar>
    </Box>
    );
}

export default NavBar;