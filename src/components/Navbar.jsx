import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled("div")(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>LAMA DEV</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, heigth: 30 }}
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQFRDtN99Y6rAA/profile-displayphoto-shrink_200_200/0/1633539326255?e=2147483647&v=beta&t=CBCHK3XIjiZlhWkKzWuQ60T3jg3Bn3OiralYyI6aUOQ"
                        onClick={e => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar
                        sx={{ width: 30, heigth: 30 }}
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQFRDtN99Y6rAA/profile-displayphoto-shrink_200_200/0/1633539326255?e=2147483647&v=beta&t=CBCHK3XIjiZlhWkKzWuQ60T3jg3Bn3OiralYyI6aUOQ"
                    />
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar