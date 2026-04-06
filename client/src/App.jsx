import { useState, useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';

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
    { id: 1, content: 'Newest to Oldest', value: 'newToOld' },
    { id: 2, content: 'Oldest to Newest', value: 'oldToNew' },
    { id: 3, content: 'Most comments', value: 'mostCmt' },
    { id: 4, content: 'Fewest comments', value: 'leastCmt' },
];
const postPerPageOptsList = [
    { id: 1, content: 25, value: '25' },
    { id: 2, content: 50, value: '50' },
    { id: 3, content: 100, value: '100' },
];
const baseBeURL = import.meta.env.VITE_API_BASE_URL;

const App = () => {
    /* Check user authentication */
    const { user:userAuthen, loading: userAuthenLoading } = useAuthenticate();
    // console.log({ userAuthen, userAuthenLoading });

    /* UI/UX variables + set up */
    const [showHelperAddPostBtn, setShowHelperAddPostBtn] = useState(false);
    const helperHoverTimer = useRef(null);
    const { showModal, modalBoxRef, openModal, closeModal, resetModalState } = useOpenCloseModal();

    // const { isShowBadge, showBadge, badgeType, setBadgeType, badgeMsg, setBadgeMsg } = useShowBadge();
    const { showBadge, setBadgeType, setBadgeMsg } = useShowBadge();
    // const [badgeType, setBadgeType] = useState(null);
    // const [badgeMsg, setBadgeMsg] = useState(null);
    // console.table([isShowBadge, badgeType, badgeMsg]);
    // console.log({ badgeType, badgeMsg });

    /* Controller values */
    const [postTitleValue, setPostTitleValue] = useState('');
    const [postContentValue, setPostContentValue] = useState('');

    const [inpErrors, setInpErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [sortByValue, setSortByValue] = useState(sortByOptsList[0].value);
    const [postsPerPageValue, setPostsPerPageValue] = useState('10');

    // console.log({ sortByValue, postsPerPageValue });

    /* Variables for fetching from API */
    const [postApiUrl, setPostApiUrl] = useState(`${baseBeURL}/post/get-posts?postQuantity=10`);
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
    // console.log({ postApiUrl });
    // console.log({ postData, postError, postDataLoading });
    // console.log({ postQuantityData, postQuantityError, postQuantityLoading });

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
            setPostsPerPageValue('10');
        } else {
            setBadgeType('info');
            setBadgeMsg(`You logged in as ${userAuthen.user_name} successfully`);
            setPostsPerPageValue(postPerPageOptsList[0].value);
            showBadge();
        }
    }, [userAuthen]);

    /* Refetch 25 posts if user authentication session exist */
    /* Otherwise fetch 10 posts only */
    useEffect(() => {
        if (userAuthen !== null) {
            setPostApiUrl(`${baseBeURL}/post/get-posts?postQuantity=25`);
        } else {
            setPostApiUrl(`${baseBeURL}/post/get-posts?postQuantity=10`);
        }
    }, [userAuthen]);

    /* Handling user action functions */
    const closeModalBtnHandler = () => closeModal();

    const sortByOnChangeHandler = (e) => {
        if (userAuthen === null) {
            e.preventDefault();
            showBadge();
        } else {
            const newSortByVal = e.target.value;
            setSortByValue(newSortByVal);
            setPostApiUrl(`${baseBeURL}/post/get-posts?sortBy=${newSortByVal}&postQuantity=${postsPerPageValue}`);
        }
    };

    const postsPerPageOnChangeHandler = (e) => {
        if (userAuthen === null) {
            e.preventDefault();
            showBadge();
        } else {
            const newPostsPerPageVal = e.target.value;
            setPostsPerPageValue(newPostsPerPageVal);
            setPostApiUrl(`${baseBeURL}/post/get-posts?sortBy=${sortByValue}&postQuantity=${newPostsPerPageVal}`);
        }
    };

    const postTitleOnChangeHandler = (e) => {
        setPostTitleValue(e.target.value);
    };

    const postContentOnChangeHandler = (e) => {
        setPostContentValue(e.target.value);
    };

    const submitPostModalBtnHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
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
                                            postDate={item.post_created_at}
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
