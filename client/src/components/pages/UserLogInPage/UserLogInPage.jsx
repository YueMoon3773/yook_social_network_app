import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { userNameInpSchema, passwordInpSchema } from '../../../utils/formInpsSchema';

import InfoBadge from '../../base/InfoBadge/InfoBadge';
import LogInRegisterLogo from '../../base/LogInRegisterLogo/LogInRegisterLogo';
import LogInAndRegisterErrorBox from '../../base/ErrorBox/ErrorBox';
import MainInp from '../../base/MainInp/MainInp';
import MainBtn from '../../base/MainBtn/MainBtn';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './UserLogInPage.scss';

const baseBeURL = import.meta.env.VITE_API_BASE_URL;

const UserLogInPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectedUnauthorized = location.state?.unAuthorizedUsrToLogIn;
    // console.log('redirect unauthorized: ', redirectedUnauthorized);

    const [badgeType, setBadgeType] = useState(location.state?.badgeType);
    const [badgeMsg, setBadgeMsg] = useState(location.state?.badgeMsg);
    // console.log({ badgeType, badgeMsg });

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [inpErrors, setInpErrors] = useState({});

    useEffect(() => {
        document.title = 'Yook | Log in';
    }, []);

    const userNameOnChangeHandler = (e) => {
        setUserName(e.target.value);
    };

    const passwordOnChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const logInBtnOnClickHandler = async (e) => {
        e.preventDefault();

        try {
            let userNameErrors = [];
            let pwdErrors = [];
            const userNameErr = userNameInpSchema.safeParse(userName);
            const pwdErr = passwordInpSchema.safeParse(password);

            if (userNameErr.success === false) {
                userNameErrors = userNameErr.error.issues.map((item) => item.message);
            }
            if (pwdErr.success === false) {
                setPassword('');
                pwdErrors = pwdErr.error.issues.map((item) => item.message);
            }

            // console.log({ userNameErr, pwdErr });
            // console.log({ userNameErrors, pwdErrors });

            setInpErrors({
                userNameErrors,
                pwdErrors,
            });

            if (userNameErrors.length === 0 && pwdErrors.length === 0) {
                const res = await fetch(`${baseBeURL}/user/log-in`, {
                    mode: 'cors',
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({ userName: userName, pwd: password }),
                });

                const data = await res.json();
                console.log({ data });

                if (!data.ok) {
                    setInpErrors({ errors: [data.err[0]?.msg] });
                } else {
                    navigate('/');
                }
            }
        } catch (err) {
            console.log('err: ', err);
        }
    };

    return (
        <div className={`${pageBaseStyles.page} logInPage`}>
            {redirectedUnauthorized && (
                <InfoBadge showBadge={redirectedUnauthorized} badgeType={badgeType} badgeMsg={badgeMsg}></InfoBadge>
            )}

            <LogInRegisterLogo showSlogan={true}></LogInRegisterLogo>

            <form action="" method="post" className={`${pageBaseStyles.logInAndRegisterFormWrapper} logInForm`}>
                {Object.keys(inpErrors).length > 0 &&
                    (inpErrors.userNameErrors?.length > 0 ||
                        inpErrors.pwdErrors?.length > 0 ||
                        inpErrors.errors?.length > 0) && (
                        <LogInAndRegisterErrorBox errors={inpErrors}></LogInAndRegisterErrorBox>
                    )}
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
                    <MainBtn
                        isBtnPrimaryColor={true}
                        btnClass={'registerSubmitBtn'}
                        onClickHandler={logInBtnOnClickHandler}
                    >
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
