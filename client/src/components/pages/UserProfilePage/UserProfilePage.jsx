import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { format } from 'date-fns';

import {
    firstNameInpValidatorSchema,
    lastNameInpValidatorSchema,
    avatarURLInpValidatorSchema,
    bioInpValidatorSchema,
    locationInpValidatorSchema,
    birthdayDateInpValidatorSchema,
} from '../../../utils/formInpsValidatorSchema';

import { useAuthenticate } from '../../../hooks/useAuthenticate';
import { useFetchGetData } from '../../../hooks/useFetchData';
import { useOpenCloseModal } from '../../../hooks/useOpenCloseModal';
import { useShowBadge } from '../../../hooks/useShowBadge';

import { EditUserIcon, LocationIcon, BirthdayIcon, UserActivitiesInProfilePageIcon } from '../../../assets/svgIcon';
import PageLayout from '../../layout/PageLayout/PageLayout';
import UserAvatarImg from '../../base/UserAvatarImg/UserAvatarImg';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './UserProfilePage.scss';

const baseBeURL = import.meta.env.VITE_API_BASE_URL;

const UserProfilePage = () => {
    const { userName } = useParams();

    const { showBadge, setBadgeType, setBadgeMsg } = useShowBadge();
    const { showModal, modalBoxRef, openModal, closeModal, resetModalState } = useOpenCloseModal();

    const { user: userAuthen, loading: userAuthenLoading, fetchUserInfo } = useAuthenticate();
    const {
        data: userInViewData,
        error: userInViewError,
        loading: userInViewLoading,
        refetch: userInViewRefetch,
        newFetchUrl: userInViewNewFetchUrl,
    } = useFetchGetData(`${baseBeURL}/user/user-info/${userName}`);
    // console.log({ userAuthen, userAuthenLoading });
    // console.log({ userInViewData, userInViewError, userInViewLoading });

    const [profileFirstNameValue, setProfileFirstNameValue] = useState('');
    const [profileLastNameValue, setProfileLastNameValue] = useState('');
    const [profileAvatarUrlValue, setProfileAvatarUrlValue] = useState('');
    const [profileBioValue, setProfileBioValue] = useState('');
    const [profileLocationValue, setProfileLocationValue] = useState('');
    const [profileBirthdayValue, setProfileBirthdayValue] = useState('');

    const [inpErrors, setInpErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // console.log({
    //     profileFirstNameValue,
    //     profileLastNameValue,
    //     profileAvatarUrlValue,
    //     profileBioValue,
    //     profileLocationValue,
    //     profileBirthdayValue,
    // });

    useEffect(() => {
        resetModalState();
    }, []);

    // Update modal inps value accordingly
    useEffect(() => {
        if (userInViewData !== null) {
            document.title = `Yook | ${userInViewData.user.user_name}'s profile`;

            if (userInViewData.user.first_name !== null) {
                setProfileFirstNameValue(userInViewData.user.first_name);
            } else if (userInViewData.user.first_name === null) {
                setProfileFirstNameValue('');
            }

            if (userInViewData.user.last_name !== null) {
                setProfileLastNameValue(userInViewData.user.last_name);
            } else if (userInViewData.user.last_name === null) {
                setProfileLastNameValue('');
            }

            if (userInViewData.user.avatar_url !== null) {
                setProfileAvatarUrlValue(userInViewData.user.avatar_url);
            } else if (userInViewData.user.avatar_url === null) {
                setProfileAvatarUrlValue('');
            }

            if (userInViewData.user.bio !== null) {
                setProfileBioValue(userInViewData.user.bio);
            } else if (userInViewData.user.bio === null) {
                setProfileBioValue('');
            }

            if (userInViewData.user.location !== null) {
                setProfileLocationValue(userInViewData.user.location);
            } else if (userInViewData.user.location === null) {
                setProfileLocationValue('');
            }

            if (userInViewData.user.birthday_date !== null) {
                setProfileBirthdayValue(userInViewData.user.birthday_date);
            } else if (userInViewData.user.birthday_date === null) {
                setProfileBirthdayValue('');
            }
        } else document.title = `Yook | User's profile`;
    }, [userInViewData]);

    const closeModalBtnHandler = () => {
        if (!isSubmitting) {
            closeModal();
        } else return;
    };

    /* On change functions handle for inps */
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

    const updateProfileModalBtnHandler = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSubmitting(true);

        try {
            let firstNameErrors = [];
            let lastNameErrors = [];
            let avatarUrlErrors = [];
            let bioErrors = [];
            let locationErrors = [];
            let birthdayErrors = [];

            const firstNameErr = firstNameInpValidatorSchema.safeParse(profileFirstNameValue);
            const lastNameErr = lastNameInpValidatorSchema.safeParse(profileLastNameValue);
            const avatarUrlErr = avatarURLInpValidatorSchema.safeParse(profileAvatarUrlValue);
            const bioErr = bioInpValidatorSchema.safeParse(profileBioValue);
            const locationErr = locationInpValidatorSchema.safeParse(profileLocationValue);
            const birthdayErr = birthdayDateInpValidatorSchema.safeParse(profileBirthdayValue);

            if (firstNameErr.success === false) {
                firstNameErrors = firstNameErr.error.issues.map((item) => item.message);
            }
            if (lastNameErr.success === false) {
                lastNameErrors = lastNameErr.error.issues.map((item) => item.message);
            }
            if (avatarUrlErr.success === false) {
                avatarUrlErrors = avatarUrlErr.error.issues.map((item) => item.message);
            }
            if (bioErr.success === false) {
                bioErrors = bioErr.error.issues.map((item) => item.message);
            }
            if (locationErr.success === false) {
                locationErrors = locationErr.error.issues.map((item) => item.message);
            }
            if (birthdayErr.success === false) {
                birthdayErrors = birthdayErr.error.issues.map((item) => item.message);
            }

            // console.log({
            //     firstNameErrors,
            //     lastNameErrors,
            //     avatarUrlErrors,
            //     bioErrors,
            //     locationErrors,
            //     birthdayErrors,
            // });

            if (
                firstNameErrors.length > 0 ||
                lastNameErrors.length > 0 ||
                avatarUrlErrors.length > 0 ||
                bioErrors.length > 0 ||
                locationErrors.length > 0 ||
                birthdayErrors.length > 0
            ) {
                setInpErrors({
                    firstNameErrors,
                    lastNameErrors,
                    avatarUrlErrors,
                    bioErrors,
                    locationErrors,
                    birthdayErrors,
                });
                setIsSubmitting(false);
                return;
            } else {
                setInpErrors({});
                let errors = [];

                // console.log({
                //     profileFirstNameValue,
                //     profileLastNameValue,
                //     profileAvatarUrlValue,
                //     profileBioValue,
                //     profileLocationValue,
                //     profileBirthdayValue,
                // });

                const res = await fetch(`${baseBeURL}/user/update-profile/${userInViewData.user.id}`, {
                    mode: 'cors',
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        firstName: profileFirstNameValue,
                        lastName: profileLastNameValue,
                        avatarUrl: profileAvatarUrlValue,
                        bio: profileBioValue,
                        location: profileLocationValue,
                        birthdayDate: profileBirthdayValue,
                    }),
                });

                const data = await res.json();

                if (data.ok === false) {
                    errors.push(data.msg);
                    console.log({ errors });

                    setInpErrors({ errors });
                    setIsSubmitting(false);
                } else {
                    setIsSubmitting(false);
                    await fetchUserInfo();
                    await userInViewRefetch();
                    setBadgeType('info');
                    setBadgeMsg('Profile updated successfully');
                    closeModal();
                    showBadge();
                }
            }
        } catch (err) {
            setIsSubmitting(false);
            console.log({ err });
        }
    };

    if (userAuthen === null && userAuthenLoading === false) {
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
    } else if (userInViewError !== null) {
        <Navigate to="/error"></Navigate>;
    } else {
        return (
            <PageLayout
                showModal={showModal}
                closeModalBtnHandler={closeModalBtnHandler}
                modalSubmitBtnHandler={updateProfileModalBtnHandler}
                isSubmittingModal={isSubmitting}
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
                showErrorBoxInModal={!!Object.keys(inpErrors).length}
                modalErrorObj={inpErrors}
            >
                <div className="userProfileWrapper">
                    <div className="usrProfileAvatarWrapper">
                        {userInViewLoading ? (
                            <div className={`${pageBaseStyles.skeletonLoading} skeletonImage`}></div>
                        ) : (
                            <UserAvatarImg imgSrc={userInViewData.user.avatar_url}></UserAvatarImg>
                        )}
                    </div>

                    <section className="usrProfileNamesWrapper">
                        {userInViewLoading ? (
                            <>
                                <span className={`${pageBaseStyles.skeletonLoading}`}>Skeleton user full name</span>
                                <span className={`${pageBaseStyles.skeletonLoading}`}>skeleton user name</span>
                            </>
                        ) : (
                            <>
                                <span>{userInViewData.user.first_name + ' ' + userInViewData.user.last_name}</span>
                                <span>{'@' + userInViewData.user.user_name}</span>
                            </>
                        )}
                    </section>

                    <section className="usrProfileInfoWrapper">
                        <div className="usrProfileInfoTop">
                            {userInViewLoading ? (
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
                                <p>
                                    {userInViewData.user.bio === null || userInViewData.user.bio === ''
                                        ? 'User bio is not set'
                                        : userInViewData.user.bio}
                                </p>
                            )}
                        </div>

                        <div className="usrProfileInfoBottom">
                            <div className="infoBttmLeft">
                                {userInViewLoading ? (
                                    <div className={`${pageBaseStyles.skeletonLoading} skeletonInfoBtm`}>
                                        Skeleton location
                                    </div>
                                ) : (
                                    <div className="infoBttmLeftItem">
                                        <LocationIcon></LocationIcon>
                                        <span>
                                            {userInViewData.user.location === null ||
                                            userInViewData.user.location === ''
                                                ? 'User location is not set'
                                                : userInViewData.user.location}
                                        </span>
                                    </div>
                                )}

                                {userInViewLoading ? (
                                    <div className={`${pageBaseStyles.skeletonLoading} skeletonInfoBtm`}>
                                        Skeleton birthday
                                    </div>
                                ) : (
                                    <div className="infoBttmLeftItem">
                                        <BirthdayIcon></BirthdayIcon>
                                        <span>
                                            {userInViewData.user.birthday_date === null ||
                                            userInViewData.user.birthday_date === ''
                                                ? 'User birthday date is not set'
                                                : format(new Date(userInViewData.user.birthday_date), 'MMM do, yyyy')}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="infoBttmRight">
                                {userInViewLoading ? (
                                    <div className={`${pageBaseStyles.skeletonLoading} skeletonInfoBtm`}>
                                        Skeleton profile
                                    </div>
                                ) : (
                                    <Link to={`/user/activities/${userInViewData.user.user_name}`}>
                                        <UserActivitiesInProfilePageIcon></UserActivitiesInProfilePageIcon>
                                        <span>{`@${userInViewData.user.user_name}'s activities`}</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </section>

                    {!userInViewLoading && (
                        <button
                            className={`usrProfileEditBtn ${userInViewData.user.id === userAuthen.id ? '' : 'disabled'}`}
                            disabled={userInViewData.user.id === userAuthen.id ? false : true}
                            onClick={() => {
                                if (userInViewData.user.id === userAuthen.id) {
                                    openModal();
                                } else return;
                            }}
                        >
                            <EditUserIcon></EditUserIcon>
                        </button>
                    )}
                </div>
            </PageLayout>
        );
    }
};

export default UserProfilePage;
