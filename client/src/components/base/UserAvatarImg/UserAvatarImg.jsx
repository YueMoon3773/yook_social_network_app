import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';
import noAvatar from '../../../assets/img/no_avatar.jpg';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './UserAvatarImg.scss';

const userAvatarImgSchema = z.object({ imgSrc: z.string() });

const UserAvatarImg = ({ imgSrc }) => {
    const isValidImgSrc = z.url().safeParse(imgSrc).success;

    return (
        <img
            src={isValidImgSrc ? imgSrc : noAvatar}
            alt="User's avatar"
            className={`${pageBaseStyles.userAvatar}`}
            onError={(e) => {
                e.target.src = noAvatar;
            }}
        />
    );
};

export default ValidatedComponent(UserAvatarImg, userAvatarImgSchema);
