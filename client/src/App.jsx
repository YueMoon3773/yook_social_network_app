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
    // Check user authentication
    const { user, loading: userAuthenLoading } = useAuthenticate();
    console.log({ user, userAuthenLoading });

    // UI/UX variables + set up
    const [showHelperAddPostBtn, setShowHelperAddPostBtn] = useState(false);
    const helperHoverTimer = useRef(null);
    const { showModal, modalBoxRef, openModal, closeModal, resetModalState } = useOpenCloseModal();

    const { isShowBadge, showBadge } = useShowBadge();
    const [badgeType, setBadgeType] = useState(null);
    const [badgeMsg, setBadgeMsg] = useState(null);
    // console.log({ badgeType, badgeMsg });

    // Controller values
    const [postTitleValue, setPostTitleValue] = useState('');
    const [postContentValue, setPostContentValue] = useState('');

    const [sortByValue, setSortByValue] = useState(sortByOptsList[0].value);
    const [postsPerPageValue, setPostsPerPageValue] = useState(postPerPageOptsList[0].value);

    // console.log({ sortByValue, postsPerPageValue });

    // Variables for fetching from API
    const [apiUrl, setApiUrl] = useState(`${baseBeURL}/post/get-posts?postQuantity=10`);

    const { data, error, loading: dataLoading, refetch } = useFetchGetData(apiUrl);
    // console.log({ apiUrl });
    console.log({ data, error, dataLoading });

    // Set page title
    useEffect(() => {
        document.title = 'Yook | Home';
        resetModalState();
    }, []);

    // Set badge info based on use authentication status
    useEffect(() => {
        if (user === null) {
            setBadgeType('warning');
            setBadgeMsg('Log in to see this content.');
        } else {
            setBadgeType('info');
            setBadgeMsg(`You logged in as ${user.user_name} successfully`);
            showBadge();
        }
    }, [user]);

    // refetch 25 posts if user authentication session exist
    useEffect(() => {
        if (user !== null) {
            setApiUrl(`${baseBeURL}/post/get-posts?postQuantity=25`);
        }
    }, [user]);

    // Handling user action functions
    const closeModalBtnHandler = () => closeModal();

    const sortByOnChangeHandler = (e) => {
        if (user === null) {
            e.preventDefault();
            showBadge();
        } else {
            const newSortByVal = e.target.value;
            setSortByValue(newSortByVal);
            setApiUrl(`${baseBeURL}/post/get-posts?sortBy=${newSortByVal}&postQuantity=${postsPerPageValue}`);
        }
    };

    const postsPerPageOnChangeHandler = (e) => {
        if (user === null) {
            e.preventDefault();
            showBadge();
        } else {
            const newPostsPerPageVal = e.target.value;
            setPostsPerPageValue(newPostsPerPageVal);
            setApiUrl(`${baseBeURL}/post/get-posts?sortBy=${sortByValue}&postQuantity=${newPostsPerPageVal}`);
        }
    };

    const postTitleOnChangeHandler = (e) => {
        setPostTitleValue(e.target.value);
    };

    const postContentOnChangeHandler = (e) => {
        setPostContentValue(e.target.value);
    };

    if (error !== null && data === null && dataLoading === false) {
        <Navigate to="/error"></Navigate>;
    } else {
        return (
            <PageLayout
                showModal={showModal}
                closeModalBtnHandler={closeModalBtnHandler}
                modalType="addPost"
                modalBoxRef={modalBoxRef}
                showBadge={isShowBadge}
                badgeType={badgeType}
                badgeMsg={badgeMsg}
                postTitleValue={postTitleValue}
                postTitleOnChangeHandler={postTitleOnChangeHandler}
                postContentValue={postContentValue}
                postContentOnChangeHandler={postContentOnChangeHandler}
            >
                <div className="postsPageContent">
                    {dataLoading === false && data !== null && (
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
                        {dataLoading === true && (
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
                                            isUserAuthenticated={!!user}
                                            showBadgeHandler={showBadge}
                                            disableDeleteBtn={true}
                                            deletePostBtnHandler={() => {}}
                                        ></PostItem>
                                    );
                                })}
                            </Masonry>
                        )}
                        {dataLoading === false && data !== null && (
                            <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="masonryGrid"
                                columnClassName="masonryGridColumn"
                            >
                                {data.posts.map((item) => {
                                    return (
                                        <PostItem
                                            key={item.id}
                                            usrAvatar={item.avatar_url}
                                            usrFirstName={item.first_name}
                                            usrLastName={item.last_name}
                                            usrUserName={item.user_name}
                                            isUsrAdmin={item.is_admin}
                                            postId={item.id}
                                            postTitle={item.post_title}
                                            postContent={item.post_content}
                                            numberPostComments={6}
                                            postDate={item.post_created_at}
                                            isSkeletonLoading={false}
                                            showPostItemHeader={true}
                                            isPostTitleClickable={true}
                                            isNumberPostCommentsClickable={true}
                                            isUserAuthenticated={!!user}
                                            showBadgeHandler={showBadge}
                                            disableDeleteBtn={true}
                                            deletePostBtnHandler={() => {}}
                                        ></PostItem>
                                    );
                                })}
                            </Masonry>
                        )}
                    </section>

                    {dataLoading === false && data !== null && (
                        <section className="pageController">
                            <p>
                                Showing <span>1</span> - <span>40</span> of <span>40</span> posts
                            </p>

                            <div className="paginationControllers">
                                <MainBtn
                                    btnClass={'prevBtn'}
                                    onClickHandler={(e) => {
                                        if (user === null) {
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
                                        if (user === null) {
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

                {dataLoading === false && data !== null && (
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
                                if (user === null) {
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
