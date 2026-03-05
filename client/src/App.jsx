import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

import { testData } from './utils/testDataArr';

import { ArrowRightIcon, ArrowLeftIcon, PlusIcon } from './assets/svgIcon';
import PageLayout from './components/layout/PageLayout/PageLayout';
import SelectionController from './components/base/SelectionController/SelectionController';
import PostItem from './components/base/PostItem/PostItem';
import MainBtn from './components/base/MainBtn/MainBtn';

import './App.scss';

import testImg from './assets/img/no_avatar.jpg';

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
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

    return (
        <PageLayout>
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
                        {testData.map((item) => {
                            return (
                                <PostItem
                                    key={item.id}
                                    usrAvatar={testImg}
                                    usrFirstName={item.first_name}
                                    usrLastName={item.last_name}
                                    usrUserName={item.user_name}
                                    isUsrAdmin={item.is_admin}
                                    postId={item.id}
                                    postTitle={item.post_title}
                                    postContent={item.post_content}
                                    numberPostComments={6}
                                    postDate={'06:06 PM - 06/03/2026'}
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
                        <MainBtn btnClass={'prevBtn'} onClickHandler={() => {}}>
                            <ArrowLeftIcon></ArrowLeftIcon>
                            <span>Prev</span>
                        </MainBtn>
                        <MainBtn btnClass={'nextBtn'} onClickHandler={() => {}}>
                            <span>Next</span>
                            <ArrowRightIcon></ArrowRightIcon>
                        </MainBtn>
                    </div>
                </section>
            </div>

            <div className="addPostBtnWrapper">
                <button
                    onMouseEnter={() => setShowHelperAddPostBtn(true)}
                    onMouseLeave={() => setShowHelperAddPostBtn(false)}
                    className="postPageAddPostBtn"
                >
                    <PlusIcon></PlusIcon>
                </button>
                <span className={`addPostBtnHelper ${showHelperAddPostBtn === true ? 'show' : ''}`}>Add post</span>
            </div>
        </PageLayout>
    );
};

export default App;
