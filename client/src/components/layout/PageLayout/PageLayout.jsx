import { z } from 'zod';

import { useTheme } from '../../../hooks/useTheme';
import { useHeaderPassedTopPage } from '../../../hooks/useHeaderPassedTopOfPage';

import ValidatedComponent from '../../../utils/validateComponentProps';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import PageContent from '../PageContent/PageContent';
import Modal from '../Modal/Modal';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './PageLayout.scss';

const pageLayoutSchema = z.object({
    showModal: z.boolean().default(false).optional(),
    closeModalBtnHandler: z.function().optional(),
    children: z.unknown().optional(),
});

const PageLayout = ({ showModal = false, closeModalBtnHandler, children }) => {
    const { theme } = useTheme();
    const { headerPassedTopPage, pageMaker, observerRoot } = useHeaderPassedTopPage();

    // console.log({ headerPassedTopPage });
    // console.log(pageMaker.current);
    // console.log(observerRoot.current);

    return (
        <div className={`${pageBaseStyles.page}`} data-theme={theme}>
            <Header expandHeaderBottomBorder={headerPassedTopPage}></Header>
            <main className={`${pageBaseStyles.pageContent}`}>
                <SideBar></SideBar>
                <PageContent pageMaker={pageMaker} observerRoot={observerRoot}>
                    {children}
                </PageContent>
            </main>
            {showModal && <Modal showModal={showModal} closeModalBtnHandler={closeModalBtnHandler}></Modal>}
        </div>
    );
};

export default ValidatedComponent(PageLayout, pageLayoutSchema);
