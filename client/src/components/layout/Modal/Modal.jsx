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
    closeModalBtnHandler: z.function().optional(),
});

const Modal = ({ showModal, closeModalBtnHandler }) => {
    const [isCloseBtnHover, setIsCloseBtnHover] = useState(false);

    return (
        <div className={`modalWrapper ${showModal === null ? '' : showModal ? 'show' : 'hidden'}`}>
            <div className={`modal ${showModal === null ? '' : showModal ? 'show' : 'hidden'}`}>
                <section className="modalHeader">
                    <h1>What's on your mind?</h1>
                    <button
                        onMouseEnter={() => setIsCloseBtnHover(true)}
                        onMouseLeave={() => setIsCloseBtnHover(false)}
                        onClick={closeModalBtnHandler}
                    >
                        {isCloseBtnHover === true ? <CloseIconFill></CloseIconFill> : <CloseIconEmpty></CloseIconEmpty>}
                    </button>
                </section>
                <section className="modalBody">
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
                </section>
                <section className="modalFooter">
                    <MainBtn btnClass={'submitPostBtn'} onClickHandler={() => {}}>
                        Post
                    </MainBtn>
                </section>
            </div>
        </div>
    );
};

export default ValidatedComponent(Modal, modalSchema);
