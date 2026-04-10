import { Link } from 'react-router-dom';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './UserControllerDropDown.scss';

const userControllerDropDownSchema = z.object({
    isOpen: z.boolean().default(false),
    userAuthenUserName: z.string().nullable(),
    logOutOnClickHandler: z.function(),
});

const UserControllerDropDown = ({ isOpen = false, userAuthenUserName, logOutOnClickHandler }) => {
    // console.log({ isOpen });

    return (
        <ul className={`headerUsrDropDownList ${isOpen === true ? 'open' : ''}`}>
            <li className="usrDropDownItem">
                <Link to={userAuthenUserName ? `/user/profile/${userAuthenUserName}` : '/error'}>Profile</Link>
            </li>
            <li className="usrDropDownItem">
                <span onClick={logOutOnClickHandler}>Log out</span>
            </li>
        </ul>
    );
};

export default ValidatedComponent(UserControllerDropDown, userControllerDropDownSchema);
