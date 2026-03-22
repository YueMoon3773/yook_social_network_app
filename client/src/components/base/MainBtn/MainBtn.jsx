import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './MainBtn.scss';

const btnSchema = z.object({
    isBtnPrimaryColor: z.boolean().optional(),
    btnClass: z.string().optional(),
    onClickHandler: z.function(),
    children: z.unknown().optional(),
});

const MainBtn = ({ isBtnPrimaryColor = false, btnClass, onClickHandler, children }) => {
    return (
        <button
            className={`${pageBaseStyles.mainBtn} btn ${isBtnPrimaryColor === true ? pageBaseStyles.mainPrimaryColorBtn : ''} ${btnClass ? btnClass : ''}`}
            onClick={onClickHandler}
        >
            {children}
        </button>
    );
};

// export default MainBtn;
export default ValidatedComponent(MainBtn, btnSchema);
