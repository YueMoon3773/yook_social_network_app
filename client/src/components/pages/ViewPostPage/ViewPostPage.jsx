import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { commentContentInpValidatorSchema } from '../../../utils/formInpsValidatorSchema';
import { useAuthenticate } from '../../../hooks/useAuthenticate';
import { useFetchGetData } from '../../../hooks/useFetchData';
import { useShowBadge } from '../../../hooks/useShowBadge';

import { CommentsIcon } from '../../../assets/svgIcon';
import PageLayout from '../../layout/PageLayout/PageLayout';
import PostItem from '../../base/PostItem/PostItem';
import CommentItem from '../../base/CommentItem/CommentItem';
import ErrorBox from '../../base/ErrorBox/ErrorBox';
import MainTextArea from '../../base/MainTextArea/MainTextArea';
import MainBtn from '../../base/MainBtn/MainBtn';

import pageBaseStyles from '.././../../styles/modules/basePageStyles.module.scss';
import './ViewPostPage.scss';

const baseBeURL = import.meta.env.VITE_API_BASE_URL;

const ViewPostPage = () => {
    const { postId } = useParams();
    const { showBadge, setBadgeType, setBadgeMsg } = useShowBadge();

    const { user: userAuthen, loading: userAuthenLoading } = useAuthenticate();
    // console.log({ userAuthen, userAuthenLoading });

    const {
        data: postData,
        error: postError,
        loading: postLoading,
        refetch: postRefetch,
        newFetchUrl: postNewFetchUrl,
    } = useFetchGetData(`${baseBeURL}/post/get-post/${postId}`);
    const {
        data: commentData,
        error: commentError,
        loading: commentLoading,
        refetch: commentRefetch,
        newFetchUrl: commentNewFetchUrl,
    } = useFetchGetData(`${baseBeURL}/comment/comments-from-post/${postId}`);
    // console.log({ postData, postError, postLoading });
    // console.log({ commentData, commentError, commentLoading });

    const [commentContentValue, setCommentContentValue] = useState('');
    const [inpErrors, setInpErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    /* Set up page title */
    useEffect(() => {
        if (postData !== null) {
            document.title = `Yook | ${postData.post.post_title}`;
        } else document.title = `Yook | Post details`;
    }, [postData]);

    /* Handle user action funcs */
    const commentTextAreaOnChangeHandler = (e) => {
        setCommentContentValue(e.target.value);
    };

    const addCommentBtnOnClickHandler = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (
            postData === null ||
            commentData === null ||
            postError !== null ||
            commentError !== null ||
            userAuthen === null
        ) {
            return;
        } else {
            setIsSubmitting(true);
            try {
                let commentInpErrors = [];
                const commentInpErr = commentContentInpValidatorSchema.safeParse(commentContentValue);

                if (commentInpErr.success === false) {
                    commentInpErrors = commentInpErr.error.issues.map((item) => item.message);
                }

                // console.log({ commentInpErrors });

                if (commentInpErrors.length > 0) {
                    setInpErrors({ commentContentErrors: commentInpErrors });
                    setIsSubmitting(false);
                    return;
                } else {
                    setInpErrors({});
                    const res = await fetch(`${baseBeURL}/comment/add-comment-to-post/${postId}`, {
                        mode: 'cors',
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            userId: userAuthen.id,
                            comment: commentContentValue,
                        }),
                    });

                    const data = await res.json();

                    if (data.ok === false) {
                        let errors = [];
                        errors.push(data.msg);

                        setInpErrors({ errors });
                        setIsSubmitting(false);
                        setBadgeType('error');
                        setBadgeMsg(data.msg);
                        showBadge();
                    } else {
                        setCommentContentValue('');
                        setIsSubmitting(false);
                        setBadgeType('info');
                        setBadgeMsg(data.msg);
                        showBadge();
                        postRefetch();
                        commentRefetch();
                    }
                }
            } catch (err) {
                setIsSubmitting(false);
                console.log('err: ', err);
            }
        }
    };

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
    } else if (postError !== null || commentError !== null) {
        return <Navigate to="/error"></Navigate>;
    } else {
        return (
            <PageLayout>
                <div className={`${pageBaseStyles.twoPartsSectionWrapper} viewPostPageContent`}>
                    <section className={`${pageBaseStyles.twoPartsSectionContentWrapper} postDetailSection`}>
                        {postLoading === true && (
                            <PostItem
                                isSkeletonLoading={true}
                                showPostItemHeader={true}
                                isPostTitleClickable={false}
                                isNumberPostCommentsClickable={false}
                                disableDeleteBtn={true}
                                deletePostBtnHandler={() => {}}
                            ></PostItem>
                        )}

                        {postLoading === false && postError === null && postData !== null && (
                            <PostItem
                                key={postData.post.post_id}
                                usrAvatar={postData.post.avatar_url}
                                usrFirstName={postData.post.first_name}
                                usrLastName={postData.post.last_name}
                                usrUserName={postData.post.user_name}
                                isUsrAdmin={postData.post.is_admin}
                                postId={postData.post.post_id}
                                postTitle={postData.post.post_title}
                                postContent={postData.post.post_content}
                                numberPostComments={postData.post.number_comment}
                                postDate={postData.post.created_at}
                                isSkeletonLoading={false}
                                showPostItemHeader={true}
                                isPostTitleClickable={true}
                                isNumberPostCommentsClickable={false}
                                isUserAuthenticated={!!userAuthen}
                                disableDeleteBtn={true}
                                deletePostBtnHandler={() => {}}
                            ></PostItem>
                        )}

                        <form className="formCmtForPost" action="" method="post">
                            {Object.keys(inpErrors).length > 0 &&
                                (inpErrors.commentContentErrors?.length > 0 || inpErrors.errors?.length > 0) && (
                                    <ErrorBox errors={inpErrors}></ErrorBox>
                                )}

                            {postLoading === false &&
                                postData !== null &&
                                commentLoading === false &&
                                commentData !== null && (
                                    <>
                                        <MainTextArea
                                            textAreaLabel="Add comment"
                                            textAreaId="cmtForPost"
                                            textAreaClass="cmtForPost"
                                            textAreValue={commentContentValue}
                                            onChangeHandler={commentTextAreaOnChangeHandler}
                                        ></MainTextArea>

                                        <MainBtn
                                            isBtnPrimaryColor={true}
                                            btnClass={'addCmtBtn'}
                                            isBtnLoading={isSubmitting}
                                            onClickHandler={addCommentBtnOnClickHandler}
                                        >
                                            Add comment
                                        </MainBtn>
                                    </>
                                )}
                        </form>
                    </section>

                    <section className="postCommentsSection">
                        <h2 className={`${pageBaseStyles.twoPartsSectionHeading} activitiesTwoPartsSectionHeading`}>
                            <CommentsIcon></CommentsIcon> Comments
                        </h2>

                        <div className={`${pageBaseStyles.twoPartsSectionContentWrapper}`}>
                            {commentLoading === true && (
                                <>
                                    {[...Array(6)].map((_, index) => {
                                        return (
                                            <CommentItem
                                                key={index}
                                                showUserInfoInCommentItem={true}
                                                showPostTitleInCommentItem={false}
                                                isSkeletonLoading={true}
                                                disableDeleteBtn={true}
                                                deletePostBtnHandler={() => {}}
                                            ></CommentItem>
                                        );
                                    })}
                                </>
                            )}

                            {commentLoading === false && commentData !== null && (
                                <>
                                    {commentData.comments.length > 0 ? (
                                        <>
                                            {commentData.comments.map((comment, index) => {
                                                return (
                                                    <CommentItem
                                                        key={index}
                                                        showUserInfoInCommentItem={true}
                                                        showPostTitleInCommentItem={false}
                                                        usrAvatar={comment.avatar_url}
                                                        usrFirstName={comment.first_name}
                                                        usrLastName={comment.last_name}
                                                        usrUserName={comment.user_name}
                                                        isUsrAdmin={comment.is_admin}
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
                                    ) : (
                                        <p className="noPostCommentText">No comment to show</p>
                                    )}
                                </>
                            )}
                        </div>
                    </section>
                </div>
            </PageLayout>
        );
    }
};

export default ViewPostPage;
