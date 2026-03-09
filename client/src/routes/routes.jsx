import App from '../App';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import UserProfilePage from '../components/pages/UserProfilePage/UserProfilePage';

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
];

export default routes;
