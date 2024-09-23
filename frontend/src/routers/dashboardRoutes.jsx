import Dashboard from '../pages/Dashboard';
import ProtectedRoute from '../components/ProtectedRoute';
import Tab_t from '../pages/Tab_t'

const dashboardRoutes = [
  {
    path: '/Dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/Dashboard/Overview',
    element: (
      <ProtectedRoute>
        <h1>Hi OverView</h1>
      </ProtectedRoute>
    ),
  },
  {
    path: '/Dashboard/Stats',
    element: (
      <ProtectedRoute>
        <Tab_t/>
      </ProtectedRoute>
    ),
  },
];

export default dashboardRoutes;
