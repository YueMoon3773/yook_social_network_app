import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './ErrorBox.scss';

const formErrorBoxSchema = z.object({
    errors: z.looseObject({}),
    children: z.unknown().optional(),
});

const ErrorBox = ({ errors, children }) => {
    // console.log({ errors });

    return (
        <div className="errorBox">
            <h4 className="errorBoxHeading">
                {errors && errors.errors && errors.errors?.length > 0
                    ? 'Notice'
                    : 'Please fix the below issue(s) before submitting'}
            </h4>
            <ul className="errorsWrapper">
                {errors.firstNameErrors && errors.firstNameErrors.length !== 0 && (
                    <>
                        {errors.firstNameErrors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
                {errors.lastNameErrors && errors.lastNameErrors.length !== 0 && (
                    <>
                        {errors.lastNameErrors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
                {errors.userNameErrors && errors.userNameErrors.length !== 0 && (
                    <>
                        {errors.userNameErrors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
                {errors.pwdErrors && errors.pwdErrors.length !== 0 && (
                    <>
                        {errors.pwdErrors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
                {errors.avatarUrlErrors && errors.avatarUrlErrors.length !== 0 && (
                    <>
                        {errors.avatarUrlErrors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
                {errors.bioErrors && errors.bioErrors.length !== 0 && (
                    <>
                        {errors.bioErrors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
                {errors.locationErrors && errors.locationErrors.length !== 0 && (
                    <>
                        {errors.locationErrors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
                {errors.birthdayErrors && errors.birthdayErrors.length !== 0 && (
                    <>
                        {errors.birthdayErrors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
                {errors.postTitleErrors && errors.postTitleErrors.length !== 0 && (
                    <>
                        {errors.postTitleErrors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
                {errors.postContentErrors && errors.postContentErrors.length !== 0 && (
                    <>
                        {errors.postContentErrors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
                {errors.commentContentErrors && errors.commentContentErrors.length !== 0 && (
                    <>
                        {errors.commentContentErrors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
                {errors.otherErrors && errors.otherErrors.length !== 0 && (
                    <>
                        {errors.otherErrors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
                {errors.errors && errors.errors.length !== 0 && (
                    <>
                        {errors.errors.map((item, index) => {
                            return (
                                <li key={index} className="errorItem">
                                    {item}
                                </li>
                            );
                        })}
                    </>
                )}
            </ul>
        </div>
    );
};

export default ValidatedComponent(ErrorBox, formErrorBoxSchema);
