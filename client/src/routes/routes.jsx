import App from '../App';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import UserProfilePage from '../components/pages/UserProfilePage/UserProfilePage';
import UserActivitiesPage from '../components/pages/UserActivitiesPage/UserActivitiesPage';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/user/profile',
        element: <UserProfilePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/user/activities',
        element: <UserActivitiesPage />,
        errorElement: <ErrorPage />,
    },
];

export default routes;
