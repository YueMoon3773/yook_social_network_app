import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './SelectionController.scss';

const selectionControllerSchema = z.object({
    labelText: z.string(),
    selectId: z.string(),
    selectOptionList: z.array(z.looseObject({})).min(1, 'Array options can not be empty.'),
});

const SelectionController = ({ labelText, selectId, selectOptionList }) => {
    return (
        <label htmlFor={selectId} className="sortControllerLabel">
            {labelText}
            <select name={selectId} id={selectId} className="sortSelection">
                {selectOptionList.map((option) => {
                    return <option key={option.content}>{option.content}</option>;
                })}
            </select>
        </label>
    );
};

export default ValidatedComponent(SelectionController, selectionControllerSchema);
