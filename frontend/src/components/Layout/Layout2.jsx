import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'Dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'logout',
    title: 'Logout',
    icon: <LogoutIcon />,
    action: 'signOut', // 在這裡設置登出動作為 'signOut'
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent() {
  const location = useLocation(); // 使用useLocation獲取當前路徑

  return (
    <Box sx={{ margin: 5 }}>
      <Typography>Dashboard content for {location.pathname}</Typography> {/* 顯示當前路徑 */}
      <Outlet />
    </Box>
  );
}

function DashboardLayoutBasic(props) {
  const { window } = props;
  const navigate = useNavigate();

  // 處理登出邏輯
  const handleLogout = () => {
    // 清除本地的 session 資訊
    localStorage.clear();
    // 導航到 login 頁面
    navigate('/login');
  };

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION} // 使用靜態的 NAVIGATION
      authentication={{
        signOut: handleLogout, // 綁定登出邏輯，確保登出後清除 localStorage 並導航
      }}
      theme={demoTheme} // 這是你現有的主題
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
