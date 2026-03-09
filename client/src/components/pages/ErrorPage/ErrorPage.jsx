import { Link } from 'react-router-dom';

import PageLayout from '../../layout/PageLayout/PageLayout';

import './ErrorPage.scss';

const ErrorPage = () => {
    return (
        <PageLayout>
            <div className="errorMsgsWrapper">
                <h1 className="errorMsg">Something isn't working. Please try again later.</h1>
                <span>
                    {'Go back to' + ' '}
                    <Link to="/">Home page</Link>
                </span>
            </div>
        </PageLayout>
    );
};

export default ErrorPage;
