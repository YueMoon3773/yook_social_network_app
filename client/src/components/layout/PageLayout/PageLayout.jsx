import { useState, useEffect, useRef } from 'react';
import { z } from 'zod';

import { useTheme } from '../../../hooks/useTheme';
import { useHeaderPassedTopPage } from '../../../hooks/useHeaderPassedTopOfPage';
import { useShowBadge } from '../../../hooks/useShowBadge';
// import { useOpenCloseModal } from '../../../hooks/useOpenCloseModal';

import ValidatedComponent from '../../../utils/validateComponentProps';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import PageContent from '../PageContent/PageContent';
import Modal from '../Modal/Modal';
import InfoBadge from '../../base/InfoBadge/InfoBadge';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './PageLayout.scss';

const pageLayoutSchema = z.object({
    showModal: z.boolean().nullable().optional(),
    closeModalBtnHandler: z.function().optional(),
    modalType: z.string().optional(),
    modalBoxRef: z.unknown().optional(),
    // showBadge: z.boolean().nullable().optional(),
    // badgeType: z.string().trim().nullable().optional(),
    // badgeMsg: z.string().trim().nullable().optional(),
    postTitleValue: z.string().trim().nullable().optional(),
    postTitleOnChangeHandler: z.function().nullable().optional(),
    postContentValue: z.string().trim().nullable().optional(),
    postContentOnChangeHandler: z.function().nullable().optional(),
    profileFirstNameValue: z.string().trim().nullable().optional(),
    profileFirstNameOnChangeHandler: z.function().nullable().optional(),
    profileLastNameValue: z.string().trim().nullable().optional(),
    profileLastNameOnChangeHandler: z.function().nullable().optional(),
    profileAvatarUrlValue: z.string().trim().nullable().optional(),
    profileAvatarUrlOnChangeHandler: z.function().nullable().optional(),
    profileBioValue: z.string().trim().nullable().optional(),
    profileBioOnChangeHandler: z.function().nullable().optional(),
    profileLocationValue: z.string().trim().nullable().optional(),
    profileLocationOnChangeHandler: z.function().nullable().optional(),
    profileBirthdayValue: z.string().trim().nullable().optional(),
    profileBirthdayOnChangeHandler: z.function().nullable().optional(),
    children: z.unknown().optional(),
});

const PageLayout = ({
    showModal = null,
    closeModalBtnHandler,
    modalType,
    modalBoxRef,
    // showBadge = false,
    // badgeType,
    // badgeMsg,
    postTitleValue = null,
    postTitleOnChangeHandler = null,
    postContentValue = null,
    postContentOnChangeHandler = null,
    profileFirstNameValue = null,
    profileFirstNameOnChangeHandler = null,
    profileLastNameValue = null,
    profileLastNameOnChangeHandler = null,
    profileAvatarUrlValue = null,
    profileAvatarUrlOnChangeHandler = null,
    profileBioValue = null,
    profileBioOnChangeHandler = null,
    profileLocationValue = null,
    profileLocationOnChangeHandler = null,
    profileBirthdayValue = null,
    profileBirthdayOnChangeHandler = null,
    children,
}) => {
    const { theme } = useTheme();
    const { headerPassedTopPage, pageMaker, observerRoot } = useHeaderPassedTopPage();

    const [showSideBar, setShowSideBar] = useState(false);
    const sideBarRef = useRef(null);
    const showSideBarBtnRef = useRef(null);

    const { isShowBadge, badgeType, badgeMsg } = useShowBadge();

    useEffect(() => {
        const checkIfUserClickOutsideSideBar = (e) => {
            if (
                sideBarRef.current &&
                !sideBarRef.current.contains(e.target) &&
                !showSideBarBtnRef.current.contains(e.target)
            ) {
                setShowSideBar(false);
            }
        };

        document.addEventListener('mousedown', checkIfUserClickOutsideSideBar);

        return () => document.removeEventListener('mousedown', checkIfUserClickOutsideSideBar);
    });

    const toggleShowSideBar = () => setShowSideBar((prev) => !prev);

    return (
        <div className={`${pageBaseStyles.page}`} data-theme={theme}>
            <Header
                expandHeaderBottomBorder={headerPassedTopPage}
                showSideBarBtnClickHandler={toggleShowSideBar}
                showSideBarBtnRef={showSideBarBtnRef}
            ></Header>
            <main className={`${pageBaseStyles.pageContent}`}>
                <SideBar sideBarRef={sideBarRef} showSideBarInMobileView={showSideBar}></SideBar>
                <PageContent pageMaker={pageMaker} observerRoot={observerRoot} showSideBarInMobileView={showSideBar}>
                    {children}
                </PageContent>
                {isShowBadge && badgeType && badgeMsg && (
                    <InfoBadge showBadge={isShowBadge} badgeType={badgeType} badgeMsg={badgeMsg}></InfoBadge>
                )}
            </main>
            {showModal !== null && (
                <Modal
                    showModal={showModal}
                    closeModalBtnHandler={closeModalBtnHandler}
                    modalType={modalType}
                    modalBoxRef={modalBoxRef}
                    postTitleValue={postTitleValue}
                    postTitleOnChangeHandler={postTitleOnChangeHandler}
                    postContentValue={postContentValue}
                    postContentOnChangeHandler={postContentOnChangeHandler}
                    profileFirstNameValue={profileFirstNameValue}
                    profileFirstNameOnChangeHandler={profileFirstNameOnChangeHandler}
                    profileLastNameValue={profileLastNameValue}
                    profileLastNameOnChangeHandler={profileLastNameOnChangeHandler}
                    profileAvatarUrlValue={profileAvatarUrlValue}
                    profileAvatarUrlOnChangeHandler={profileAvatarUrlOnChangeHandler}
                    profileBioValue={profileBioValue}
                    profileBioOnChangeHandler={profileBioOnChangeHandler}
                    profileLocationValue={profileLocationValue}
                    profileLocationOnChangeHandler={profileLocationOnChangeHandler}
                    profileBirthdayValue={profileBirthdayValue}
                    profileBirthdayOnChangeHandler={profileBirthdayOnChangeHandler}
                ></Modal>
            )}
        </div>
    );
};

export default ValidatedComponent(PageLayout, pageLayoutSchema);
