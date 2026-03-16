import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './RoundToggleButton.scss';

const roundToggleBtnSchema = z.object({
    showToggleLabel: z.boolean().optional(),
    toggleBtnLabel: z
        .string()
        .trim()
        .min(1, { message: 'if toggleBtnLabel is provided, it must be at least 01 character.' })
        .optional(),
    toggleBtnId: z
        .string()
        .trim()
        .min(1, { message: 'if toggleBtnId is provided, it must be at least 01 character.' })
        .optional(),
    onClickHandler: z.function(),
});

const RoundToggleButton = ({ showToggleLabel = false, toggleBtnLabel, toggleBtnId, onClickHandler }) => {
    if (toggleBtnId && !showToggleLabel) {
        return <span className="toggleBtnError">toggleBtnId must be provided and showToggleLabel = true</span>;
    } else {
        return (
            <div className="toggleBtnWrapper">
                {showToggleLabel && (
                    <label htmlFor={toggleBtnId} className="toggleBtnLabel">
                        {toggleBtnLabel}
                    </label>
                )}
                <label className="toggleBtn">
                    <input
                        name={showToggleLabel ? toggleBtnId : undefined}
                        id={showToggleLabel ? toggleBtnId : undefined}
                        type="checkbox"
                        onClick={onClickHandler}
                    />
                    <span className="toggleBtnSlider"></span>
                </label>
            </div>
        );
    }
};

export default ValidatedComponent(RoundToggleButton, roundToggleBtnSchema);
