import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAuthenticate } from '../../../hooks/useAuthenticate';
import { userNameInpValidatorSchema, passwordInpValidatorSchema } from '../../../utils/formInpsValidatorSchema';

import InfoBadge from '../../base/InfoBadge/InfoBadge';
import LogInRegisterLogo from '../../base/LogInRegisterLogo/LogInRegisterLogo';
import ErrorBox from '../../base/ErrorBox/ErrorBox';
import MainInp from '../../base/MainInp/MainInp';
import MainBtn from '../../base/MainBtn/MainBtn';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './UserLogInPage.scss';

// const baseBeURL = import.meta.env.VITE_API_BASE_URL;

const UserLogInPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectedUnauthorized = location.state?.unAuthorizedUsrToLogIn;
    // console.log('redirect unauthorized: ', redirectedUnauthorized);
    const { logIn } = useAuthenticate();

    const [badgeType, setBadgeType] = useState(location.state?.badgeType);
    const [badgeMsg, setBadgeMsg] = useState(location.state?.badgeMsg);
    // console.log({ badgeType, badgeMsg });

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [inpErrors, setInpErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        e.stopPropagation();
        setIsSubmitting(true);

        try {
            let userNameErrors = [];
            let pwdErrors = [];
            let errors = [];

            const userNameErr = userNameInpValidatorSchema.safeParse(userName);
            const pwdErr = passwordInpValidatorSchema.safeParse(password);

            if (userNameErr.success === false) {
                userNameErrors = userNameErr.error.issues.map((item) => item.message);
            }
            if (pwdErr.success === false) {
                setPassword('');
                pwdErrors = pwdErr.error.issues.map((item) => item.message);
            }

            // console.log({ userNameErr, pwdErr });
            console.log({ userNameErrors, pwdErrors });

            setInpErrors({
                userNameErrors,
                pwdErrors,
            });

            if (userNameErrors.length === 0 && pwdErrors.length === 0) {
                console.log({ userName, password });

                const data = await logIn(userName, password);
                console.log({ data });

                if (!data.ok) {
                    errors.push(data.err[0]?.msg);
                    console.log({ errors });

                    setInpErrors({ errors });
                    setIsSubmitting(false);
                } else {
                    setIsSubmitting(false);
                    navigate('/');
                }
            } else {
                setIsSubmitting(false);
                return;
            }
        } catch (err) {
            setIsSubmitting(false);
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
                        inpErrors.errors?.length > 0) && <ErrorBox errors={inpErrors}></ErrorBox>}
                
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
                        isBtnLoading={isSubmitting}
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
