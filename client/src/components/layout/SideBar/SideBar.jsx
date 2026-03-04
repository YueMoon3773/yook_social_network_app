import { Link, NavLink, useNavigate } from 'react-router-dom';

import { useTheme } from '../../../hooks/useTheme';

import { HomeIcon, UserProfileIcon, ActivitiesIcon, DarkModeIcon, LightModeIcon } from '../../../assets/svgIcon';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './SideBar.scss';

const SideBar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <aside className={`nav_controllers ${pageBaseStyles.sideBar}`}>
            <section className="nav_links_wrapper">
                <NavLink to="/home" className={({ isActive }) => `nav_link ${isActive ? 'active' : ''}`}>
                    <HomeIcon></HomeIcon>
                    <span>Home</span>
                </NavLink>
                <NavLink to="/user/profile" className={({ isActive }) => `nav_link ${isActive ? 'active' : ''}`}>
                    <UserProfileIcon></UserProfileIcon>
                    <span>Profile</span>
                </NavLink>
                <NavLink to="/user/activities" className={({ isActive }) => `nav_link ${isActive ? 'active' : ''}`}>
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
            </section>
        </aside>
    );
};

export default SideBar;
