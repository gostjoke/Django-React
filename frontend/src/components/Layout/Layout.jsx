import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import * as React from 'react';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles'; // 引入 createTheme 和 ThemeProvider
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import InventoryIcon from '@mui/icons-material/Inventory';
import MailIcon from '@mui/icons-material/Mail';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch'; // 引入 Switch 组件用于切换主题
import AppBar_comp from './AppBar_comp.jsx';

import WbSunnyIcon from '@mui/icons-material/WbSunny';  // 引入太阳图标
import Brightness2Icon from '@mui/icons-material/Brightness2';  // 引入月亮图标

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const [darkMode, setDarkMode] = useState(false); // 追踪当前的主题模式
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({}); // 使用对象来跟踪每个子菜单的展开状态

  // 创建 MUI 主题，基于当前的主题模式
  const customTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', // 根据 darkMode 切换 'light' 或 'dark'
    },
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenSubMenus({}); // 关闭 Drawer 时，重置所有子菜单的展开状态
  };

  const handleSubMenuClick = (menuText, e) => {
    e.stopPropagation(); // 防止点击子菜单时触发导航
    setOpenSubMenus((prev) => ({
      ...prev,
      [menuText]: !prev[menuText],
    }));
  };

  const handleMenuClick = (path) => {
    navigate(path);
  };

  const menuItems = [
    { text: 'Dashboard', path: '/Dashboard', children: ['Overview', 'Stats'] },
    { text: 'SCM', path: '/SCM', children: ['Overview', 'Price Reversal'] },
    { text: 'Send email', path: '/send-email' },
    { text: 'Drafts', path: '/drafts' },
  ];

  const ListIcon = [
    <InboxIcon />,
    <InventoryIcon />,
    <MailIcon />,
    <InboxIcon />,
  ];

  return (
    <ThemeProvider theme={customTheme}> {/* 使用 ThemeProvider 包裹组件 */}
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar_comp open={open} handleDrawerOpen={handleDrawerOpen} />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <img
              sx={{ position: 'relative ' }}
              src="../../public/img/logo.ico"
              alt="logo"
              width="40" // 设置合适的宽度
              height="40" // 设置合适的高度
            />
            <div style={{ flexGrow: 0.5 }}></div>
            <Typography variant="h6" noWrap component="div">
              Foxconn
            </Typography>
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)} >
              {darkMode ? <Brightness2Icon /> : <WbSunnyIcon />}
            </IconButton>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {/* 添加切换主题的开关 */}
          {/* <Toolbar>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)} // 切换主题模式
              color="secondary"
            />

          </Toolbar> */}
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <React.Fragment key={item.text}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={() => handleMenuClick(item.path)} // 点击菜单项进行导航
                    sx={[
                      { minHeight: 48, px: 2.5 },
                      open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        { minWidth: 0, justifyContent: 'center' },
                        open ? { mr: 3 } : { mr: 'auto' },
                      ]}
                    >
                      {ListIcon[index % ListIcon.length]}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                    />
                    {item.children && (
                      <IconButton
                        onClick={(e) => handleSubMenuClick(item.text, e)} // 控制子菜单展开/折叠
                        sx={{ padding: 0, marginLeft: 'auto' }}
                      >
                        {openSubMenus[item.text] ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    )}
                  </ListItemButton>
                  <Divider />
                </ListItem>
                {item.children && (
                  <Collapse in={openSubMenus[item.text] && open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((child) => (
                        <ListItemButton
                          key={child}
                          sx={[
                            { minHeight: 48, px: 2.5 },
                            open
                              ? { pl: 4 }
                              : { justifyContent: 'center', textAlign: 'center' },
                          ]}
                          component={Link}
                          to={`${item.path}/${child.toLowerCase()}`}
                        >
                          <ListItemText
                            primary={child}
                            sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );  
}
