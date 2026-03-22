import { Link } from 'react-router-dom';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import { GoToPostIcon } from '../../../assets/svgIcon';
import UserAvatarImg from '../UserAvatarImg/UserAvatarImg';
import DeletePostCommentBtn from '../DeletePostCommentBtn/DeletePostCommentBtn';

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
    disableDeleteBtn: z.boolean().default(false).optional(),
    deletePostBtnHandler: z.function().optional(),
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
    disableDeleteBtn = true,
    deletePostBtnHandler,
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
                            <span>{` ${postTitle}`}</span>
                        </Link>
                    )}
                </section>

                <section className="cmtItemBody">
                    <p>{commentContent}</p>
                </section>

                <section className="cmtItemFooter">
                    <div className="cmtItemFooterLeft">
                        <span className="cmtDate">{commentDate}</span>
                    </div>
                    <div className="cmtItemFooterRight">
                        <DeletePostCommentBtn
                            isBtnDisabled={disableDeleteBtn}
                            onClickHandler={deletePostBtnHandler}
                        ></DeletePostCommentBtn>
                    </div>
                </section>
            </div>
        );
    }
};

export default ValidatedComponent(CommentItem, commentItemSchema);
