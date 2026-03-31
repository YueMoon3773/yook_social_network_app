import { useEffect } from 'react';
import { Navigate } from 'react-router';

import { useAuthenticate } from '../../../hooks/useAuthenticate';
import { useShowBadge } from '../../../hooks/useShowBadge';

import { PostsIcon, CommentsIcon } from '../../../assets/svgIcon';
import PageLayout from '../../layout/PageLayout/PageLayout';
import UserAvatarImg from '../../base/UserAvatarImg/UserAvatarImg';
import PostItem from '../../base/PostItem/PostItem';
import CommentItem from '../../base/CommentItem/CommentItem';
import noAvatar from '../../../assets/img/no_avatar.jpg';

import pageBaseStyles from '.././../../styles/modules/basePageStyles.module.scss';
import './UserActivitiesPage.scss';

import { testUsrPosts, testUsrCmts } from '../../../utils/testDataArr';

const UserActivitiesPage = () => {
    const { setBadgeType, setBadgeMsg } = useShowBadge();
    const { user, loading: userAuthenLoading } = useAuthenticate();

    const usrFirstName = 'Aurelia';
    const usrLastName = 'Kshlerin';
    const usrUserName = 'aure_K_lerin';

    useEffect(() => {
        document.title = `Yook | ${usrUserName}'s activities`;
    }, []);

    if (user === null && userAuthenLoading === false) {
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
    } else {
        return (
            <PageLayout>
                <div className="userActivitiesPageContent">
                    <section className="usrBasicInfoWrapper">
                        <div className="usrBasicInfo">
                            <div className="basicInfoLeft">
                                <div className="usrActivitiesAvatarWrapper">
                                    {userAuthenLoading ? (
                                        <div className={`${pageBaseStyles.skeletonLoading} skeletonImage`}></div>
                                    ) : (
                                        <UserAvatarImg imgSrc={noAvatar}></UserAvatarImg>
                                    )}
                                </div>
                            </div>
                            <div className="basicInfoRight">
                                {userAuthenLoading ? (
                                    <>
                                        <span className={`${pageBaseStyles.skeletonLoading}`}>
                                            Skeleton user full name
                                        </span>
                                        <span className={`${pageBaseStyles.skeletonLoading}`}>skeleton user name</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{usrFirstName + ' ' + usrLastName}</span>
                                        <span>{'@' + usrUserName}</span>
                                    </>
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
                                {testUsrPosts.map((item) => {
                                    return (
                                        <PostItem
                                            key={item.id}
                                            postId={item.id}
                                            postTitle={item.post_title}
                                            postContent={item.post_content}
                                            numberPostComments={6}
                                            postDate={new Date()}
                                            isSkeletonLoading={true}
                                            // isSkeletonLoading={false}
                                            showPostItemHeader={false}
                                            isPostTitleClickable={true}
                                            isNumberPostCommentsClickable={true}
                                            disableDeleteBtn={true}
                                            deletePostBtnHandler={() => {}}
                                        ></PostItem>
                                    );
                                })}
                            </div>
                        </section>

                        <section className="usrCommentsWrapper">
                            <h2 className={`${pageBaseStyles.twoPartsSectionHeading} activitiesTwoPartsSectionHeading`}>
                                <CommentsIcon></CommentsIcon> Comments
                            </h2>

                            <div className={`${pageBaseStyles.twoPartsSectionContentWrapper} activitiesWrapper`}>
                                {testUsrCmts.map((item) => {
                                    return (
                                        <CommentItem
                                            key={item.id}
                                            showUserInfoInCommentItem={false}
                                            showPostTitleInCommentItem={true}
                                            usrFirstName={item.first_name}
                                            usrLastName={item.last_name}
                                            usrUserName={item.user_name}
                                            isUsrAdmin={item.is_admin}
                                            postId={item.post_id}
                                            postTitle={item.post_title}
                                            commentContent={item.comment}
                                            commentDate={item.date}
                                            isSkeletonLoading={true}
                                            // isSkeletonLoading={false}
                                            disableDeleteBtn={true}
                                            deletePostBtnHandler={() => {}}
                                        ></CommentItem>
                                    );
                                })}
                            </div>
                        </section>
                    </section>
                </div>
            </PageLayout>
        );
    }
};

export default UserActivitiesPage;
