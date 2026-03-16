import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogInRegisterLogo from '../../base/LogInRegisterLogo/LogInRegisterLogo';
import MainInp from '../../base/MainInp/MainInp';
import MainBtn from '../../base/MainBtn/MainBtn';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './UserLogInPage.scss';

const UserLogInPage = () => {
    useEffect(() => {
        document.title = 'Yook | Log in';
    }, []);

    return (
        <div className={`${pageBaseStyles.page} logInPage`}>
            <LogInRegisterLogo showSlogan={true}></LogInRegisterLogo>

            <form action="" method="post" className={`${pageBaseStyles.logInAndRegisterFormWrapper} logInForm`}>
                <MainInp
                    inpLabel={'User name*'}
                    inpId={'registerUserName'}
                    inpClass={'registerUserName'}
                    onChangeHandler={() => {}}
                ></MainInp>

                <MainInp
                    inpLabel={'Password*'}
                    inpId={'registerPassword'}
                    inpClass={'registerPassword'}
                    inpType={'password'}
                    onChangeHandler={() => {}}
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
