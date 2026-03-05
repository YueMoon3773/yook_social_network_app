import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './MainInp.scss';

const mainInpSchema = z.object({
    inpType: z.string().default('text'),
    inpLabel: z.string(),
    inpId: z.string(),
    inpClass: z.string().optional(),
    onChangeHandler: z.function(),
});

const MainInp = ({ inpType = 'text', inpLabel, inpId, inpClass, onChangeHandler }) => {
    return (
        <label htmlFor={inpId}>
            {inpLabel}
            <input id={inpId} name={inpId} type={inpType} className={inpClass} onChange={onChangeHandler} />
        </label>
    );
};

export default ValidatedComponent(MainInp, mainInpSchema);
