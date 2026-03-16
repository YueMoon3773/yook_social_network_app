import { OpenCloseModalProvider } from '../hooks/useOpenCloseModal';

import App from '../App';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import UserProfilePage from '../components/pages/UserProfilePage/UserProfilePage';
import UserActivitiesPage from '../components/pages/UserActivitiesPage/UserActivitiesPage';
import ViewPostPage from '../components/pages/ViewPostPage/ViewPostPage';
import UserRegisterPage from '../components/pages/UserRegisterPage/UserRegisterPage';
import UserLogInPage from '../components/pages/UserLogInPage/UserLogInPage';

const routes = [
    {
        path: '/',
        element: (
            <OpenCloseModalProvider>
                <App />
            </OpenCloseModalProvider>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/user/register',
        element: <UserRegisterPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/user/log-in',
        element: <UserLogInPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/user/profile',
        element: (
            <OpenCloseModalProvider>
                <UserProfilePage />
            </OpenCloseModalProvider>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/user/activities',
        element: <UserActivitiesPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/post',
        element: <ViewPostPage />,
        errorElement: <ErrorPage />,
    },
];

export default routes;
