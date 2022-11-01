import { Avatar, Box, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import styled from '@emotion/styled'
import { Stack } from '@mui/system'

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
    const [open,setOpen] = useState(false)

    return (
        <>
            <Tooltip 
                onClick={(e)=>setOpen(true)}
                title="Delete" 
                sx={{ 
                    position: "fixed", 
                    bottom: 20, 
                    left: { xs: "calc(50% - 25px)", md: 30 } 
                }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e)=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        width: 400,
                        height: 280,
                        padding: 5,
                        backgroundColor: 'white',
                        /*'&:hover': {
                        backgroundColor: 'white',
                        opacity: [0.9, 0.8, 0.7],
                        },*/
                        borderRadius: 5
                    }}
                >
                    <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar 
                            src="https://material-ui.com/static/images/avatar/3.jpg"
                            sx={{ width: 30, height: 30}}
                        />
                        <Typography fontWeight={500} variant="span">Jonh Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{width: "100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="What's on your mind"
                        variant="standard"
                    />
                    <Stack direction={"row"} gap={1}>
                        <EmojiEmotions color="primary"/>
                        <Image color='secondary'/>
                        <VideoCameraBack color='success'/>
                        <PersonAdd color='error'/>
                    </Stack>
                    <ButtonGroup 
                        fullWidth
                        variant='contained' 
                        aria-label='outlined primaru button group'>
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>
                            <DateRange/> 
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add