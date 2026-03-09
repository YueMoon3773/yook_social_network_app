import { Link } from 'react-router-dom';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import UserAvatarImg from '../UserAvatarImg/UserAvatarImg';

import './PostItem.scss';

const postItemSchema = z.looseObject({
    showPostItemHeader: z.boolean(),
    usrAvatar: z.string().optional(),
    usrFirstName: z.string().optional(),
    usrLastName: z.string().optional(),
    usrUserName: z.string().optional(),
    isUsrAdmin: z.boolean().optional(),
    postId: z.string().or(z.number()),
    postTitle: z.string(),
    postContent: z.string(),
    numberPostComments: z.string().or(z.number()),
    postDate: z.string(),
});

const PostItem = ({
    showPostItemHeader,
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
            {showPostItemHeader && (
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
            )}

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

export default ValidatedComponent(PostItem, postItemSchema);
