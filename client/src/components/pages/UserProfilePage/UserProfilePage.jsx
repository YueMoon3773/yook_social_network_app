import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { useOpenCloseModal } from '../../../hooks/useOpenCloseModal';
import { useAuthenticate } from '../../../hooks/useAuthenticate';

import { EditUserIcon, LocationIcon, BirthdayIcon } from '../../../assets/svgIcon';
import PageLayout from '../../layout/PageLayout/PageLayout';
import UserAvatarImg from '../../base/UserAvatarImg/UserAvatarImg';
import noAvatar from '../../../assets/img/no_avatar.jpg';

import './UserProfilePage.scss';

const UserProfilePage = () => {
    const { showModal, modalBoxRef, openModal, closeModal, resetModalState } = useOpenCloseModal();
    const { user, loading: userAuthenLoading } = useAuthenticate();

    const [profileFirstNameValue, setProfileFirstNameValue] = useState('');
    const [profileLastNameValue, setProfileLastNameValue] = useState('');
    const [profileAvatarUrlValue, setProfileAvatarUrlValue] = useState('');
    const [profileBioValue, setProfileBioValue] = useState('');
    const [profileLocationValue, setProfileLocationValue] = useState('');
    const [profileBirthdayValue, setProfileBirthdayValue] = useState('');
    console.log({ profileBirthdayValue });

    const usrFirstName = 'Aurelia';
    const usrLastName = 'Kshlerin';
    const usrUserName = 'aure_K_lerin';

    useEffect(() => {
        document.title = `Yook | ${usrUserName}'s profile`;
        resetModalState();
    }, []);

    const closeModalBtnHandler = () => closeModal();

    const profileFirstNameOnChangeHandler = (e) => {
        setProfileFirstNameValue(e.target.value);
    };

    const profileLastNameOnChangeHandler = (e) => {
        setProfileLastNameValue(e.target.value);
    };

    const profileAvatarUrlOnChangeHandler = (e) => {
        setProfileAvatarUrlValue(e.target.value);
    };

    const profileBioOnChangeHandler = (e) => {
        setProfileBioValue(e.target.value);
    };

    const profileLocationOnChangeHandler = (e) => {
        setProfileLocationValue(e.target.value);
    };

    const profileBirthdayOnChangeHandler = (e) => {
        setProfileBirthdayValue(e.target.value);
    };

    return (
        <PageLayout
            showModal={showModal}
            closeModalBtnHandler={closeModalBtnHandler}
            modalType={'editUsrProfile'}
            modalBoxRef={modalBoxRef}
            profileFirstNameValue={profileFirstNameValue}
            profileFirstNameOnChangeHandler={profileFirstNameOnChangeHandler}
            profileLastNameValue={profileLastNameValue}
            profileLastNameOnChangeHandler={profileLastNameOnChangeHandler}
            profileAvatarUrlValue={profileAvatarUrlValue}
            profileAvatarUrlOnChangeHandler={profileAvatarUrlOnChangeHandler}
            profileBioValue={profileBioValue}
            profileBioOnChangeHandler={profileBioOnChangeHandler}
            profileLocationValue={profileLocationValue}
            profileLocationOnChangeHandler={profileLocationOnChangeHandler}
            profileBirthdayValue={profileBirthdayValue}
            profileBirthdayOnChangeHandler={profileBirthdayOnChangeHandler}
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
