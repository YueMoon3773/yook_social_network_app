import { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';

import { useOpenCloseModal } from './hooks/useOpenCloseModal';
import { useAuthenticate } from './hooks/useAuthenticate';
import { useShowBadge } from './hooks/useShowBadge';

import { ArrowRightIcon, ArrowLeftIcon, PlusIcon } from './assets/svgIcon';
import PageLayout from './components/layout/PageLayout/PageLayout';
import SelectionController from './components/base/SelectionController/SelectionController';
import PostItem from './components/base/PostItem/PostItem';
import MainBtn from './components/base/MainBtn/MainBtn';

import './App.scss';

import noAvatar from './assets/img/no_avatar.jpg';
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

const App = () => {
    const [showHelperAddPostBtn, setShowHelperAddPostBtn] = useState(false);
    const helperHoverTimer = useRef(null);
    const { showModal, modalBoxRef, openModal, closeModal, resetModalState } = useOpenCloseModal();

    const { user, loading: userAuthenLoading } = useAuthenticate();
    // console.log({ user });

    const { isShowBadge, showBadge } = useShowBadge();
    const [badgeType, setBadgeType] = useState(null);
    const [badgeMsg, setBadgeMsg] = useState(null);
    // console.log({ badgeType, badgeMsg });

    const [postTitleValue, setPostTitleValue] = useState('');
    const [postContentValue, setPostContentValue] = useState('');

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

    const closeModalBtnHandler = () => closeModal();

    const postTitleOnChangeHandler = (e) => {};

    const postContentOnChangeHandler = (e) => {};

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
                <section className="sortControllers">
                    <SelectionController
                        labelText={'Sort by:'}
                        selectId={'sortBy'}
                        selectOptionList={sortByOptsList}
                    ></SelectionController>
                    <SelectionController
                        labelText={'Post per page:'}
                        selectId={'postsPerPage'}
                        selectOptionList={postPerPageOptsList}
                    ></SelectionController>
                </section>

                <section className="postsWrapper">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="masonryGrid"
                        columnClassName="masonryGridColumn"
                    >
                        {testUsrPosts.map((item) => {
                            return (
                                <PostItem
                                    key={item.id}
                                    usrAvatar={noAvatar}
                                    usrFirstName={item.first_name}
                                    usrLastName={item.last_name}
                                    usrUserName={item.user_name}
                                    isUsrAdmin={item.is_admin}
                                    postId={item.id}
                                    postTitle={item.post_title}
                                    postContent={item.post_content}
                                    numberPostComments={6}
                                    postDate={'06:06 PM - 06/03/2026'}
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
                </section>

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
            </div>

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
        </PageLayout>
    );
};

export default App;
