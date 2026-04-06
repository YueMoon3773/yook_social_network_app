import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    firstNameInpValidatorSchema,
    lastNameInpValidatorSchema,
    userNameInpValidatorSchema,
    passwordInpValidatorSchema,
    retypePasswordMissingErrorMsg,
    retypePasswordErrorMsg,
    isAdminInpValidatorSchema,
    adminSecretKeyMissingErrorMsg,
    adminSecretKeyErrorMsg,
} from '../../../utils/formInpsValidatorSchema';

import LogInRegisterLogo from '../../base/LogInRegisterLogo/LogInRegisterLogo';
import MainInp from '../../base/MainInp/MainInp';
import MainBtn from '../../base/MainBtn/MainBtn';
import RoundToggleButton from '../../base/RoundToggleButton/RoundToggleButton';
import ErrorBox from '../../base/ErrorBox/ErrorBox';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './UserRegisterPage.scss';

const defaultAdminSecretKey = import.meta.env.VITE_ADMIN_SECRET_PASSWORD;
const baseBeURL = import.meta.env.VITE_API_BASE_URL;

const UserRegisterPage = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminSecretKey, setAdminSecretKey] = useState('');

    const [inpErrors, setInpErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        document.title = 'Yook | Register';
    }, []);

    const firstNameOnChangeHandler = (e) => {
        setFirstName(e.target.value);
    };

    const lastNameOnChangeHandler = (e) => {
        setLastName(e.target.value);
    };

    const userNameOnChangeHandler = (e) => {
        setUserName(e.target.value);
    };

    const passwordOnChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const retypePasswordOnChangeHandler = (e) => {
        setRetypePassword(e.target.value);
    };

    const adminSecretKeyOnChangeHandler = (e) => {
        setAdminSecretKey(e.target.value);
    };

    const registerBtnOnClickHandler = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSubmitting(true);

        try {
            let firstNameErrors = [];
            let lastNameErrors = [];
            let userNameErrors = [];
            let pwdErrors = [];
            let otherErrors = [];

            const firstNameErr = firstNameInpValidatorSchema.safeParse(firstName);
            const lastNameErr = lastNameInpValidatorSchema.safeParse(lastName);
            const userNameErr = userNameInpValidatorSchema.safeParse(userName);
            const pwdErr = passwordInpValidatorSchema.safeParse(password);
            const isAdminErr = isAdminInpValidatorSchema.safeParse(isAdmin);

            if (firstNameErr.success === false) {
                firstNameErrors = firstNameErr.error.issues.map((item) => item.message);
            }
            if (lastNameErr.success === false) {
                lastNameErrors = lastNameErr.error.issues.map((item) => item.message);
            }
            if (userNameErr.success === false) {
                userNameErrors = userNameErr.error.issues.map((item) => item.message);
            }
            if (pwdErr.success === false) {
                setPassword('');
                setRetypePassword('');
                pwdErrors = pwdErr.error.issues.map((item) => item.message);
            }

            if (retypePassword === '') {
                setPassword('');
                setRetypePassword('');
                if (!otherErrors.includes(retypePasswordMissingErrorMsg)) {
                    otherErrors.push(retypePasswordMissingErrorMsg);
                }
            } else if (retypePassword !== '') {
                if (otherErrors.includes(retypePasswordMissingErrorMsg)) {
                    const targetIndex = otherErrors.indexOf(retypePasswordMissingErrorMsg);
                    otherErrors.splice(targetIndex, 1);
                }

                if (password !== retypePassword) {
                    setPassword('');
                    setRetypePassword('');
                    if (!otherErrors.includes(retypePasswordErrorMsg)) {
                        otherErrors.push(retypePasswordErrorMsg);
                    }
                } else if (password === retypePassword) {
                    if (otherErrors.includes(retypePasswordErrorMsg)) {
                        const targetIndex = otherErrors.indexOf(retypePasswordErrorMsg);
                        otherErrors.splice(targetIndex, 1);
                    }
                }
            }

            if (isAdminErr.success === false) {
                setIsAdmin(false);
            }

            if (isAdmin === true) {
                if (adminSecretKey === '') {
                    if (!otherErrors.includes(adminSecretKeyMissingErrorMsg)) {
                        otherErrors.push(adminSecretKeyMissingErrorMsg);
                    }
                } else if (adminSecretKey !== '') {
                    if (otherErrors.includes(adminSecretKeyMissingErrorMsg)) {
                        const targetIndex = otherErrors.indexOf(adminSecretKeyMissingErrorMsg);
                        otherErrors.splice(targetIndex, 1);
                    }

                    if (adminSecretKey !== defaultAdminSecretKey) {
                        if (!otherErrors.includes(adminSecretKeyErrorMsg)) {
                            otherErrors.push(adminSecretKeyErrorMsg);
                        }
                        setAdminSecretKey('');
                    } else if (adminSecretKey === defaultAdminSecretKey) {
                        if (otherErrors.includes(adminSecretKeyErrorMsg)) {
                            const targetIndex = otherErrors.indexOf(adminSecretKeyErrorMsg);
                            otherErrors.splice(targetIndex, 1);
                        }
                    }
                }
            }
            // console.log({
            //     firstNameErrors,
            //     lastNameErrors,
            //     userNameErrors,
            //     pwdErrors,
            //     otherErrors,
            // });

            setInpErrors({
                firstNameErrors,
                lastNameErrors,
                userNameErrors,
                pwdErrors,
                otherErrors,
            });

            if (
                firstNameErrors.length > 0 ||
                lastNameErrors.length > 0 ||
                userNameErrors.length > 0 ||
                pwdErrors.length > 0 ||
                otherErrors.length > 0
            ) {
                setIsSubmitting(false);
                return;
            } else {
                let errors = [];
                const res = await fetch(`${baseBeURL}/user/register`, {
                    mode: 'cors',
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ firstName, lastName, userName, pwd: password, isAdmin }),
                });

                const data = await res.json();
                // console.log({ data });

                if (data.ok === false) {
                    errors.push(data.msg);
                    // console.log({ errors });

                    setInpErrors({ errors });
                    setIsSubmitting(false);
                } else {
                    setIsSubmitting(false);
                    navigate('/user/log-in', {
                        state: {
                            unAuthorizedUsrToLogIn: true,
                            badgeType: 'info',
                            badgeMsg: 'Account created successfully. Please log in to your account.',
                        },
                    });
                }
            }
            setIsSubmitting(false);
        } catch (err) {
            setIsSubmitting(false);
            console.log({ err });
        }
    };

    return (
        <div className={`${pageBaseStyles.page} registerPage`}>
            <LogInRegisterLogo showSlogan={false}></LogInRegisterLogo>

            <form action="" method="post" className={`${pageBaseStyles.logInAndRegisterFormWrapper} registerForm`}>
                {Object.keys(inpErrors).length > 0 &&
                    (inpErrors.firstNameErrors?.length > 0 ||
                        inpErrors.lastNameErrors?.length > 0 ||
                        inpErrors.userNameErrors?.length > 0 ||
                        inpErrors.pwdErrors?.length > 0 ||
                        inpErrors.otherErrors?.length > 0 ||
                        inpErrors.errors?.length > 0) && <ErrorBox errors={inpErrors}></ErrorBox>}

                <div className="firstLastNameWrapper">
                    <MainInp
                        inpLabel={'First name*'}
                        inpId={'registerFirstName'}
                        inpClass={'registerFirstName'}
                        inpValue={firstName}
                        onChangeHandler={firstNameOnChangeHandler}
                    ></MainInp>
                    <MainInp
                        inpLabel={'Last name*'}
                        inpId={'registerLastName'}
                        inpClass={'registerLastName'}
                        inpValue={lastName}
                        onChangeHandler={lastNameOnChangeHandler}
                    ></MainInp>
                </div>

                <div className="inpAndHelperTextWrapper">
                    <MainInp
                        inpLabel={'User name*'}
                        inpId={'registerUserName'}
                        inpClass={'registerUserName'}
                        inpValue={userName}
                        onChangeHandler={userNameOnChangeHandler}
                    ></MainInp>
                    <p className="helperText">
                        * Must be 3-16 characters long and contain only letters, numbers and underscore.
                    </p>
                </div>

                <div className="inpAndHelperTextWrapper">
                    <MainInp
                        inpLabel={'Password*'}
                        inpId={'registerPassword'}
                        inpClass={'registerPassword'}
                        inpType={'password'}
                        inpValue={password}
                        onChangeHandler={passwordOnChangeHandler}
                    ></MainInp>
                    <p className="helperText">
                        * Must be 8–32 characters long, including at least one uppercase, one lowercase, a number, and a
                        symbol.
                    </p>
                </div>

                <MainInp
                    inpLabel={'Retype your password*'}
                    inpId={'registerRetypePassword'}
                    inpClass={'registerRetypePassword'}
                    inpType={'password'}
                    inpValue={retypePassword}
                    onChangeHandler={retypePasswordOnChangeHandler}
                ></MainInp>

                <div className="isAdminInpsWrapper">
                    <RoundToggleButton
                        showToggleLabel={true}
                        toggleBtnLabel={'Are you an admin?'}
                        toggleBtnId={'isAdminToggleBtn'}
                        onClickHandler={() =>
                            setIsAdmin((prev) => {
                                if (prev) setAdminSecretKey('');
                                return !prev;
                            })
                        }
                    ></RoundToggleButton>

                    <div className="inpAndHelperTextWrapper">
                        <MainInp
                            inpLabel={'Admin secret key*'}
                            inpId={'registerAdminSecretKey'}
                            inpClass={'registerAdminSecretKey'}
                            inpType={'password'}
                            inpValue={adminSecretKey}
                            onChangeHandler={adminSecretKeyOnChangeHandler}
                            isDisabled={!isAdmin}
                        ></MainInp>
                        <p className="helperText">* Hint: secret key starts with "Yue".</p>
                    </div>
                </div>

                <div className="controllersWrapper">
                    <MainBtn
                        isBtnPrimaryColor={true}
                        isBtnLoading={isSubmitting}
                        btnClass={'registerSubmitBtn'}
                        onClickHandler={registerBtnOnClickHandler}
                    >
                        Create account
                    </MainBtn>

                    <Link to="/user/log-in">Already have an account? Log in now!</Link>
                </div>
            </form>
        </div>
    );
};

export default UserRegisterPage;
