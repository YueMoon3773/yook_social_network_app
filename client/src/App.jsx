import { useState, useEffect, useRef } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Masonry from 'react-masonry-css';

import { postTitleInpValidatorSchema, postContentInpValidatorSchema } from './utils/formInpsValidatorSchema';
import { useOpenCloseModal } from './hooks/useOpenCloseModal';
import { useShowBadge } from './hooks/useShowBadge';
import { useAuthenticate } from './hooks/useAuthenticate';
import { useFetchGetData } from './hooks/useFetchData';

import { ArrowRightIcon, ArrowLeftIcon, PlusIcon } from './assets/svgIcon';
import PageLayout from './components/layout/PageLayout/PageLayout';
import SelectionController from './components/base/SelectionController/SelectionController';
import PostItem from './components/base/PostItem/PostItem';
import MainBtn from './components/base/MainBtn/MainBtn';

import './App.scss';

import { testUsrPosts } from './utils/testDataArr';

const breakpointColumnsObj = {
    default: 3,
    1200: 2,
    740: 1,
};

const sortByOptsList = [
    { id: 1, content: 'Oldest to Newest', value: 'oldToNew' },
    { id: 2, content: 'Newest to Oldest', value: 'newToOld' },
    { id: 3, content: 'Most comments', value: 'mostCmt' },
    { id: 4, content: 'Fewest comments', value: 'leastCmt' },
];
const postPerPageOptsList = [
    { id: 1, content: 25, value: 25 },
    { id: 2, content: 50, value: 50 },
    { id: 3, content: 100, value: 100 },
];
const baseBeURL = import.meta.env.VITE_API_BASE_URL;

