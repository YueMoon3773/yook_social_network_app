import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { useAuthenticate } from '../../../hooks/useAuthenticate';
import ValidatedComponent from '../../../utils/validateComponentProps';

import UserAvatarImg from '../../base/UserAvatarImg/UserAvatarImg';
import UserControllerDropDown from '../../base/UserControllerDropDown/UserControllerDropDown';
import { MenuIcon } from '../../../assets/svgIcon';
import logoImg from '../../../assets/img/logo.png';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './Header.scss';

const headerSchema = z.object({
    showSideBarBtnRef: z.unknown().optional(),
    expandHeaderBottomBorder: z.boolean(),
    showSideBarBtnClickHandler: z.function(),
});

const Header = ({ expandHeaderBottomBorder, showSideBarBtnClickHandler, showSideBarBtnRef }) => {
    const [openUserDropDownController, setOpenUserDropDownController] = useState(false);
    const controllerDropDownRef = useRef(null);
    const { user, loading: userAuthLoading } = useAuthenticate();
    // console.log({ user });

    // Hide drop down when click outside header controller
    useEffect(() => {
        const checkClickOutsideController = (e) => {
            if (controllerDropDownRef.current && !controllerDropDownRef.current.contains(e.target)) {
                setOpenUserDropDownController(false);
            }
        };

        document.addEventListener('mousedown', checkClickOutsideController);

        return () => {
            document.removeEventListener('mousedown', checkClickOutsideController);
        };
    }, []);

    return (
        <header
            className={`header ${pageBaseStyles.pageHeader} ${expandHeaderBottomBorder === true ? 'expanded' : ''}`}
        >
            <div className="showControllerBtnAndLogoWrapper">
                <button
                    ref={showSideBarBtnRef}
                    className="nav_button_show_controllers"
                    onClick={showSideBarBtnClickHandler}
                >
                    <MenuIcon></MenuIcon>
                </button>

                <Link to="/" className="headerLogo">
                    <div className="logoImgWrapper">
                        <img src={logoImg} alt="Logo image" />
                    </div>
                    <span>ooK</span>
                </Link>
            </div>

            <section ref={controllerDropDownRef} className="headerController">
                {user !== null && (
                    <div className="userControllerWrapper">
                        <div className="userController" onClick={() => setOpenUserDropDownController((prev) => !prev)}>
                            <div className="userAvatarWrapper">
                                <UserAvatarImg imgSrc={logoImg}></UserAvatarImg>
                            </div>
                            <div className="userInfoWrapper">
                                <span className="userFullName">{user.first_name + ' ' + user.last_name}</span>
                                <span className="userUserName">{'@' + user.user_name}</span>
                            </div>
                        </div>
                        <UserControllerDropDown isOpen={openUserDropDownController}></UserControllerDropDown>
                    </div>
                )}

                {user === null && (
                    <div className="logInAndRegisterControllerWrapper">
                        <Link to="/user/log-in">Log in</Link>
                        <Link to="/user/register">Register</Link>
                    </div>
                )}
            </section>
        </header>
    );
};

export default ValidatedComponent(Header, headerSchema);
