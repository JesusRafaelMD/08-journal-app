// import { Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'


export const JournalPage = () => {
  return (
    
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae debitis minus amet sapiente dignissimos sunt nulla expedita iste enim? Dicta sunt beatae architecto distinctio cum excepturi commodi ad. Sint!</Typography> */}
      {/* <NothingSelectedView/> */}
      <NoteView/>

      <IconButton 
        size='large'
        sx= {{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity:0.9},
          position: 'fixed',
          right: 50,
          bottom:50
        }}
      >
        <AddOutlined sx={{ fontSize:30 }}/>
      </IconButton>
    
    </JournalLayout>
  )
}
