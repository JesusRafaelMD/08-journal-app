import {Grid, Typography} from '@mui/material'
import { StarOutline } from '@mui/icons-material'

export const NothingSelectedView = () => {
  return (
    <>
        <Grid
            container
            space={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius:3 }}
        >
            <Grid item sx={12}>
                <StarOutline sx={{ fontSize: 100, color:'white'}}/>
            </Grid>
            <Grid item sx={12}>
                <Typography color='white' variant='h5'>Lorem ipsum dolor sit </Typography>
            </Grid>
        </Grid>
    </>
  )
}
