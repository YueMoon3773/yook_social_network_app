import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import InfoBadge from '../../base/InfoBadge/InfoBadge';
import LogInRegisterLogo from '../../base/LogInRegisterLogo/LogInRegisterLogo';
import MainInp from '../../base/MainInp/MainInp';
import MainBtn from '../../base/MainBtn/MainBtn';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './UserLogInPage.scss';

const UserLogInPage = () => {
    const location = useLocation();
    const redirectedUnauthorized = location.state?.unauthorizedUsrToLogIn;
    console.log('redirect unauthorized: ', redirectedUnauthorized);

    const [badgeType, setBadgeType] = useState(location.state?.badgeType);
    const [badgeMsg, setBadgeMsg] = useState(location.state?.badgeMsg);

    console.log({ badgeType, badgeMsg });

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.title = 'Yook | Log in';
    }, []);

    const userNameOnChangeHandler = (e) => {
        setUserName(e.target.value);
    };

    const passwordOnChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className={`${pageBaseStyles.page} logInPage`}>
            {redirectedUnauthorized && (
                <InfoBadge showBadge={redirectedUnauthorized} badgeType={badgeType} badgeMsg={badgeMsg}></InfoBadge>
            )}

            <LogInRegisterLogo showSlogan={true}></LogInRegisterLogo>

            <form action="" method="post" className={`${pageBaseStyles.logInAndRegisterFormWrapper} logInForm`}>
                <MainInp
                    inpLabel={'User name*'}
                    inpId={'registerUserName'}
                    inpClass={'registerUserName'}
                    inpValue={userName}
                    onChangeHandler={userNameOnChangeHandler}
                ></MainInp>

                <MainInp
                    inpLabel={'Password*'}
                    inpId={'registerPassword'}
                    inpClass={'registerPassword'}
                    inpType={'password'}
                    inpValue={password}
                    onChangeHandler={passwordOnChangeHandler}
                ></MainInp>

                <div className="controllersWrapper">
                    <MainBtn isBtnPrimaryColor={true} btnClass={'registerSubmitBtn'} onClickHandler={() => {}}>
                        Log in
                    </MainBtn>

                    <Link to="/user/register">
                        Don't have any account?
                        <br />
                        Create one now!
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default UserLogInPage;
