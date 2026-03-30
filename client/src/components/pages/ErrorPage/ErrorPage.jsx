import { Link, useLocation } from 'react-router-dom';

import PageLayout from '../../layout/PageLayout/PageLayout';

import './ErrorPage.scss';

const ErrorPage = () => {
    const location = useLocation();
    const errorIssue = location.state?.errorIssue;
    const errorMsg = location.state?.errorMsg;

    return (
        <PageLayout>
            <div className="errorMsgsWrapper">
                <h1 className="errorMsg">
                    {errorIssue && errorMsg ? errorMsg : "Something isn't working. Please try again later."}
                </h1>
                <span>
                    {'Go back to' + ' '}
                    <Link to="/">Home page</Link>
                </span>
            </div>
        </PageLayout>
    );
};

export default ErrorPage;
