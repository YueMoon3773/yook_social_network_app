import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';

import { useAuthenticate } from '../../../hooks/useAuthenticate';
import { useFetchGetData } from '../../../hooks/useFetchData';
import { useShowBadge } from '../../../hooks/useShowBadge';

import { PostsIcon, CommentsIcon } from '../../../assets/svgIcon';
import PageLayout from '../../layout/PageLayout/PageLayout';
import UserAvatarImg from '../../base/UserAvatarImg/UserAvatarImg';
import PostItem from '../../base/PostItem/PostItem';
import CommentItem from '../../base/CommentItem/CommentItem';

import pageBaseStyles from '.././../../styles/modules/basePageStyles.module.scss';
import './UserActivitiesPage.scss';

const baseBeURL = import.meta.env.VITE_API_BASE_URL;

const UserActivitiesPage = () => {
    const { userName } = useParams();
    const { setBadgeType, setBadgeMsg } = useShowBadge();

    const { user: userAuthen, loading: userAuthenLoading } = useAuthenticate();
    const {
        data: userInViewData,
        error: userInViewError,
        loading: userInViewLoading,
        refetch: userInViewRefetch,
        newFetchUrl: userInViewNewFetchUrl,
    } = useFetchGetData(`${baseBeURL}/user/user-info/${userName}`);
    // console.log({ userName });
    // console.log({ userAuthen, userAuthenLoading });
    // console.log({ userInViewData, userInViewError, userInViewLoading });

    const {
        data: postData,
        error: postError,
        loading: postLoading,
        refetch: postRefetch,
        newFetchUrl: postNewFetchurl,
    } = useFetchGetData(`${baseBeURL}/post/posts-by-user/${userName}`);
    const {
        data: commentData,
        error: commentError,
        loading: commentLoading,
        refetch: commentRefetch,
        newFetchUrl: commentNewFetchurl,
    } = useFetchGetData(`${baseBeURL}/comment/comments-by-user/${userName}`);
    // console.log({ postData, postError, postLoading });
    // console.log({ commentData, commentError, commentLoading });

    useEffect(() => {
        if (userInViewData !== null) {
            document.title = `Yook | ${userInViewData.user.user_name}'s activities`;
        } else document.title = "Yook | User's activities";
    }, [userInViewData]);

    if (userAuthen === null && userAuthenLoading === false) {
        setBadgeType('waring');
        setBadgeMsg('Please log in to access the previous content.');

        return (
            <Navigate
                to="/user/log-in"
                state={{
                    unAuthorizedUsrToLogIn: true,
                    badgeType: 'warning',
                    badgeMsg: 'Please log in to access the previous content.',
                }}
            ></Navigate>
        );
    } else if (userInViewError !== null || postError !== null || postError !== null) {
        <Navigate to="/error"></Navigate>;
    } else {
        return (
            <PageLayout>
                <div className="userActivitiesPageContent">
                    <section className="usrBasicInfoWrapper">
                        <div className="usrBasicInfo">
                            <div className="basicInfoLeft">
                                <div className="usrActivitiesAvatarWrapper">
                                    {userInViewLoading ? (
                                        <div className={`${pageBaseStyles.skeletonLoading} skeletonImage`}></div>
                                    ) : (
                                        <UserAvatarImg imgSrc={userInViewData.user.avatar_url}></UserAvatarImg>
                                    )}
                                </div>
                            </div>
                            <div className="basicInfoRight">
                                {userInViewLoading ? (
                                    <>
                                        <span className={`${pageBaseStyles.skeletonLoading}`}>
                                            Skeleton user full name
                                        </span>
                                        <span className={`${pageBaseStyles.skeletonLoading}`}>skeleton user name</span>
                                    </>
                                ) : (
                                    <Link
                                        className="basicInfoRightProfileLink"
                                        to={`/user/profile/${userInViewData.user.user_name}`}
                                    >
                                        <span>
                                            {userInViewData.user.first_name + ' ' + userInViewData.user.last_name}
                                        </span>
                                        <span>{'@' + userInViewData.user.user_name}</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </section>

                    <section className={`${pageBaseStyles.twoPartsSectionWrapper} userActivitiesWrapper`}>
                        <section className="usrPostsWrapper">
                            <h2 className={`${pageBaseStyles.twoPartsSectionHeading} activitiesTwoPartsSectionHeading`}>
                                <PostsIcon></PostsIcon> Posts
                            </h2>

                            <div className={`${pageBaseStyles.twoPartsSectionContentWrapper} activitiesWrapper`}>
                                {postLoading === true && (
                                    <>
                                        {[...Array(6)].map((_, index) => {
                                            return (
                                                <PostItem
                                                    key={index}
                                                    isSkeletonLoading={true}
                                                    showPostItemHeader={false}
                                                ></PostItem>
                                            );
                                        })}
                                    </>
                                )}

                                {postLoading === false && postError === null && postData !== null && (
                                    <>
                                        {postData.posts.length <= 0 ? (
                                            <p className="noPostCommentText">No post to show</p>
                                        ) : (
                                            <>
                                                {postData.posts.map((post, index) => {
                                                    return (
                                                        <PostItem
                                                            key={post.post_id}
                                                            postId={post.post_id}
                                                            postTitle={post.post_title}
                                                            postContent={post.post_content}
                                                            numberPostComments={post.number_comment}
                                                            postDate={post.created_at}
                                                            isSkeletonLoading={false}
                                                            showPostItemHeader={false}
                                                            isPostTitleClickable={true}
                                                            isNumberPostCommentsClickable={true}
                                                            isUserAuthenticated={!!userAuthen}
                                                            disableDeleteBtn={true}
                                                            deletePostBtnHandler={() => {}}
                                                        ></PostItem>
                                                    );
                                                })}
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        </section>

                        <section className="usrCommentsWrapper">
                            <h2 className={`${pageBaseStyles.twoPartsSectionHeading} activitiesTwoPartsSectionHeading`}>
                                <CommentsIcon></CommentsIcon> Comments
                            </h2>

                            <div className={`${pageBaseStyles.twoPartsSectionContentWrapper} activitiesWrapper`}>
                                {commentLoading === true && (
                                    <>
                                        {[...Array(6)].map((_, index) => {
                                            return (
                                                <CommentItem
                                                    key={index}
                                                    showUserInfoInCommentItem={false}
                                                    showPostTitleInCommentItem={true}
                                                    isSkeletonLoading={true}
                                                    disableDeleteBtn={true}
                                                    deletePostBtnHandler={() => {}}
                                                ></CommentItem>
                                            );
                                        })}
                                    </>
                                )}

                                {commentLoading === false && commentError === null && commentData !== null && (
                                    <>
                                        {commentData.comments.length <= 0 ? (
                                            <p className="noPostCommentText">No comment to show</p>
                                        ) : (
                                            <>
                                                {commentData.comments.map((comment, index) => {
                                                    return (
                                                        <CommentItem
                                                            key={comment.comment_id}
                                                            showUserInfoInCommentItem={false}
                                                            showPostTitleInCommentItem={true}
                                                            postId={comment.post_id}
                                                            postTitle={comment.post_title}
                                                            commentContent={comment.comment}
                                                            commentDate={comment.created_at}
                                                            isSkeletonLoading={false}
                                                            disableDeleteBtn={true}
                                                            deletePostBtnHandler={() => {}}
                                                        ></CommentItem>
                                                    );
                                                })}
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        </section>
                    </section>
                </div>
            </PageLayout>
        );
    }
};

export default UserActivitiesPage;
