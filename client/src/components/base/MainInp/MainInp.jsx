import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './MainInp.scss';

const mainInpSchema = z.object({
    inpType: z.string().default('text'),
    inpClass: z.string().optional(),
    isDisabled: z.boolean().optional(),
    inpLabel: z.string(),
    inpId: z.string(),
    inpValue: z.string().trim().nullable(),
    onChangeHandler: z.function().nullable(),
});

const MainInp = ({ inpType = 'text', inpLabel, inpId, inpClass, inpValue, onChangeHandler, isDisabled = false }) => {
    return (
        <div className="mainInpWrapper">
            <input
                id={inpId}
                name={inpId}
                type={inpType}
                className={`mainInpStyle ${inpClass}`}
                value={inpValue}
                onChange={onChangeHandler}
                placeholder={inpLabel}
                disabled={isDisabled}
            />
            <label className="mainInpLabel" htmlFor={inpId}>
                {inpLabel}
            </label>
        </div>
    );
};

export default ValidatedComponent(MainInp, mainInpSchema);
