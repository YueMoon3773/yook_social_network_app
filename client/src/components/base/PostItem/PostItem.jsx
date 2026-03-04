import { Link } from 'react-router-dom';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import UserAvatarImg from '../UserAvatarImg/UserAvatarImg';

import './PostItem.scss';

const postItemSchema = z.looseObject({
    usrAvatar: z.string(),
    usrFirstName: z.string(),
    usrLastName: z.string(),
    usrUserName: z.string(),
    isUsrAdmin: z.string(),
    postId: z.string(),
    postTitle: z.string(),
    postContent: z.string(),
    numberPostComments: z.string().or(z.number()),
    postDate: z.string(),
});

const PostItem = ({
    usrAvatar,
    usrFirstName,
    usrLastName,
    usrUserName,
    isUsrAdmin,
    postId,
    postTitle,
    postContent,
    numberPostComments,
    postDate,
}) => {
    return (
        <div className="postItem">
            <section className="postItemHeader">
                <div className="postHeaderLeft">
                    <div className="postAvatarImgWrapper">
                        <UserAvatarImg imgSrc={usrAvatar}></UserAvatarImg>
                    </div>
                    <Link to={`/user/${usrUserName}`}>
                        <span>{usrFirstName + ' ' + usrLastName}</span>
                        <span>{'@' + usrUserName}</span>
                    </Link>
                </div>
                <div className="postHeaderRight">{isUsrAdmin && <span>Admin</span>}</div>
            </section>
            <section className="postItemBody">
                <Link to={`/post/${postId}`}>{postTitle}</Link>
                <p>{postContent}</p>
            </section>
            <section className="postItemFooter">
                <Link to={`/post/${postId}`} className="numberPostComments">
                    {`${numberPostComments} comment${numberPostComments > 1 ? 's' : ''}`}
                </Link>
                <span className="postDate">{postDate}</span>
            </section>
        </div>
    );
};

export default PostItem;
