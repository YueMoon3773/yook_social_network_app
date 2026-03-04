import { z } from 'zod';

import { useTheme } from '../../../hooks/useTheme';
import { useHeaderPassedTopPage } from '../../../hooks/useHeaderPassedTopOfPage';

import ValidatedComponent from '../../../utils/validateComponentProps';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import PageContent from '../PageContent/PageContent';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './PageLayout.scss';

const pageLayoutSchema = z.object({
    children: z.unknown().optional(),
});

const PageLayout = ({ children }) => {
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
        </div>
    );
};

export default ValidatedComponent(PageLayout, pageLayoutSchema);
