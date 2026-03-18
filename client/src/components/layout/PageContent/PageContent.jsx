import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './PageContent.scss';

const pageContentSchema = z.looseObject({
    pageMaker: z.unknown().optional(),
    observerRoot: z.unknown().optional(),
    showSideBarInMobileView: z.boolean().optional(),
    children: z.unknown().optional(),
});

const PageContent = ({ pageMaker, observerRoot, showSideBarInMobileView, children }) => {
    // console.log({ children });

    return (
        <div className={`contentWrapper ${showSideBarInMobileView ? 'sideBarShown' : ''}`} ref={observerRoot}>
            <div ref={pageMaker} className="pageMaker"></div>
            <div className={`contentSection`}>{children}</div>
        </div>
    );
};

export default ValidatedComponent(PageContent, pageContentSchema);
