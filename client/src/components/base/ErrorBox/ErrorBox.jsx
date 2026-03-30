import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './ErrorBox.scss';

const logInAndRegisterErrorBoxSchema = z.object({
    errors: z.looseObject({}),
    children: z.unknown().optional(),
});

const LogInAndRegisterErrorBox = ({ errors, children }) => {
    return (
        <div className="errorBox">
            <h4 className="errorBoxHeading">
                {errors.errors.length > 0 ? 'Notice' : 'Please fix the below issue(s) before submitting'}
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

export default ValidatedComponent(LogInAndRegisterErrorBox, logInAndRegisterErrorBoxSchema);
