import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import loadingImg from '../../../assets/img/loading.gif';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './MainBtn.scss';

const btnSchema = z.object({
    isBtnPrimaryColor: z.boolean().optional(),
    isBtnLoading: z.boolean().optional(),
    btnClass: z.string().optional(),
    onClickHandler: z.function(),
    children: z.unknown().optional(),
});

const MainBtn = ({ isBtnPrimaryColor = false, isBtnLoading, btnClass, onClickHandler, children }) => {
    return (
        <button
            className={`${pageBaseStyles.mainBtn} btn ${isBtnPrimaryColor === true ? pageBaseStyles.mainPrimaryColorBtn : ''} ${btnClass ? btnClass : ''} ${isBtnLoading ? 'btnLoading' : ''}`}
            onClick={onClickHandler}
        >
            {isBtnLoading && <img className="loadingBtnImg" src={loadingImg}></img>}
            {children}
        </button>
    );
};

// export default MainBtn;
export default ValidatedComponent(MainBtn, btnSchema);
