import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthenticate } from '../../../hooks/useAuthenticate';

import { CommentsIcon } from '../../../assets/svgIcon';
import PageLayout from '../../layout/PageLayout/PageLayout';
import PostItem from '../../base/PostItem/PostItem';
import CommentItem from '../../base/CommentItem/CommentItem';
import MainBtn from '../../base/MainBtn/MainBtn';
import noAvatar from '../../../assets/img/no_avatar.jpg';

import pageBaseStyles from '.././../../styles/modules/basePageStyles.module.scss';
import './ViewPostPage.scss';

import { testUsrPosts, testUsrCmts } from '../../../utils/testDataArr';

const ViewPostPage = () => {
    const { user, loading: userAuthenLoading } = useAuthenticate();
    console.log({ user, userAuthenLoading });

    const postTitle = testUsrPosts[0].post_title;
    useEffect(() => {
        document.title = `Yook | ${postTitle}`;
    }, [postTitle]);

    if (user === null && userAuthenLoading === false) {
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
                <div className={`${pageBaseStyles.twoPartsSectionWrapper} viewPostPageContent`}>
                    <section className={`${pageBaseStyles.twoPartsSectionContentWrapper} postDetailSection`}>
                        <PostItem
                            key={testUsrPosts[0].id}
                            // usrAvatar={noAvatar}
                            // usrFirstName={testUsrPosts[0].first_name}
                            // usrLastName={testUsrPosts[0].last_name}
                            // usrUserName={testUsrPosts[0].user_name}
                            // isUsrAdmin={testUsrPosts[0].is_admin}
                            // postId={testUsrPosts[0].id}
                            // postTitle={testUsrPosts[0].post_title}
                            // postContent={testUsrPosts[0].post_content}
                            // numberPostComments={6}
                            // postDate={new Date()}
                            isSkeletonLoading={true}
                            // isSkeletonLoading={false}
                            showPostItemHeader={true}
                            isPostTitleClickable={false}
                            isNumberPostCommentsClickable={false}
                            disableDeleteBtn={true}
                            deletePostBtnHandler={() => {}}
                        ></PostItem>

                        <form className="formCmtForPost" action="" method="post">
                            <textarea
                                name="cmtForPost"
                                id="cmtForPost"
                                className="cmtForPost"
                                placeholder="Add comment"
                            ></textarea>

                            <MainBtn isBtnPrimaryColor={true} onClickHandler={() => {}} btnClass={'addCmtBtn'}>
                                Add comment
                            </MainBtn>
                        </form>
                    </section>

                    <section className={`${pageBaseStyles.twoPartsSectionContentWrapper} postCommentsSection`}>
                        <h2 className={`${pageBaseStyles.twoPartsSectionHeading} activitiesTwoPartsSectionHeading`}>
                            <CommentsIcon></CommentsIcon> Comments
                        </h2>

                        <div className={`${pageBaseStyles.twoPartsSectionContentWrapper}`}>
                            {testUsrCmts.map((item) => {
                                return (
                                    <CommentItem
                                        key={item.id}
                                        showUserInfoInCommentItem={true}
                                        showPostTitleInCommentItem={false}
                                        // usrAvatar={noAvatar}
                                        // usrFirstName={item.first_name}
                                        // usrLastName={item.last_name}
                                        // usrUserName={item.user_name}
                                        // isUsrAdmin={item.is_admin}
                                        // postId={item.post_id}
                                        // postTitle={item.post_title}
                                        // commentContent={item.comment}
                                        // commentDate={item.date}
                                        isSkeletonLoading={true}
                                        // isSkeletonLoading={false}
                                        disableDeleteBtn={true}
                                        deletePostBtnHandler={() => {}}
                                    ></CommentItem>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </PageLayout>
        );
    }
};

export default ViewPostPage;
