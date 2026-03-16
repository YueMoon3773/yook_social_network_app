import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogInRegisterLogo from '../../base/LogInRegisterLogo/LogInRegisterLogo';
import MainInp from '../../base/MainInp/MainInp';
import MainBtn from '../../base/MainBtn/MainBtn';
import RoundToggleButton from '../../base/RoundToggleButton/RoundToggleButton';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './UserRegisterPage.scss';

const UserRegisterPage = () => {
    const [secretKeyInpDisabled, setSecretKeyInpDisabled] = useState(true);

    useEffect(() => {
        document.title = 'Yook | Register';
    }, []);

    return (
        <div className={`${pageBaseStyles.page} registerPage`}>
            <LogInRegisterLogo showSlogan={false}></LogInRegisterLogo>

            <form action="" method="post" className={`${pageBaseStyles.logInAndRegisterFormWrapper} registerForm`}>
                <div className="firstLastNameWrapper">
                    <MainInp
                        inpLabel={'First name*'}
                        inpId={'registerFirstName'}
                        inpClass={'registerFirstName'}
                        onChangeHandler={() => {}}
                    ></MainInp>
                    <MainInp
                        inpLabel={'Last name*'}
                        inpId={'registerLastName'}
                        inpClass={'registerLastName'}
                        onChangeHandler={() => {}}
                    ></MainInp>
                </div>

                <div className="inpAndHelperTextWrapper">
                    <MainInp
                        inpLabel={'User name*'}
                        inpId={'registerUserName'}
                        inpClass={'registerUserName'}
                        onChangeHandler={() => {}}
                    ></MainInp>
                    <p className="helperText">* Must be 3-16 characters long and contain only letters and numbers.</p>
                </div>

                <div className="inpAndHelperTextWrapper">
                    <MainInp
                        inpLabel={'Password*'}
                        inpId={'registerPassword'}
                        inpClass={'registerPassword'}
                        inpType={'password'}
                        onChangeHandler={() => {}}
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
                    onChangeHandler={() => {}}
                ></MainInp>

                <div className="isAdminInpsWrapper">
                    <RoundToggleButton
                        showToggleLabel={true}
                        toggleBtnLabel={'Are you an admin?'}
                        toggleBtnId={'isAdminToggleBtn'}
                        onClickHandler={() => setSecretKeyInpDisabled((prev) => !prev)}
                    ></RoundToggleButton>

                    <div className="inpAndHelperTextWrapper">
                        <MainInp
                            inpLabel={'Admin secret key*'}
                            inpId={'registerAdminSecretKey'}
                            inpClass={'registerAdminSecretKey'}
                            inpType={'password'}
                            onChangeHandler={() => {}}
                            isDisabled={secretKeyInpDisabled}
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
