import { Box, Drawer, Divider, Toolbar, Typography, Grid,  List, ListItemText,  ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import { TurnedInNot } from '@mui/icons-material'
export const SideBar = ( {drawerWidth = 340}) => {
  return (
    <Box 
        component = 'nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm:0 }}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display:{xs:'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Rafael Medina</Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Hola'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  ) 
}
