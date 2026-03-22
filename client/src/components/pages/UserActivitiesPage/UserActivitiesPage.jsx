import { useEffect } from 'react';

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
    const usrFirstName = 'Aurelia';
    const usrLastName = 'Kshlerin';
    const usrUserName = 'aure_K_lerin';

    useEffect(() => {
        document.title = `Yook | ${usrUserName}'s activities`;
    }, []);

    return (
        <PageLayout>
            <div className="userActivitiesPageContent">
                <section className="usrBasicInfoWrapper">
                    <div className="usrBasicInfo">
                        <div className="basicInfoLeft">
                            <div className="usrActivitiesAvatarWrapper">
                                <UserAvatarImg imgSrc={noAvatar}></UserAvatarImg>
                            </div>
                        </div>
                        <div className="basicInfoRight">
                            <span>{usrFirstName + ' ' + usrLastName}</span>
                            <span>{'@' + usrUserName}</span>
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
                                        postDate={'06:06 PM - 06/03/2026'}
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
                                        usrAvatar={noAvatar}
                                        usrFirstName={item.first_name}
                                        usrLastName={item.last_name}
                                        usrUserName={item.user_name}
                                        isUsrAdmin={item.is_admin}
                                        postId={item.post_id}
                                        postTitle={item.post_title}
                                        commentContent={item.comment}
                                        commentDate={item.date}
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
};

export default UserActivitiesPage;
