import { Link } from 'react-router-dom';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import { GoToPostIcon } from '../../../assets/svgIcon';
import UserAvatarImg from '../UserAvatarImg/UserAvatarImg';

import './CommentItem.scss';

const commentItemSchema = z.object({
    showUserInfoInCommentItem: z.boolean(),
    showPostTitleInCommentItem: z.boolean(),
    usrAvatar: z.string().optional(),
    usrFirstName: z.string().optional(),
    usrLastName: z.string().optional(),
    usrUserName: z.string().optional(),
    isUsrAdmin: z.boolean().optional(),
    postId: z.string().or(z.number()).optional(),
    postTitle: z.string().optional(),
    commentContent: z.string(),
    commentDate: z.string(),
});

const CommentItem = ({
    showUserInfoInCommentItem,
    showPostTitleInCommentItem,
    usrAvatar,
    usrFirstName,
    usrLastName,
    usrUserName,
    isUsrAdmin,
    postId,
    postTitle,
    commentContent,
    commentDate,
}) => {
    if (
        (showUserInfoInCommentItem && showPostTitleInCommentItem) ||
        (!showUserInfoInCommentItem && !showPostTitleInCommentItem)
    ) {
        return null;
    } else {
        return (
            <div className="commentItem">
                <section className="cmtItemHeader">
                    {showUserInfoInCommentItem && (
                        <>
                            <div className="cmtHeaderLeft">
                                <div className="cmtAvatarImgWrapper">
                                    <UserAvatarImg imgSrc={usrAvatar}></UserAvatarImg>
                                </div>
                                <Link to={`/user/${usrUserName}`}>
                                    <span>{usrFirstName + ' ' + usrLastName}</span>
                                    <span>{'@' + usrUserName}</span>
                                </Link>
                            </div>
                            <div className="cmtHeaderRight">{isUsrAdmin && <span>Admin</span>}</div>
                        </>
                    )}
                    {showPostTitleInCommentItem && (
                        <Link to={`/post/${postId}`}>
                            <GoToPostIcon></GoToPostIcon>
                            {` ${postTitle}`}
                        </Link>
                    )}
                </section>

                <section className="cmtItemBody">
                    <p>{commentContent}</p>
                </section>

                <section className="cmtItemFooter">
                    <span className="cmtDate">{commentDate}</span>
                </section>
            </div>
        );
    }
};

export default ValidatedComponent(CommentItem, commentItemSchema);
