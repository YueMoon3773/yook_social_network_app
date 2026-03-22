import { useState } from 'react';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import { TrashBinNormalIcon, TrashBinHoverIcon } from '../../../assets/svgIcon';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './DeletePostCommentBtn.scss';

const deletePostCmtBtnSchema = z.object({
    isBtnDisabled: z.boolean().default(true).optional(),
    onClickHandler: z.function(),
});

const DeletePostCommentBtn = ({ isBtnDisabled = true, onClickHandler }) => {
    const [isBtnHover, setIsBtnHover] = useState(false);

    return (
        <button
            className={`${pageBaseStyles.mainBtn} deletePostCmtBtn ${isBtnDisabled ? 'disabled' : ''}`}
            onClick={onClickHandler}
            onMouseOver={() => setIsBtnHover(true)}
            onMouseLeave={() => setIsBtnHover(false)}
            disabled={isBtnDisabled}
        >
            {isBtnHover ? <TrashBinHoverIcon></TrashBinHoverIcon> : <TrashBinNormalIcon></TrashBinNormalIcon>}
        </button>
    );
};

export default ValidatedComponent(DeletePostCommentBtn, deletePostCmtBtnSchema);
