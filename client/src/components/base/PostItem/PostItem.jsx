import { Link } from 'react-router-dom';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import UserAvatarImg from '../UserAvatarImg/UserAvatarImg';
import DeletePostCommentBtn from '../DeletePostCommentBtn/DeletePostCommentBtn';

import './PostItem.scss';

const postItemSchema = z.looseObject({
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
    showPostItemHeader: z.boolean(),
    isPostTitleClickable: z.boolean().optional(),
    isNumberPostCommentsClickable: z.boolean().optional(),
    isUserAuthenticated: z.boolean().default(false),
    showBadgeHandler: z.function().optional(),
    disableDeleteBtn: z.boolean().default(false).optional(),
    deletePostBtnHandler: z.function().optional(),
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
    showPostItemHeader = true,
    isPostTitleClickable = false,
    isNumberPostCommentsClickable = true,
    isUserAuthenticated = false,
    showBadgeHandler,
    disableDeleteBtn = true,
    deletePostBtnHandler,
}) => {
    return (
        <div className="postItem">
            {showPostItemHeader && (
                <section className="postItemHeader">
                    <div className="postHeaderLeft">
                        <div className="postAvatarImgWrapper">
                            <UserAvatarImg imgSrc={usrAvatar}></UserAvatarImg>
                        </div>
                        <Link
                            to={`/user/${usrUserName}`}
                            onClick={(e) => {
                                if (!isUserAuthenticated) {
                                    e.preventDefault();
                                    showBadgeHandler();
                                }
                            }}
                        >
                            <span>{usrFirstName + ' ' + usrLastName}</span>
                            <span>{'@' + usrUserName}</span>
                        </Link>
                    </div>
                    <div className="postHeaderRight">{isUsrAdmin && <span>Admin</span>}</div>
                </section>
            )}

            <section className="postItemBody">
                {isPostTitleClickable === true ? (
                    <Link
                        className="postItemTitle"
                        to={`/post/${postId}`}
                        onClick={(e) => {
                            if (!isUserAuthenticated) {
                                e.preventDefault();
                                showBadgeHandler();
                            }
                        }}
                    >
                        {postTitle}
                    </Link>
                ) : (
                    <span className="postItemTitle">{postTitle}</span>
                )}
                <p>{postContent}</p>
            </section>

            <section className="postItemFooter">
                <div className="postItemFooterLeft">
                    <span className="postDate">{postDate}</span>
                    {isNumberPostCommentsClickable === true ? (
                        <Link
                            to={`/post/${postId}`}
                            className="numberPostComments"
                            onClick={(e) => {
                                if (!isUserAuthenticated) {
                                    e.preventDefault();
                                    showBadgeHandler();
                                }
                            }}
                        >
                            {`${numberPostComments} comment${numberPostComments > 1 ? 's' : ''}`}
                        </Link>
                    ) : (
                        <span className="numberPostComments">
                            {`${numberPostComments} comment${numberPostComments > 1 ? 's' : ''}`}
                        </span>
                    )}
                </div>
                <div className="postItemFooterRight">
                    <DeletePostCommentBtn
                        isBtnDisabled={disableDeleteBtn}
                        onClickHandler={deletePostBtnHandler}
                    ></DeletePostCommentBtn>
                </div>
            </section>
        </div>
    );
};

export default ValidatedComponent(PostItem, postItemSchema);
