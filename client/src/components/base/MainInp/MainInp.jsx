import { useState } from 'react';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import { ShowPwdIcon, HidePwdIcon } from '../../../assets/svgIcon';

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
    const [inputType, setInputType] = useState(inpType);
    const [isShowingPwd, setIsShowingPwd] = useState(false);

    const showPwdBtnOnClickHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        setInputType((prev) => {
            if (prev === 'password') {
                setIsShowingPwd(true);
                return 'text';
            }
            if (prev === 'text') {
                setIsShowingPwd(false);
                return 'password';
            }
        });
    };

    return (
        <div className="mainInpWrapper">
            <input
                id={inpId}
                name={inpId}
                type={inputType}
                // type={inpType}
                className={`mainInpStyle ${inpClass}`}
                value={inpValue}
                onChange={onChangeHandler}
                placeholder={inpLabel}
                disabled={isDisabled}
            />
            <label className="mainInpLabel" htmlFor={inpId}>
                {inpLabel}
            </label>

            {inpType === 'password' && (
                <button onClick={showPwdBtnOnClickHandler} className="showPwdBtn" disabled={isDisabled}>
                    {isShowingPwd ? <ShowPwdIcon></ShowPwdIcon> : <HidePwdIcon></HidePwdIcon>}
                </button>
            )}
        </div>
    );
};

export default ValidatedComponent(MainInp, mainInpSchema);
