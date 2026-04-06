import { z } from 'zod';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { useTheme } from '../../../hooks/useTheme';
import ValidatedComponent from '../../../utils/validateComponentProps';
import { useAuthenticate } from '../../../hooks/useAuthenticate';
import { useShowBadge } from '../../../hooks/useShowBadge';

import {
    HomeIcon,
    UserProfileIcon,
    ActivitiesIcon,
    DarkModeIcon,
    LightModeIcon,
    GithubIcon,
} from '../../../assets/svgIcon';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './SideBar.scss';

const sideBarSchema = z.object({
    sideBarRef: z.unknown().optional(),
    showSideBarInMobileView: z.boolean().optional(),
});

const SideBar = ({ sideBarRef, showSideBarInMobileView }) => {
    const { theme, toggleTheme } = useTheme();
    const { showBadge } = useShowBadge();
    const { user } = useAuthenticate();

    return (
        <aside
            ref={sideBarRef}
            className={`${pageBaseStyles.sideBar} nav_controllers ${showSideBarInMobileView ? 'show' : ''}`}
        >
            <section className="nav_links_wrapper">
                <NavLink to="/" className={({ isActive }) => `nav_link ${isActive ? 'active' : ''}`}>
                    <HomeIcon></HomeIcon>
                    <span>Home</span>
                </NavLink>
                <NavLink
                    to={user !== null ? `/user/profile/${user.user_name}` : '/error'}
                    className={({ isActive }) => `nav_link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                        if (user === null) {
                            e.preventDefault();
                            showBadge();
                        }
                    }}
                >
                    <UserProfileIcon></UserProfileIcon>
                    <span>Profile</span>
                </NavLink>
                <NavLink
                    to={user !== null ? `/user/activities/${user.user_name}` : '/error'}
                    // to="/user/activities"
                    className={({ isActive }) => `nav_link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                        if (user === null) {
                            e.preventDefault();
                            showBadge();
                        }
                    }}
                >
                    <ActivitiesIcon></ActivitiesIcon>
                    <span>Activities</span>
                </NavLink>
            </section>

            <section className="nav_controller">
                <button className={`themeButton ${pageBaseStyles.mainBtn}`} onClick={toggleTheme}>
                    {theme === 'light' && (
                        <>
                            <DarkModeIcon></DarkModeIcon>
                            <span>Dark mode</span>
                        </>
                    )}
                    {theme === 'dark' && (
                        <>
                            <LightModeIcon></LightModeIcon>
                            <span>Light mode</span>
                        </>
                    )}
                </button>
                <Link to="https://github.com/YueMoon3773" target="_blank" rel="noopener noreferrer">
                    <GithubIcon></GithubIcon>
                    Developed by YueMoon
                </Link>
            </section>
        </aside>
    );
};

export default ValidatedComponent(SideBar, sideBarSchema);
