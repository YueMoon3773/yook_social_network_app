import { OpenCloseModalProvider } from '../hooks/useOpenCloseModal';
import { AuthenticateUserProvider } from '../hooks/useAuthenticate';
import { ShowBadgeProvider } from '../hooks/useShowBadge';

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
            <AuthenticateUserProvider>
                <OpenCloseModalProvider>
                    <ShowBadgeProvider>
                        <App />
                    </ShowBadgeProvider>
                </OpenCloseModalProvider>
            </AuthenticateUserProvider>
        ),
        errorElement: (
            <AuthenticateUserProvider>
                <ShowBadgeProvider>
                    <ErrorPage />
                </ShowBadgeProvider>
            </AuthenticateUserProvider>
        ),
    },
    {
        path: '/error',
        element: (
            <AuthenticateUserProvider>
                <ShowBadgeProvider>
                    <ErrorPage />
                </ShowBadgeProvider>
            </AuthenticateUserProvider>
        ),
        errorElement: (
            <AuthenticateUserProvider>
                <ShowBadgeProvider>
                    <ErrorPage />
                </ShowBadgeProvider>
            </AuthenticateUserProvider>
        ),
    },
    {
        path: '/user/register',
        element: <UserRegisterPage />,
        errorElement: (
            <AuthenticateUserProvider>
                <ShowBadgeProvider>
                    <ErrorPage />
                </ShowBadgeProvider>
            </AuthenticateUserProvider>
        ),
    },
    {
        path: '/user/log-in',
        element: (
            <AuthenticateUserProvider>
                <UserLogInPage />
            </AuthenticateUserProvider>
        ),
        errorElement: (
            <AuthenticateUserProvider>
                <ShowBadgeProvider>
                    <ErrorPage />
                </ShowBadgeProvider>
            </AuthenticateUserProvider>
        ),
    },
    {
        path: '/user/profile/:userName',
        element: (
            <AuthenticateUserProvider>
                <OpenCloseModalProvider>
                    <ShowBadgeProvider>
                        <UserProfilePage />
                    </ShowBadgeProvider>
                </OpenCloseModalProvider>
            </AuthenticateUserProvider>
        ),
        errorElement: (
            <AuthenticateUserProvider>
                <ShowBadgeProvider>
                    <ErrorPage />
                </ShowBadgeProvider>
            </AuthenticateUserProvider>
        ),
    },
    {
        path: '/user/activities/:userName',
        element: (
            <AuthenticateUserProvider>
                <ShowBadgeProvider>
                    <UserActivitiesPage />
                </ShowBadgeProvider>
            </AuthenticateUserProvider>
        ),
        errorElement: (
            <AuthenticateUserProvider>
                <ShowBadgeProvider>
                    <ErrorPage />
                </ShowBadgeProvider>
            </AuthenticateUserProvider>
        ),
    },
    {
        path: '/post',
        element: (
            <AuthenticateUserProvider>
                <ShowBadgeProvider>
                    <ViewPostPage />
                </ShowBadgeProvider>
            </AuthenticateUserProvider>
        ),
        errorElement: (
            <AuthenticateUserProvider>
                <ShowBadgeProvider>
                    <ErrorPage />
                </ShowBadgeProvider>
            </AuthenticateUserProvider>
        ),
    },
];

export default routes;
