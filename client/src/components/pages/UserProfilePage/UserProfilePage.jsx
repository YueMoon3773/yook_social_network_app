import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { useAuthenticate } from '../../../hooks/useAuthenticate';
import { useOpenCloseModal } from '../../../hooks/useOpenCloseModal';
import { useShowBadge } from '../../../hooks/useShowBadge';

import { EditUserIcon, LocationIcon, BirthdayIcon } from '../../../assets/svgIcon';
import PageLayout from '../../layout/PageLayout/PageLayout';
import UserAvatarImg from '../../base/UserAvatarImg/UserAvatarImg';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './UserProfilePage.scss';

const baseBeURL = import.meta.env.VITE_API_BASE_URL;

const UserProfilePage = () => {
    const { setBadgeType, setBadgeMsg } = useShowBadge();
    const { showModal, modalBoxRef, openModal, closeModal, resetModalState } = useOpenCloseModal();
    const { user, loading: userAuthenLoading } = useAuthenticate();
    console.log({ user, userAuthenLoading });

    const [profileFirstNameValue, setProfileFirstNameValue] = useState('');
    const [profileLastNameValue, setProfileLastNameValue] = useState('');
    const [profileAvatarUrlValue, setProfileAvatarUrlValue] = useState('');
    const [profileBioValue, setProfileBioValue] = useState('');
    const [profileLocationValue, setProfileLocationValue] = useState('');
    const [profileBirthdayValue, setProfileBirthdayValue] = useState('');

    const [inpErrors, setInpErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    console.log({
        profileFirstNameValue,
        profileLastNameValue,
        profileAvatarUrlValue,
        profileBioValue,
        profileLocationValue,
        profileBirthdayValue,
    });

    useEffect(() => {
        document.title = `Yook | User's profile`;
        resetModalState();
    }, []);

    // update modal inps value accordingly
    useEffect(() => {
        if (user !== null) {
            document.title = `Yook | ${user.user_name}'s profile`;

            if (user.first_name !== null) {
                setProfileFirstNameValue(user.first_name);
            } else if (user.first_name === null) {
                setProfileFirstNameValue('');
            }

            if (user.last_name !== null) {
                setProfileLastNameValue(user.last_name);
            } else if (user.last_name === null) {
                setProfileLastNameValue('');
            }

            if (user.avatar_url !== null) {
                setProfileAvatarUrlValue(user.avatar_url);
            } else if (user.avatar_url === null) {
                setProfileAvatarUrlValue('');
            }

            if (user.bio !== null) {
                setProfileBioValue(user.bio);
            } else if (user.bio === null) {
                setProfileBioValue('');
            }

            if (user.location !== null) {
                setProfileLocationValue(user.location);
            } else if (user.location === null) {
                setProfileLocationValue('');
            }

            if (user.birthday_date !== null) {
                setProfileBirthdayValue(user.birthday_date);
            } else if (user.birthday_date === null) {
                setProfileBirthdayValue('');
            }
        }
    }, [user]);

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

    if (user === null && userAuthenLoading === false) {
        setBadgeType('waring');
        setBadgeMsg('Please log in to access the previous content.');

        return (
            <Navigate
                to="/user/log-in"
                state={{
                    unAuthorizedUsrToLogIn: true,
                    badgeType: 'warning',
                    badgeMsg: 'Please log in to access the previous content.',
                }}
            ></Navigate>
        );
    } else {
        return (
            <PageLayout
                showModal={showModal}
                closeModalBtnHandler={closeModalBtnHandler}
                modalType={'editUsrProfile'}
                modalBoxRef={modalBoxRef}
                modalProfileFirstNameValue={profileFirstNameValue}
                modalProfileFirstNameOnChangeHandler={profileFirstNameOnChangeHandler}
                modalProfileLastNameValue={profileLastNameValue}
                modalProfileLastNameOnChangeHandler={profileLastNameOnChangeHandler}
                modalProfileAvatarUrlValue={profileAvatarUrlValue}
                modalProfileAvatarUrlOnChangeHandler={profileAvatarUrlOnChangeHandler}
                modalProfileBioValue={profileBioValue}
                modalProfileBioOnChangeHandler={profileBioOnChangeHandler}
                modalProfileLocationValue={profileLocationValue}
                modalProfileLocationOnChangeHandler={profileLocationOnChangeHandler}
                modalProfileBirthdayValue={profileBirthdayValue}
                modalProfileBirthdayOnChangeHandler={profileBirthdayOnChangeHandler}
            >
                <div className="userProfileWrapper">
                    <div className="usrProfileAvatarWrapper">
                        {userAuthenLoading ? (
                            <div className={`${pageBaseStyles.skeletonLoading} skeletonImage`}></div>
                        ) : (
                            <UserAvatarImg imgSrc={user.avatar_url}></UserAvatarImg>
                        )}
                    </div>

                    <section className="usrProfileNamesWrapper">
                        {userAuthenLoading ? (
                            <>
                                <span className={`${pageBaseStyles.skeletonLoading}`}>Skeleton user full name</span>
                                <span className={`${pageBaseStyles.skeletonLoading}`}>skeleton user name</span>
                            </>
                        ) : (
                            <>
                                <span>{user.first_name + ' ' + user.last_name}</span>
                                <span>{'@' + user.user_name}</span>
                            </>
                        )}
                    </section>

                    <section className="usrProfileInfoWrapper">
                        <div className="usrProfileInfoTop">
                            {userAuthenLoading ? (
                                <div className="usrProfileSkeletonContentWrapper">
                                    <div className={`${pageBaseStyles.skeletonLoading} usrProfileSkeletonContent`}>
                                        Skeleton content
                                    </div>
                                    <div className={`${pageBaseStyles.skeletonLoading} usrProfileSkeletonContent`}>
                                        Skeleton content
                                    </div>
                                    <div className={`${pageBaseStyles.skeletonLoading} usrProfileSkeletonContent`}>
                                        Skeleton content
                                    </div>
                                    <div className={`${pageBaseStyles.skeletonLoading} usrProfileSkeletonContent`}>
                                        Skeleton content
                                    </div>
                                    <div className={`${pageBaseStyles.skeletonLoading} usrProfileSkeletonContent`}>
                                        Skeleton content
                                    </div>
                                </div>
                            ) : (
                                <p>{user.bio === null || user.bio === '' ? 'User bio is not set' : user.bio}</p>
                            )}
                        </div>

                        <div className="usrProfileInfoBottom">
                            <div className="infoBttmLeft">
                                {userAuthenLoading ? (
                                    <div className={`${pageBaseStyles.skeletonLoading} skeletonInfoBtm`}>
                                        Skeleton location
                                    </div>
                                ) : (
                                    <>
                                        <LocationIcon></LocationIcon>
                                        <span>
                                            {user.location === null || user.location === ''
                                                ? 'User location is not set'
                                                : user.location}
                                        </span>
                                    </>
                                )}
                            </div>
                            <div className="infoBttmRight">
                                {userAuthenLoading ? (
                                    <div className={`${pageBaseStyles.skeletonLoading} skeletonInfoBtm`}>
                                        Skeleton birthday
                                    </div>
                                ) : (
                                    <>
                                        <BirthdayIcon></BirthdayIcon>
                                        <span>
                                            {user.birthday_date === null || user.birthday_date === ''
                                                ? 'User birthday date is not set'
                                                : user.birthday_date}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </section>

                    {!userAuthenLoading && (
                        <button className="usrProfileEditBtn" onClick={() => openModal()}>
                            <EditUserIcon></EditUserIcon>
                        </button>
                    )}
                </div>
            </PageLayout>
        );
    }
};

export default UserProfilePage;
