import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './UserAvatarImg.scss';

const userAvatarImgSchema = z.object({ imgSrc: z.string() });

const UserAvatarImg = ({ imgSrc }) => {
    return <img src={imgSrc} alt="User's avatar" className={`${pageBaseStyles.userAvatar}`} />;
};

export default ValidatedComponent(UserAvatarImg, userAvatarImgSchema);
