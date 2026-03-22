import { useState } from 'react';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import { CloseIconEmpty, CloseIconFill } from '../../../assets/svgIcon';
import MainInp from '../../base/MainInp/MainInp';
import MainTextArea from '../../base/MainTextArea/MainTextArea';
import MainBtn from '../../base/MainBtn/MainBtn';

import './Modal.scss';

const modalSchema = z.object({
    showModal: z.boolean().nullable().optional(),
    modalType: z.string().optional(),
    modalBoxRef: z.unknown(),
    closeModalBtnHandler: z.function().optional(),
    postTitleValue: z.string().trim().nullable().optional(),
    postTitleOnChangeHandler: z.function().nullable().optional(),
    postContentValue: z.string().trim().nullable().optional(),
    postContentOnChangeHandler: z.function().nullable().optional(),
    profileFirstNameValue: z.string().trim().nullable().optional(),
    profileFirstNameOnChangeHandler: z.function().nullable().optional(),
    profileLastNameValue: z.string().trim().nullable().optional(),
    profileLastNameOnChangeHandler: z.function().nullable().optional(),
    profileAvatarUrlValue: z.string().trim().nullable().optional(),
    profileAvatarUrlOnChangeHandler: z.function().nullable().optional(),
    profileBioValue: z.string().trim().nullable().optional(),
    profileBioOnChangeHandler: z.function().nullable().optional(),
    profileLocationValue: z.string().trim().nullable().optional(),
    profileLocationOnChangeHandler: z.function().nullable().optional(),
    profileBirthdayValue: z.string().trim().nullable().optional(),
    profileBirthdayOnChangeHandler: z.function().nullable().optional(),
});

