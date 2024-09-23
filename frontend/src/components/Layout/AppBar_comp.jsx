import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Link  } from 'react-router-dom';  // 引入useNavigate
import TimeClock from './TimeClock'

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBar_comp({ open, handleDrawerOpen }) {
  const navigate = useNavigate();  // 创建navigate实例

  const handleLogout = () => {
    localStorage.clear();  // 清除localStorage中的信息
    navigate('/login');  // 跳转到登录页面
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            { marginRight: 5 },
            open && { display: 'none' },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" noWrap component="div">
            NSG Technology INC.
          </Typography>
        </Link>
        <div style={{ flexGrow: 1 }}></div>
        <Typography variant="h6" noWrap component="div">
          We make a Better Future!
        </Typography>
        <div style={{ flexGrow: 1 }}></div>
        <TimeClock/>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
          {localStorage.getItem('user')}
        </Button>
        <Button onClick={handleLogout} color="inherit" sx={{ justifyContent: "flex-start" }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
