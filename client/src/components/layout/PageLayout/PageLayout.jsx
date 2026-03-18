import { useState } from 'react';
import { set, z } from 'zod';

import { useTheme } from '../../../hooks/useTheme';
import { useHeaderPassedTopPage } from '../../../hooks/useHeaderPassedTopOfPage';
// import { useOpenCloseModal } from '../../../hooks/useOpenCloseModal';

import ValidatedComponent from '../../../utils/validateComponentProps';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import PageContent from '../PageContent/PageContent';
import Modal from '../Modal/Modal';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './PageLayout.scss';

const pageLayoutSchema = z.object({
    showModal: z.boolean().nullable().optional(),
    closeModalBtnHandler: z.function().optional(),
    modalType: z.string().optional(),
    modalBoxRef: z.unknown().optional(),
    children: z.unknown().optional(),
});

const PageLayout = ({ showModal = null, closeModalBtnHandler, modalType, modalBoxRef, children }) => {
    const [showSideBar, setShowSideBar] = useState(false);
    const { theme } = useTheme();
    const { headerPassedTopPage, pageMaker, observerRoot } = useHeaderPassedTopPage();

    const toggleShowSideBar = () => setShowSideBar((prev) => !prev);

    return (
        <div className={`${pageBaseStyles.page}`} data-theme={theme}>
            <Header
                expandHeaderBottomBorder={headerPassedTopPage}
                showSideBarBtnClickHandler={toggleShowSideBar}
            ></Header>
            <main className={`${pageBaseStyles.pageContent}`}>
                <SideBar showSideBarInMobileView={showSideBar}></SideBar>
                <PageContent pageMaker={pageMaker} observerRoot={observerRoot} showSideBarInMobileView={showSideBar}>
                    {children}
                </PageContent>
            </main>
            {showModal !== null && (
                <Modal
                    showModal={showModal}
                    closeModalBtnHandler={closeModalBtnHandler}
                    modalType={modalType}
                    modalBoxRef={modalBoxRef}
                ></Modal>
            )}
        </div>
    );
};

export default ValidatedComponent(PageLayout, pageLayoutSchema);
