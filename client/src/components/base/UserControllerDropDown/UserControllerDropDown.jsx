import { Link } from 'react-router-dom';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './UserControllerDropDown.scss';

const userControllerDropDownSchema = z.object({
    isOpen: z.boolean().default(false),
});

const UserControllerDropDown = ({ isOpen = false }) => {
    // console.log({ isOpen });

    return (
        <ul className={`headerUsrDropDownList ${isOpen === true ? 'open' : ''}`}>
            <li className="usrDropDownItem">
                <Link to="/user/profile">Profile</Link>
            </li>
            <li className="usrDropDownItem">
                <Link to="/user/logout">Log out</Link>
            </li>
        </ul>
    );
};

export default ValidatedComponent(UserControllerDropDown, userControllerDropDownSchema);
