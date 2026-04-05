import { Link } from 'react-router-dom';
import { z } from 'zod';
import { format } from 'date-fns';

import ValidatedComponent from '../../../utils/validateComponentProps';

import UserAvatarImg from '../UserAvatarImg/UserAvatarImg';
import DeletePostCommentBtn from '../DeletePostCommentBtn/DeletePostCommentBtn';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './PostItem.scss';

const postItemSchema = z.looseObject({
    usrAvatar: z.string().optional(),
    usrFirstName: z.string().optional(),
    usrLastName: z.string().optional(),
    usrUserName: z.string().optional(),
    isUsrAdmin: z.boolean().optional(),
    postId: z.string().or(z.number()).optional(),
    postTitle: z.string().optional(),
    postContent: z.string().optional(),
    numberPostComments: z.string().or(z.number()).optional(),
    postDate: z.string().optional(),
    isSkeletonLoading: z.boolean(),
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
    isSkeletonLoading,
    showPostItemHeader = true,
    isPostTitleClickable = false,
    isNumberPostCommentsClickable = true,
    isUserAuthenticated = false,
    showBadgeHandler,
    disableDeleteBtn = true,
    deletePostBtnHandler,
}) => {
    let date;
    let displayDate = '';
    if (postDate !== undefined) {
        date = new Date(postDate);
        displayDate = format(date, 'MMM do, yyyy HH:mm');
    }

    return (
        <div className="postItem">
            {showPostItemHeader && (
                <section className="postItemHeader">
                    <div className="postHeaderLeft">
                        <div className="postAvatarImgWrapper">
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
                            <Link
                                to={`/user/profile/${usrUserName}`}
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
                        )}
                    </div>
                    <div className="postHeaderRight">
                        {isSkeletonLoading === true && (
                            <span className={`${pageBaseStyles.skeletonLoading} skeleton`}>Admin</span>
                        )}
                        {isUsrAdmin === true && isSkeletonLoading === false && <span>Admin</span>}
                    </div>
                </section>
            )}

            <section className="postItemBody">
                {isSkeletonLoading ? (
                    <div className={`${pageBaseStyles.skeletonLoading} postItemTitle`}>
                        Skeleton long long post title
                    </div>
                ) : (
                    <>
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
                    </>
                )}

                {isSkeletonLoading ? (
                    <div className="skeletonContent">
                        <div className={`${pageBaseStyles.skeletonLoading} skeleton`}>skeleton content</div>
                        <div className={`${pageBaseStyles.skeletonLoading} skeleton`}>skeleton content</div>
                        <div className={`${pageBaseStyles.skeletonLoading} skeleton`}>skeleton content</div>
                    </div>
                ) : (
                    <p>{postContent}</p>
                )}
            </section>

            <section className="postItemFooter">
                <div className="postItemFooterLeft">
                    {isSkeletonLoading ? (
                        <span className={`${pageBaseStyles.skeletonLoading}`}>skeleton post long date</span>
                    ) : (
                        <span className="postDate">{displayDate}</span>
                    )}

                    {isSkeletonLoading ? (
                        <div className={`${pageBaseStyles.skeletonLoading} numberPostComments skeleton`}>
                            Skeleton comment
                        </div>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
                <div className="postItemFooterRight">
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
};

export default ValidatedComponent(PostItem, postItemSchema);
