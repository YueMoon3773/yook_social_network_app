import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './MainTextArea.scss';

const mainInpSchema = z.object({
    textAreaLabel: z.string(),
    textAreaId: z.string(),
    textAreaClass: z.string().optional(),
    textAreValue: z.string().nullable(),
    onChangeHandler: z.function().nullable(),
});

const MainTextArea = ({ textAreaLabel, textAreaId, textAreaClass, textAreValue, onChangeHandler }) => {
    return (
        <div className="mainTextAreaWrapper">
            <textarea
                id={textAreaId}
                name={textAreaId}
                className={`mainTextAreaStyle ${textAreaClass}`}
                value={textAreValue}
                onChange={onChangeHandler}
                placeholder={textAreaLabel}
            ></textarea>
            <label className="mainTextAreaLabel" htmlFor={textAreaId}>
                {textAreaLabel}
            </label>
        </div>
    );
};

export default ValidatedComponent(MainTextArea, mainInpSchema);
