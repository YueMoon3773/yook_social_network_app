import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogInRegisterLogo from '../../base/LogInRegisterLogo/LogInRegisterLogo';
import MainInp from '../../base/MainInp/MainInp';
import MainBtn from '../../base/MainBtn/MainBtn';
import RoundToggleButton from '../../base/RoundToggleButton/RoundToggleButton';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './UserRegisterPage.scss';

const UserRegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminSecretKey, setAdminSecretKey] = useState('');

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

    return (
        <div className={`${pageBaseStyles.page} registerPage`}>
            <LogInRegisterLogo showSlogan={false}></LogInRegisterLogo>

            <form action="" method="post" className={`${pageBaseStyles.logInAndRegisterFormWrapper} registerForm`}>
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
                    <MainBtn isBtnPrimaryColor={true} btnClass={'registerSubmitBtn'} onClickHandler={() => {}}>
                        Create account
                    </MainBtn>

                    <Link to="/user/log-in">Already have an account? Log in now!</Link>
                </div>
            </form>
        </div>
    );
};

export default UserRegisterPage;
