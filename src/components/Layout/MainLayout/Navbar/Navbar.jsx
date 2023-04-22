import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
// custom

import Logo from "../../../../assets/logo.svg";
import Mail from "../../../../assets/navassets/solar_letter-bold.svg";
import Profile from "../../../../assets/profile.svg";
import PetHand from "../../../../assets/navassets/solar_letter-bold-1.svg";
import SearchCat from "../../../../assets/search-cat.svg";
import Filter from "../../../../assets/filter.svg";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #1D1D1D",
  borderRadius: "30px",
  boxShadow: "0px 0px 10px grey",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  height: "2.5rem",
  width: "40vw",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "40vw",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  // position: "absolute",
  pointerEvents: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  // justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create("width"),
    width: "24vw",
    [theme.breakpoints.up("md")]: {
      width: "30vw",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate("");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      /*open={isMenuOpen}
      onClose={handleMenuClose}*/
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="error">
            <img src={Mail} alt="" />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit">
          <Badge badgeContent={0} color="error">
            {/* <div className="w-2 h-2 bg-orange-400 rounded-full "> */}
            <img className="  " src={PetHand} alt="" />
            {/* </div> */}
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <img src={Profile} alt="" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className="container mx-auto p-4">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ border: "none", boxShadow: "none" }}
          className="bg-inherit"
          color=""
          position="static">
          <Toolbar>
            {/* <Typography
            variant="h6"
            noWrap
            component="div"
          sx={{ display: { xs: "none", sm: "block" } }}> */}
            <img
              src={Logo}
              alt=""
              className="w-[15vmax]"
              onClick={() => navigate("/")}
            />
            {/* </Typography> */}
            <Box sx={{ flexGrow: 1 }} />
            <Search>
              <SearchIconWrapper>
                <img src={SearchCat} alt="" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Бульдог белый…"
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIconWrapper>
                <img
                  // className="flex self-end w-4 h-4 cursor-pointer"
                  src={Filter}
                  alt=""
                />
              </SearchIconWrapper>
            </Search>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}>
              <IconButton size="large" aria-label="show 4 new mails">
                {/* <Badge badgeContent={0} color="error"> */}
                <img src={Mail} alt="" />
                {/* </Badge> */}
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit">
                {/* <Badge badgeContent={0} color="error"> */}
                {/* <div className="w-9 h-9 bg-orange-400 rounded-full "> */}
                <img className="mx-auto" src={PetHand} alt="" />
                {/* </div> */}
                {/* </Badge> */}
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit">
                <img src={Profile} alt="" />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  );
}
