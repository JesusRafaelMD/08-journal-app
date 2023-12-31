import { AppBar, Toolbar, IconButton, Grid,Typography } from '@mui/material'
import { MenuOutlined, LogoutOutlined} from '@mui/icons-material';

export const NavBar = ({drawerWidth = 240}) => {
  return (
    <AppBar
        position='fixed'
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)`},
            ml: { sm: `${drawerWidth}px`}
        }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge='start'
                sx={{ mr: 2, display:{sm:'none'}}}
                >
                <MenuOutlined/>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between'>
                <Typography variant='h6' noWrap component='div' alignItems='center'> JournalApp </Typography>
                <IconButton color='error'>
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
