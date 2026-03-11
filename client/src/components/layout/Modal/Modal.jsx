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
});

const Modal = ({ showModal = null, modalType = 'addPost', modalBoxRef, closeModalBtnHandler }) => {
    const [isCloseBtnHover, setIsCloseBtnHover] = useState(false);

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
                        {isCloseBtnHover === true ? <CloseIconFill></CloseIconFill> : <CloseIconEmpty></CloseIconEmpty>}
                    </button>
                </section>

                <section className="modalBody">
                    {modalType === 'addPost' && (
                        <div className="addPostModalBody">
                            <MainInp
                                inpLabel={'Title'}
                                inpId={'postTitle'}
                                inpClass={'postTitle'}
                                onChangeHandler={() => {}}
                            ></MainInp>
                            <MainTextArea
                                textAreaLabel={'Message'}
                                textAreaId={'postContent'}
                                textAreaClass={'postContent'}
                                onChangeHandler={() => {}}
                            ></MainTextArea>
                        </div>
                    )}

                    {modalType === 'editUsrProfile' && (
                        <div className="editUsrProfileModalBody">
                            <MainInp
                                inpLabel={'First name *'}
                                inpId={'usrProfileFirstName'}
                                inpClass={'usrProfileFirstName'}
                                onChangeHandler={() => {}}
                            ></MainInp>
                            <MainInp
                                inpLabel={'Last name *'}
                                inpId={'usrProfileLAstName'}
                                inpClass={'usrProfileLAstName'}
                                onChangeHandler={() => {}}
                            ></MainInp>
                            <MainInp
                                inpLabel={'Avatar URL'}
                                inpId={'usrProfileAvatarUrl'}
                                inpClass={'usrProfileAvatarUrl'}
                                inpType={'url'}
                                onChangeHandler={() => {}}
                            ></MainInp>
                            <MainTextArea
                                textAreaLabel={'Bio'}
                                textAreaId={'usrProfileBio'}
                                textAreaClass={'usrProfileBio'}
                                onChangeHandler={() => {}}
                            ></MainTextArea>
                            <MainInp
                                inpLabel={'Location'}
                                inpId={'usrProfileLocation'}
                                inpClass={'usrProfileLocation'}
                                onChangeHandler={() => {}}
                            ></MainInp>
                            <MainInp
                                inpLabel={'Birthday'}
                                inpId={'usrProfileBirthday'}
                                inpClass={'usrProfileBirthday'}
                                inpType={'date'}
                                onChangeHandler={() => {}}
                            ></MainInp>
                        </div>
                    )}
                </section>

                <section className="modalFooter">
                    <MainBtn btnClass={'submitPostBtn'} onClickHandler={() => {}}>
                        {modalType === 'addPost' && 'Post'}
                        {modalType === 'editUsrProfile' && 'Update'}
                    </MainBtn>
                </section>
            </div>
        </div>
    );
};

export default ValidatedComponent(Modal, modalSchema);
