import { OpenCloseModalProvider } from '../hooks/useOpenCloseModal';

import App from '../App';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import UserProfilePage from '../components/pages/UserProfilePage/UserProfilePage';
import UserActivitiesPage from '../components/pages/UserActivitiesPage/UserActivitiesPage';

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
];

export default routes;
