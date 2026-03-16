import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';
import logoImg from '../../../assets/img/logo.png';

import './LogInRegisterLogo.scss';

const logInRegisterSchema = z.object({
    showSlogan: z.boolean().optional().default(false),
});

const LogInRegisterLogo = ({ showSlogan = false }) => {
    return (
        <div className="logInRegisterLogoWrapper">
            <h1>
                <img src={logoImg} alt="Logo image" />
                ook
            </h1>

            {showSlogan && <p>The story of us, by us.</p>}
        </div>
    );
};

export default ValidatedComponent(LogInRegisterLogo, logInRegisterSchema);
