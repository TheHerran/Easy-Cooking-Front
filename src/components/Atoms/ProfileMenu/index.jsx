import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import { Avatar, Button, Divider, Menu, MenuItem, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalThemeContext } from "../../../Providers/models/theme/theme";
import { UserContext } from "../../../Providers/models/user/user";
import { style } from "./style";
import jwt_decode from 'jwt-decode';




function ProfileMenu() {
    const { currentTheme } = useContext(GlobalThemeContext);
    const { logoutUser, token } = useContext(UserContext)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()
    const decodedUser = jwt_decode(token)

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null)

    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                currentTheme === "light" ? "#252525" : "#c3c3c3",
            backgroundColor:
                currentTheme === "light" ? "#c3c3c3" : "#252525",
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 22,
                    color: currentTheme === "light" ? "#252525" : "#c3c3c3",
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.grey[600],
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    }));

    return (
        <>
            <Button
                id="profileButton"
                aria-controls={open ? "profileMenu" : undefined}
                aria-haspopup="true"
                size="large"
                aria-expanded={open ? "true" : undefined}
                variant="text"
                disableElevation
                onClick={handleClick}
                sx={{color: currentTheme === "light" ? "#252525" : "#c3c3c3", ...style}}
                endIcon={<Avatar alt={decodedUser.username} src="/broken-image.jpg" />}
            >
                {decodedUser.username}
            </Button>

            <StyledMenu
                id="profileMenu"
                MenuListProps={{
                    "aria-labelledby": "profileButton",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => navigate("/")} >
                    <HomeOutlinedIcon />
                    Home
                </MenuItem>
                <MenuItem onClick={() => {}} >
                    <ManageAccountsOutlinedIcon />
                    Profile
                </MenuItem>
                <MenuItem onClick={() => navigate("/dashboard")} >
                    <SpaceDashboardOutlinedIcon />
                    Dashboard
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={() => logoutUser(navigate)} >
                    <LogoutOutlinedIcon />
                    Logout
                </MenuItem>
            </StyledMenu>
        </>
    )
}

export default ProfileMenu;