import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './MainInp.scss';

const mainInpSchema = z.object({
    inpType: z.string().default('text'),
    inpClass: z.string().optional(),
    inpLabel: z.string(),
    inpId: z.string(),
    onChangeHandler: z.function(),
});

const MainInp = ({ inpType = 'text', inpLabel, inpId, inpClass, onChangeHandler }) => {
    return (
        <div className="mainInpWrapper">
            <input
                id={inpId}
                name={inpId}
                type={inpType}
                className={`mainInpStyle ${inpClass}`}
                onChange={onChangeHandler}
                placeholder={inpLabel}
            />
            <label className="mainInpLabel" htmlFor={inpId}>
                {inpLabel}
            </label>
        </div>
    );
};

export default ValidatedComponent(MainInp, mainInpSchema);
