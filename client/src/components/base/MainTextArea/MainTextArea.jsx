import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './MainTextArea.scss';

const mainInpSchema = z.object({
    textAreaType: z.string().default('text'),
    textAreaLabel: z.string(),
    textAreaId: z.string(),
    textAreaClass: z.string().optional(),
    onChangeHandler: z.function(),
});

const MainTextArea = ({ textAreaType = 'text', textAreaLabel, textAreaId, textAreaClass, onChangeHandler }) => {
    return (
        <label htmlFor={textAreaId}>
            {textAreaLabel}
            <input
                id={textAreaId}
                name={textAreaId}
                type={textAreaType}
                className={textAreaClass}
                onChange={onChangeHandler}
            />
        </label>
    );
};

export default ValidatedComponent(MainTextArea, mainInpSchema);
