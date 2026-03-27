import { Link } from 'react-router-dom';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import { GoToPostIcon } from '../../../assets/svgIcon';
import UserAvatarImg from '../UserAvatarImg/UserAvatarImg';
import DeletePostCommentBtn from '../DeletePostCommentBtn/DeletePostCommentBtn';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './CommentItem.scss';

const commentItemSchema = z.object({
    usrAvatar: z.string().optional(),
    usrFirstName: z.string().optional(),
    usrLastName: z.string().optional(),
    usrUserName: z.string().optional(),
    isUsrAdmin: z.boolean().optional(),
    postId: z.string().or(z.number()).optional(),
    postTitle: z.string().optional(),
    commentContent: z.string().optional(),
    commentDate: z.string().optional(),
    isSkeletonLoading: z.boolean(),
    showUserInfoInCommentItem: z.boolean(),
    showPostTitleInCommentItem: z.boolean(),
    disableDeleteBtn: z.boolean().default(false).optional(),
    deletePostBtnHandler: z.function().optional(),
});

const CommentItem = ({
    usrAvatar,
    usrFirstName,
    usrLastName,
    usrUserName,
    isUsrAdmin,
    postId,
    postTitle,
    commentContent,
    commentDate,
    isSkeletonLoading,
    showUserInfoInCommentItem,
    showPostTitleInCommentItem,
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
                                    {isSkeletonLoading ? (
                                        <div className={`${pageBaseStyles.skeletonLoading} skeleton`}></div>
                                    ) : (
                                        <UserAvatarImg imgSrc={usrAvatar}></UserAvatarImg>
                                    )}
                                </div>

                                {isSkeletonLoading ? (
                                    <div className="skeletonNames">
                                        <div className={`${pageBaseStyles.skeletonLoading}`}>
                                            <span>Skeleton user full Name</span>
                                        </div>
                                        <div className={`${pageBaseStyles.skeletonLoading}`}>
                                            <span>Skeleton user Name</span>
                                        </div>
                                    </div>
                                ) : (
                                    <Link to={`/user/${usrUserName}`}>
                                        <span>{usrFirstName + ' ' + usrLastName}</span>
                                        <span>{'@' + usrUserName}</span>
                                    </Link>
                                )}
                            </div>
                            <div className="cmtHeaderRight">
                                {isSkeletonLoading === true && (
                                    <span className={`${pageBaseStyles.skeletonLoading} skeleton`}>Admin</span>
                                )}
                                {isUsrAdmin === true && isSkeletonLoading === false && <span>Admin</span>}
                            </div>
                        </>
                    )}

                    {isSkeletonLoading === true && (
                        <div className={`${pageBaseStyles.skeletonLoading} skeletonTitle`}>Skeleton long title</div>
                    )}

                    {showPostTitleInCommentItem === true && isSkeletonLoading === false && (
                        <Link to={`/post/${postId}`}>
                            <GoToPostIcon></GoToPostIcon>
                            <span>{` ${postTitle}`}</span>
                        </Link>
                    )}
                </section>

                <section className="cmtItemBody">
                    {isSkeletonLoading ? (
                        <div className="skeletonContent">
                            <div className={`${pageBaseStyles.skeletonLoading} skeleton`}>skeleton content</div>
                            <div className={`${pageBaseStyles.skeletonLoading} skeleton`}>skeleton content</div>
                            <div className={`${pageBaseStyles.skeletonLoading} skeleton`}>skeleton content</div>
                        </div>
                    ) : (
                        <p>{commentContent}</p>
                    )}
                </section>

                <section className="cmtItemFooter">
                    <div className="cmtItemFooterLeft">
                        {isSkeletonLoading ? (
                            <span className={`${pageBaseStyles.skeletonLoading}`}>skeleton post long date</span>
                        ) : (
                            <span className="cmtDate">{commentDate}</span>
                        )}
                    </div>
                    <div className="cmtItemFooterRight">
                        {isSkeletonLoading ? (
                            <div className={`${pageBaseStyles.skeletonLoading}`}></div>
                        ) : (
                            <DeletePostCommentBtn
                                isBtnDisabled={disableDeleteBtn}
                                onClickHandler={deletePostBtnHandler}
                            ></DeletePostCommentBtn>
                        )}
                    </div>
                </section>
            </div>
        );
    }
};

export default ValidatedComponent(CommentItem, commentItemSchema);
