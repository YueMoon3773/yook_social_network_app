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
    modalSubmitBtnHandler: z.function().optional(),
    isSubmittingModal: z.boolean().nullable().optional(),
    modalPostTitleValue: z.string().nullable().optional(),
    modalPostTitleOnChangeHandler: z.function().nullable().optional(),
    modalPostContentValue: z.string().nullable().optional(),
    modalPostContentOnChangeHandler: z.function().nullable().optional(),
    modalProfileFirstNameValue: z.string().nullable().optional(),
    modalProfileFirstNameOnChangeHandler: z.function().nullable().optional(),
    modalProfileLastNameValue: z.string().nullable().optional(),
    modalProfileLastNameOnChangeHandler: z.function().nullable().optional(),
    modalProfileAvatarUrlValue: z.string().trim().nullable().optional(),
    modalProfileAvatarUrlOnChangeHandler: z.function().nullable().optional(),
    modalProfileBioValue: z.string().nullable().optional(),
    modalProfileBioOnChangeHandler: z.function().nullable().optional(),
    modalProfileLocationValue: z.string().nullable().optional(),
    modalProfileLocationOnChangeHandler: z.function().nullable().optional(),
    modalProfileBirthdayValue: z.string().nullable().optional(),
    modalProfileBirthdayOnChangeHandler: z.function().nullable().optional(),
    showErrorBoxInModal: z.boolean().nullable().optional(),
    modalErrorObj: z.looseObject({}).nullable().optional(),
    children: z.unknown().optional(),
});

const PageLayout = ({
    showModal = null,
    closeModalBtnHandler,
    modalType,
    modalBoxRef,
    modalSubmitBtnHandler,
    isSubmittingModal = false,
    modalPostTitleValue = null,
    modalPostTitleOnChangeHandler = null,
    modalPostContentValue = null,
    modalPostContentOnChangeHandler = null,
    modalProfileFirstNameValue = null,
    modalProfileFirstNameOnChangeHandler = null,
    modalProfileLastNameValue = null,
    modalProfileLastNameOnChangeHandler = null,
    modalProfileAvatarUrlValue = null,
    modalProfileAvatarUrlOnChangeHandler = null,
    modalProfileBioValue = null,
    modalProfileBioOnChangeHandler = null,
    modalProfileLocationValue = null,
    modalProfileLocationOnChangeHandler = null,
    modalProfileBirthdayValue = null,
    modalProfileBirthdayOnChangeHandler = null,
    showErrorBoxInModal = false,
    modalErrorObj,
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
                    submitBtnHandler={modalSubmitBtnHandler}
                    isSubmitting={isSubmittingModal}
                    modalType={modalType}
                    modalBoxRef={modalBoxRef}
                    postTitleValue={modalPostTitleValue}
                    postTitleOnChangeHandler={modalPostTitleOnChangeHandler}
                    postContentValue={modalPostContentValue}
                    postContentOnChangeHandler={modalPostContentOnChangeHandler}
                    profileFirstNameValue={modalProfileFirstNameValue}
                    profileFirstNameOnChangeHandler={modalProfileFirstNameOnChangeHandler}
                    profileLastNameValue={modalProfileLastNameValue}
                    profileLastNameOnChangeHandler={modalProfileLastNameOnChangeHandler}
                    profileAvatarUrlValue={modalProfileAvatarUrlValue}
                    profileAvatarUrlOnChangeHandler={modalProfileAvatarUrlOnChangeHandler}
                    profileBioValue={modalProfileBioValue}
                    profileBioOnChangeHandler={modalProfileBioOnChangeHandler}
                    profileLocationValue={modalProfileLocationValue}
                    profileLocationOnChangeHandler={modalProfileLocationOnChangeHandler}
                    profileBirthdayValue={modalProfileBirthdayValue}
                    profileBirthdayOnChangeHandler={modalProfileBirthdayOnChangeHandler}
                    showErrorBox={showErrorBoxInModal}
                    errorObj={modalErrorObj}
                ></Modal>
            )}
        </div>
    );
};

export default ValidatedComponent(PageLayout, pageLayoutSchema);
