import { useEffect } from 'react';

import { PostsIcon, CommentsIcon } from '../../../assets/svgIcon';
import PageLayout from '../../layout/PageLayout/PageLayout';
import UserAvatarImg from '../../base/UserAvatarImg/UserAvatarImg';
import PostItem from '../../base/PostItem/PostItem';
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
                        <h2 className={`${pageBaseStyles.sectionHeading} activitiesSectionHeading`}>
                            <PostsIcon></PostsIcon> Comment
                        </h2>

                        <div className={`${pageBaseStyles.twoPartsSectionContentWrapper} activitiesWrapper`}>
                            {testUsrPosts.map((item) => {
                                return (
                                    <PostItem
                                        key={item.id}
                                        showPostItemHeader={false}
                                        postId={item.id}
                                        postTitle={item.post_title}
                                        postContent={item.post_content}
                                        numberPostComments={6}
                                        postDate={'06:06 PM - 06/03/2026'}
                                    ></PostItem>
                                );
                            })}
                        </div>
                    </section>

                    <section className="usrCommentsWrapper">
                        <h2 className={`${pageBaseStyles.sectionHeading} activitiesSectionHeading`}>
                            <CommentsIcon></CommentsIcon> Comments
                        </h2>

                        <div className={`${pageBaseStyles.twoPartsSectionContentWrapper} activitiesWrapper`}></div>
                    </section>
                </section>
            </div>
        </PageLayout>
    );
};

export default UserActivitiesPage;