const Modal = ({
    showModal = null,
    modalType = 'addPost',
    modalBoxRef,
    closeModalBtnHandler,
    postTitleValue = null,
    postTitleOnChangeHandler = null,
    postContentValue = null,
    postContentOnChangeHandler = null,
    profileFirstNameValue = null,
    profileFirstNameOnChangeHandler = null,
    profileLastNameValue = null,
    profileLastNameOnChangeHandler = null,
    profileAvatarUrlValue = null,
    profileAvatarUrlOnChangeHandler = null,
    profileBioValue = null,
    profileBioOnChangeHandler = null,
    profileLocationValue = null,
    profileLocationOnChangeHandler = null,
    profileBirthdayValue = null,
    profileBirthdayOnChangeHandler = null,
}) => {
    const [isCloseBtnHover, setIsCloseBtnHover] = useState(false);

    if (
        modalType === 'addPost' &&
        (postTitleValue === null ||
            postTitleOnChangeHandler === null ||
            postContentValue === null ||
            postContentValue === null)
    ) {
        return (
            <div
                className={`modalWrapper ${showModal === null ? '' : showModal ? 'show' : 'hidden'} errorModalWrapper`}
            >
                <h1 className={'modalErrorMsg'}>
                    postTitleValue, postTitleOnChangeHandler, postContentValue, postContentOnChangeHandler must be
                    provided in ADD POST MODAL
                </h1>
            </div>
        );
    } else if (
        modalType === 'editUsrProfile' &&
        (profileFirstNameValue === null ||
            profileFirstNameOnChangeHandler === null ||
            profileLastNameValue === null ||
            profileLastNameOnChangeHandler === null ||
            profileAvatarUrlValue === null ||
            profileAvatarUrlOnChangeHandler === null ||
            profileBioValue === null ||
            profileBioOnChangeHandler === null ||
            profileLocationValue === null ||
            profileLocationOnChangeHandler === null ||
            profileBirthdayValue === null ||
            profileBirthdayOnChangeHandler === null)
    ) {
        return (
            <div
                className={`modalWrapper ${showModal === null ? '' : showModal ? 'show' : 'hidden'} errorModalWrapper`}
            >
                <h1 className={'modalErrorMsg'}>
                    profileFirstNameValue, profileFirstNameOnChangeHandler, profileLastNameValue,
                    profileLastNameOnChangeHandler, profileAvatarUrlValue, profileAvatarUrlOnChangeHandler,
                    profileBioValue, profileBioOnChangeHandler, profileLocationValue, profileLocationOnChangeHandler,
                    profileBirthdayValue, profileBirthdayOnChangeHandler must be provided in edit profile EDIT PROFILE
                    MODAL
                </h1>
            </div>
        );
    } else {
        return (
            <div className={`modalWrapper ${showModal === null ? '' : showModal ? 'show' : 'hidden'} ${modalType}`}>
                <div
                    ref={modalBoxRef}
                    className={`modal ${showModal === null ? '' : showModal ? 'show' : 'hidden'} ${modalType}`}
                >
                    <section className="modalHeader">
                        <h1>
                            {modalType === 'addPost' && "What's on your mind?"}
                            {modalType === 'editUsrProfile' && 'Update your profile'}
                        </h1>
                        <button
                            onMouseEnter={() => setIsCloseBtnHover(true)}
                            onMouseLeave={() => setIsCloseBtnHover(false)}
                            onClick={closeModalBtnHandler}
                        >
                            {isCloseBtnHover === true ? (
                                <CloseIconFill></CloseIconFill>
                            ) : (
                                <CloseIconEmpty></CloseIconEmpty>
                            )}
                        </button>
                    </section>

                    <section className="modalBody">
                        {modalType === 'addPost' && (
                            <div className="addPostModalBody">
                                <MainInp
                                    inpLabel={'Title'}
                                    inpId={'postTitle'}
                                    inpClass={'postTitle'}
                                    inpValue={postTitleValue}
                                    onChangeHandler={postTitleOnChangeHandler}
                                ></MainInp>
                                <MainTextArea
                                    textAreaLabel={'Message'}
                                    textAreaId={'postContent'}
                                    textAreaClass={'postContent'}
                                    textAreValue={postContentValue}
                                    onChangeHandler={postContentOnChangeHandler}
                                ></MainTextArea>
                            </div>
                        )}

                        {modalType === 'editUsrProfile' && (
                            <div className="editUsrProfileModalBody">
                                <MainInp
                                    inpLabel={'First name*'}
                                    inpId={'usrProfileFirstName'}
                                    inpClass={'usrProfileFirstName'}
                                    inpValue={profileFirstNameValue}
                                    onChangeHandler={profileFirstNameOnChangeHandler}
                                ></MainInp>
                                <MainInp
                                    inpLabel={'Last name*'}
                                    inpId={'usrProfileLastName'}
                                    inpClass={'usrProfileLastName'}
                                    inpValue={profileLastNameValue}
                                    onChangeHandler={profileLastNameOnChangeHandler}
                                ></MainInp>
                                <MainInp
                                    inpLabel={'Avatar URL'}
                                    inpId={'usrProfileAvatarUrl'}
                                    inpClass={'usrProfileAvatarUrl'}
                                    inpType={'url'}
                                    inpValue={profileAvatarUrlValue}
                                    onChangeHandler={profileAvatarUrlOnChangeHandler}
                                ></MainInp>
                                <MainTextArea
                                    textAreaLabel={'Bio'}
                                    textAreaId={'usrProfileBio'}
                                    textAreaClass={'usrProfileBio'}
                                    textAreValue={profileBioValue}
                                    onChangeHandler={profileBioOnChangeHandler}
                                ></MainTextArea>
                                <MainInp
                                    inpLabel={'Location'}
                                    inpId={'usrProfileLocation'}
                                    inpClass={'usrProfileLocation'}
                                    inpValue={profileLocationValue}
                                    onChangeHandler={profileLocationOnChangeHandler}
                                ></MainInp>
                                <MainInp
                                    inpLabel={'Birthday'}
                                    inpId={'usrProfileBirthday'}
                                    inpClass={'usrProfileBirthday'}
                                    inpType={'date'}
                                    inpValue={profileBirthdayValue}
                                    onChangeHandler={profileBirthdayOnChangeHandler}
                                ></MainInp>
                            </div>
                        )}
                    </section>

                    <section className="modalFooter">
                        <MainBtn isBtnPrimaryColor={true} btnClass={'modalFooterSubmitBtn'} onClickHandler={() => {}}>
                            {modalType === 'addPost' && 'Post'}
                            {modalType === 'editUsrProfile' && 'Update'}
                        </MainBtn>
                    </section>
                </div>
            </div>
        );
    }
};

export default ValidatedComponent(Modal, modalSchema);