const App = () => {
    const location = useLocation();
    /* Check user authentication */
    const { user: userAuthen, loading: userAuthenLoading } = useAuthenticate();

    /* UI/UX variables + set up */
    const [showHelperAddPostBtn, setShowHelperAddPostBtn] = useState(false);
    const helperHoverTimer = useRef(null);
    const { showModal, modalBoxRef, openModal, closeModal, resetModalState } = useOpenCloseModal();

    // const { isShowBadge, showBadge, badgeType, setBadgeType, badgeMsg, setBadgeMsg } = useShowBadge();
    const { showBadge, badgeType, setBadgeType, badgeMsg, setBadgeMsg } = useShowBadge();

    /* Controller values */
    const [postTitleValue, setPostTitleValue] = useState('');
    const [postContentValue, setPostContentValue] = useState('');

    const [inpErrors, setInpErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    /* Set cursor for id and number comments sort */
    const unauthorizedUsrPostPerPage = 10;
    const [cursorFirstId, setCurSorFirstId] = useState(null);
    const [cursorLastId, setCurSorLastId] = useState(null);

    const [cursorLastCmtNumber, setCursorLastCmtNumber] = useState(null);
    const [cursorFirstCmtNumber, setCursorFirstCmtNumber] = useState(null);

    const [sortByValue, setSortByValue] = useState(sortByOptsList[0].value);
    const [postsPerPageValue, setPostsPerPageValue] = useState(unauthorizedUsrPostPerPage);

    /* Variables for fetching from API */
    const [postApiUrl, setPostApiUrl] = useState(
        `${baseBeURL}/post/get-posts?postPerPage=${unauthorizedUsrPostPerPage}`,
    );
    const {
        data: postData,
        error: postError,
        loading: postDataLoading,
        refetch: refetchPosts,
    } = useFetchGetData(postApiUrl);
    const {
        data: postQuantityData,
        error: postQuantityError,
        loading: postQuantityLoading,
        refetch: refetchPostQuantity,
        newFetchUrl,
    } = useFetchGetData(`${baseBeURL}/post/get-post-quantity`);

    /* Set page title */
    useEffect(() => {
        document.title = 'Yook | Home';
        resetModalState();
    }, []);

    /* Set badge info based on use authentication status */
    useEffect(() => {
        if (userAuthen === null) {
            setBadgeType('warning');
            setBadgeMsg('Log in to see this content.');
        } else if (location.state?.userJustLoggedIn === true) {
            setBadgeType('info');
            setBadgeMsg(`You logged in as ${userAuthen.user_name} successfully`);
            showBadge();
        }
    }, [userAuthen]);

    /* Refetch 25 posts if user authentication session exist */
    /* Otherwise fetch 10 posts only */
    useEffect(() => {
        if (userAuthen !== null) {
            setPostsPerPageValue(postPerPageOptsList[0].value);
            setPostApiUrl(`${baseBeURL}/post/get-posts?postPerPage=${postPerPageOptsList[0].value}`);
        } else {
            setPostsPerPageValue(unauthorizedUsrPostPerPage);
            setPostApiUrl(`${baseBeURL}/post/get-posts?postPerPage=${unauthorizedUsrPostPerPage}`);
        }
    }, [userAuthen]);

    /* Set cursor id/comments to the first/last post id/comments number retrieved */
    useEffect(() => {
        if (userAuthen !== null && postData !== null) {
            setCurSorFirstId(postData.posts[0].post_id);
            setCurSorLastId(postData.posts[postData.posts.length - 1].post_id);

            if (sortByValue === 'mostCmt' || sortByValue === 'leastCmt') {
                setCursorFirstCmtNumber(postData.posts[0].number_comment);
                setCursorLastCmtNumber(Number(postData.posts[postData.posts.length - 1].number_comment));
            }
        }
    }, [userAuthen, postData]);

    /* Logging */
    // console.log({ userAuthen, userAuthenLoading });
    console.log({ postApiUrl });
    console.log({ postData, postError, postDataLoading });
    // console.log({ postQuantityData, postQuantityError, postQuantityLoading });
    // console.log({ badgeType, badgeMsg });
    console.log({ sortByValue, postsPerPageValue });
    console.log({ cursorLastId, cursorLastCmtNumber });

    /* Handling user action functions */
    const closeModalBtnHandler = () => {
        if (!isSubmitting) {
            closeModal();
        } else return;
    };

    const sortByOnChangeHandler = (e) => {
        if (userAuthen === null) {
            e.preventDefault();
            showBadge();
            return;
        } else {
            const newSortByVal = e.target.value;
            setSortByValue(newSortByVal);

            // console.log(
            //     `${baseBeURL}/post/get-posts?sortBy=${newSortByVal}&postPerPage=${postsPerPageValue}&cursorLastId=${cursorLastId}&cursorLastCmtNumber=${cursorLastCmtNumber}`,
            // );

            setPostApiUrl(`${baseBeURL}/post/get-posts?sortBy=${newSortByVal}&postPerPage=${postsPerPageValue}`);
        }
    };

    const postsPerPageOnChangeHandler = (e) => {
        if (userAuthen === null) {
            e.preventDefault();
            showBadge();
            return;
        } else {
            const newPostsPerPageVal = e.target.value;
            setPostsPerPageValue(newPostsPerPageVal);
            // console.log(
            //     `${baseBeURL}/post/get-posts?sortBy=${sortByValue}&postPerPage=${newPostsPerPageVal}&cursorLastId=${cursorLastId}&cursorLastCmtNumber=${cursorLastCmtNumber}`,
            // );

            setPostApiUrl(`${baseBeURL}/post/get-posts?sortBy=${sortByValue}&postPerPage=${newPostsPerPageVal}`);
        }
    };

    const postTitleOnChangeHandler = (e) => {
        setPostTitleValue(e.target.value);
    };

    const postContentOnChangeHandler = (e) => {
        setPostContentValue(e.target.value);
    };

    const submitPostModalBtnHandler = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSubmitting(true);

        try {
            let postTitleErrors = [];
            let postContentErrors = [];

            const postTitleErr = postTitleInpValidatorSchema.safeParse(postTitleValue);
            const postContentErr = postContentInpValidatorSchema.safeParse(postContentValue);

            if (postTitleErr.success === false) {
                postTitleErrors = postTitleErr.error.issues.map((item) => item.message);
            }
            if (postContentErr.success === false) {
                postContentErrors = postContentErr.error.issues.map((item) => item.message);
            }

            if (postTitleErrors.length > 0 || postContentErrors.length > 0) {
                setInpErrors({ postTitleErrors, postContentErrors });
                setIsSubmitting(false);
                return;
            } else {
                setInpErrors({});

                const res = await fetch(`${baseBeURL}/post/add-post/${userAuthen.id}`, {
                    mode: 'cors',
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        postTitle: postTitleValue,
                        postContent: postContentValue,
                    }),
                });

                const data = await res.json();
                console.log({ data });

                if (data.ok === false) {
                    let errors = [];
                    errors.push(data.msg);

                    setInpErrors({ errors });
                    setIsSubmitting(false);
                    setBadgeType('error');
                    setBadgeMsg(data.msg);
                    showBadge();
                } else {
                    setPostTitleValue('');
                    setPostContentValue('');

                    setIsSubmitting(false);
                    closeModal();

                    setBadgeType('info');
                    setBadgeMsg(data.msg);
                    showBadge();
                }
            }
        } catch (err) {
            setIsSubmitting(false);
            console.log('err: ', err);
        }
    };

    if (
        postError !== null &&
        postQuantityError !== null &&
        postData === null &&
        postQuantityData === null &&
        postDataLoading === false &&
        postQuantityLoading === false
    ) {
        return (
            <Navigate
                to="/error"
                state={{
                    errorIssue: true,
                    errorMsg: "We can't get the info you requested currently. Please try again later.",
                }}
            ></Navigate>
        );
    } else {
        return (
            <PageLayout
                showModal={showModal}
                closeModalBtnHandler={closeModalBtnHandler}
                modalSubmitBtnHandler={submitPostModalBtnHandler}
                isSubmittingModal={isSubmitting}
                modalType="addPost"
                modalBoxRef={modalBoxRef}
                modalPostTitleValue={postTitleValue}
                modalPostTitleOnChangeHandler={postTitleOnChangeHandler}
                modalPostContentValue={postContentValue}
                modalPostContentOnChangeHandler={postContentOnChangeHandler}
                showErrorBoxInModal={!!Object.keys(inpErrors).length}
                modalErrorObj={inpErrors}
            >
                <div className="postsPageContent">
                    {postDataLoading === false &&
                        postQuantityLoading === false &&
                        postData !== null &&
                        postQuantityData !== null && (
                            <section className="sortControllers">
                                <SelectionController
                                    labelText={'Sort by:'}
                                    selectId={'sortBy'}
                                    selectOptionList={sortByOptsList}
                                    selectValue={sortByValue}
                                    selectOnChangeHandler={sortByOnChangeHandler}
                                ></SelectionController>
                                <SelectionController
                                    labelText={'Post per page:'}
                                    selectId={'postsPerPage'}
                                    selectOptionList={postPerPageOptsList}
                                    selectValue={postsPerPageValue}
                                    selectOnChangeHandler={postsPerPageOnChangeHandler}
                                ></SelectionController>
                            </section>
                        )}

                    <section className="postsWrapper">
                        {postDataLoading === true && (
                            <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="masonryGrid"
                                columnClassName="masonryGridColumn"
                            >
                                {[...Array(6)].map((_, index) => {
                                    return (
                                        <PostItem
                                            key={index}
                                            isSkeletonLoading={true}
                                            showPostItemHeader={true}
                                            isPostTitleClickable={true}
                                            isNumberPostCommentsClickable={true}
                                            isUserAuthenticated={!!userAuthen}
                                            showBadgeHandler={showBadge}
                                            disableDeleteBtn={true}
                                            deletePostBtnHandler={() => {}}
                                        ></PostItem>
                                    );
                                })}
                            </Masonry>
                        )}

                        {postDataLoading === false && postData !== null && (
                            <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="masonryGrid"
                                columnClassName="masonryGridColumn"
                            >
                                {postData.posts.map((item) => {
                                    return (
                                        <PostItem
                                            key={item.post_id}
                                            usrAvatar={item.avatar_url}
                                            usrFirstName={item.first_name}
                                            usrLastName={item.last_name}
                                            usrUserName={item.user_name}
                                            isUsrAdmin={item.is_admin}
                                            postId={item.post_id}
                                            postTitle={item.post_title}
                                            postContent={item.post_content}
                                            numberPostComments={item.number_comment}
                                            postDate={item.created_at}
                                            isSkeletonLoading={false}
                                            showPostItemHeader={true}
                                            isPostTitleClickable={true}
                                            isNumberPostCommentsClickable={true}
                                            isUserAuthenticated={!!userAuthen}
                                            showBadgeHandler={showBadge}
                                            disableDeleteBtn={true}
                                            deletePostBtnHandler={() => {}}
                                        ></PostItem>
                                    );
                                })}
                            </Masonry>
                        )}
                    </section>

                    {postDataLoading === false &&
                        postQuantityLoading === false &&
                        postData !== null &&
                        postQuantityData !== null && (
                            <section className="pageController">
                                <p>
                                    Showing <span>{postData.posts.length - postsPerPageValue + 1}</span> -{' '}
                                    <span>{postData.posts.length}</span> of <span>{postQuantityData.postQuantity}</span>{' '}
                                    posts
                                </p>

                                <div className="paginationControllers">
                                    <MainBtn
                                        btnClass={'prevBtn'}
                                        onClickHandler={(e) => {
                                            if (userAuthen === null) {
                                                e.preventDefault();
                                                showBadge();
                                            }
                                        }}
                                    >
                                        <ArrowLeftIcon></ArrowLeftIcon>
                                        <span>Prev</span>
                                    </MainBtn>
                                    <MainBtn
                                        btnClass={'nextBtn'}
                                        onClickHandler={(e) => {
                                            if (userAuthen === null) {
                                                e.preventDefault();
                                                showBadge();
                                            }
                                        }}
                                    >
                                        <span>Next</span>
                                        <ArrowRightIcon></ArrowRightIcon>
                                    </MainBtn>
                                </div>
                            </section>
                        )}
                </div>

                {postDataLoading === false && postData !== null && (
                    <div className="addPostBtnWrapper">
                        <button
                            onMouseEnter={() => {
                                helperHoverTimer.current = setTimeout(() => {
                                    setShowHelperAddPostBtn(true);
                                }, 260);
                            }}
                            onMouseLeave={() => {
                                clearTimeout(helperHoverTimer.current);
                                setShowHelperAddPostBtn(false);
                            }}
                            onClick={(e) => {
                                if (userAuthen === null) {
                                    e.preventDefault();
                                    showBadge();
                                } else {
                                    openModal();
                                }
                            }}
                            className="postPageAddPostBtn"
                        >
                            <PlusIcon></PlusIcon>
                        </button>
                        <span className={`addPostBtnHelper ${showHelperAddPostBtn === true ? 'show' : 'hidden'}`}>
                            Add post
                        </span>
                    </div>
                )}
            </PageLayout>
        );
    }
};

export default App;
