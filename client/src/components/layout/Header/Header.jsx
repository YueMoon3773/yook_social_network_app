import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import UserAvatarImg from '../../base/UserAvatarImg/UserAvatarImg';
import UserControllerDropDown from '../../base/UserControllerDropDown/UserControllerDropDown';
import { MenuIcon } from '../../../assets/svgIcon';
import logoImg from '../../../assets/img/logo.png';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './Header.scss';

const headerSchema = z.object({
    expandHeaderBottomBorder: z.boolean(),
});

const Header = ({ expandHeaderBottomBorder }) => {
    const [openUserDropDownController, setOpenUserDropDownController] = useState(false);
    const controllerDropDownRef = useRef(null);

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
                <button className="nav_button_show_controllers">
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
                {/* <div className="userControllerWrapper">
                    <div className="userController" onClick={() => setOpenUserDropDownController((prev) => !prev)}>
                        <div className="userAvatarWrapper">
                            <UserAvatarImg imgSrc={logoImg}></UserAvatarImg>
                        </div>
                        <div className="userInfoWrapper">
                            <span className="userFullName">Johnathon Torphy</span>
                            <span className="userUserName">@johnTor</span>
                        </div>
                    </div>
                    <UserControllerDropDown isOpen={openUserDropDownController}></UserControllerDropDown>
                </div> */}

                <div className="logInAndRegisterControllerWrapper">
                    <Link to="/user/log-in">Log in</Link>
                    <Link to="/user/register">Register</Link>
                </div>
            </section>
        </header>
    );
};

export default ValidatedComponent(Header, headerSchema);
