import Dashboard from '../pages/Dashboard';
import ProtectedRoute from '../components/ProtectedRoute';

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
        <h1>Hi Stats</h1>
      </ProtectedRoute>
    ),
  },
];

export default dashboardRoutes;
