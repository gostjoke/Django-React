import ScmDashboard from '../pages/SCM/ScmDashboard'
import ProtectedRoute from '../components/ProtectedRoute';

const ScmRouters = [
    {
        path: '/SCM',
        element: (
            <ProtectedRoute>
                <ScmDashboard />
            </ProtectedRoute>
        ),
    },
]

export default ScmRouters;