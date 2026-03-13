import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useOpenCloseModal } from '../../../hooks/useOpenCloseModal';

import { EditUserIcon, LocationIcon, BirthdayIcon } from '../../../assets/svgIcon';
import PageLayout from '../../layout/PageLayout/PageLayout';
import UserAvatarImg from '../../base/UserAvatarImg/UserAvatarImg';
import noAvatar from '../../../assets/img/no_avatar.jpg';

import './UserProfilePage.scss';

const UserProfilePage = () => {
    const { showModal, modalBoxRef, openModal, closeModal, resetModalState } = useOpenCloseModal();

    const usrFirstName = 'Aurelia';
    const usrLastName = 'Kshlerin';
    const usrUserName = 'aure_K_lerin';

    useEffect(() => {
        document.title = `Yook | ${usrUserName}'s profile`;
        resetModalState();
    }, []);

    const closeModalBtnHandler = () => closeModal();

    return (
        <PageLayout
            showModal={showModal}
            closeModalBtnHandler={closeModalBtnHandler}
            modalType={'editUsrProfile'}
            modalBoxRef={modalBoxRef}
        >
            <div className="userProfileWrapper">
                <div className="usrProfileAvatarWrapper">
                    <UserAvatarImg imgSrc={noAvatar}></UserAvatarImg>
                </div>

                <section className="usrProfileNamesWrapper">
                    <span>{usrFirstName + ' ' + usrLastName}</span>
                    <span>{'@' + usrUserName}</span>
                </section>

                <section className="usrProfileInfoWrapper">
                    <div className="usrProfileInfoTop">
                        <p>
                            Similique rerum corporis at. In consequatur ad maxime non sed aut deserunt. Necessitatibus
                            voluptatum id odit et corporis et ad. Voluptatum autem et quibusdam aliquid eos quae eum
                            voluptatem.
                        </p>
                    </div>

                    <div className="usrProfileInfoBottom">
                        <div className="infoBttmLeft">
                            <LocationIcon></LocationIcon>
                            <span>Lake Samir, Cook Islands</span>
                        </div>
                        <div className="infoBttmRight">
                            <BirthdayIcon></BirthdayIcon>
                            <span>Fri Apr 25 2025</span>
                        </div>
                    </div>
                </section>

                <button className="usrProfileEditBtn" onClick={() => openModal()}>
                    <EditUserIcon></EditUserIcon>
                </button>
            </div>
        </PageLayout>
    );
};

export default UserProfilePage;
