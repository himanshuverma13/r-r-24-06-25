import React, { useState, useEffect } from 'react';
import ProfileIcon from '../../assets/icons/auth/add-profile.svg';
import AddIcon from '../../assets/icons/auth/profile-pluse-icon.svg';
import Balance from '../../assets/icons/auth/profile-balance.svg';
import Pending from '../../assets/icons/auth/profile-pending.svg';
import Redeemed from '../../assets/icons/auth/profile-redeemed.svg';
import Reward from '../../assets/icons/auth/profile-reward.svg';
import Edit from '../../assets/icons/auth/profile-edit.svg';
import Close from '../../assets/icons/auth/modal-close.svg';
import UploadIcon from '../../assets/icons/auth/upload-icon.svg';
const Profile = () => {
    // Profile data state
    const [profileData, setProfileData] = useState({
        name: 'Areeba Mujeeb',
        mobile: '9123454678',
        email: 'areeba1234@gmail.com',
    });

    // Modal states
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

    // Message form state
    const [messageForm, setMessageForm] = useState({
        name: profileData.name,
        email: profileData.email,
        message: '',
        files: [],
    });

    // Sync profileData with messageForm
    useEffect(() => {
        setMessageForm((prevForm) => ({
            ...prevForm,
            name: profileData.name,
            email: profileData.email,
        }));
    }, [profileData]);

    // Accordion state
    const [activeSection, setActiveSection] = useState('');

    // Profile image state
    const [profileImage, setProfileImage] = useState(null);

    // Invite links
    const [inviteLink] = useState('Invite Link');
    const [inviteCode] = useState('Invite Code');

    // Accordion toggle
    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? '' : section);
    };

    // Copy to clipboard
    const copyToClipboard = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => alert('Copied to clipboard!'))
            .catch((err) => console.error('Could not copy text: ', err));
    };

    // Handle profile image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    // Handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Mobile number validation
        if (!/^\d{10}$/.test(profileData.mobile)) {
            alert('Mobile number must be exactly 10 digits.');
            return;
        }
        alert('Profile updated successfully!');
        setIsEditModalOpen(false);
    };

    // Handle message form submit
    const handleMessageSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        setIsMessageModalOpen(false);
        // Reset form
        setMessageForm({
            name: profileData.name,
            email: profileData.email,
            message: '',
            files: [],
        });
    };

    return (
        <section className="profile-section" id="Profile_Section">
            <div className="container py-4 profile-container">
                {/* Header */}
                <div className="bg-profile-detail rounded mb-32 p-4">
                    <div className="d-flex justify-content-between  mb-36">
                        <div className="d-flex align-items-center">
                            <div className="position-relative me-3">
                                <div className="rounded-circle bg-light profile-pic d-flex align-items-center justify-content-center overflow-hidden">
                                    {profileImage ? (
                                        <img
                                            src={profileImage}
                                            alt="Profile"
                                            className="w-100 h-100 object-fit-cover"
                                        />
                                    ) : (
                                        <span className="fw-bold fs-4 text-primary">
                                            <img
                                                className="h-100 w-100 user-profile-icon"
                                                src={ProfileIcon}
                                                alt=""
                                            />
                                        </span>
                                    )}
                                </div>
                                <label className="add-photo-icon d-flex align-items-center justify-content-center">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        hidden
                                    />
                                    <img
                                        className="addprofile-plus-icon"
                                        src={AddIcon}
                                        alt="Add"
                                    />
                                </label>
                            </div>
                            <div className="user-details">
                                <h4 className="mb-3 user-name montserrat-semibold font-24 text-primary-color">
                                    {profileData.name}
                                </h4>
                                <small className="user-contact montserrat-medium font-16">
                                    {profileData.mobile} <span>|</span> {profileData.email}
                                </small>
                            </div>
                        </div>
                        <div className="d-flex h-max-content">
                            <span className="ref-code-div font-14 montserrat-medium me-3">
                                <span className="text-ref-code montserrat-medium">
                                    Ref Code
                                </span>{' '}
                                <span className="digit-ref-code montserrat-semibold">1234</span>
                            </span>
                            <button
                                className="btn btn-dark btn-sm btn-edit-profile position-relative"
                                onClick={() => setIsEditModalOpen(true)}
                            >
                                <img
                                    className="edit-icon montserrat-semibold"
                                    src={Edit}
                                    alt=""
                                />
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    {/* Rewards */}
                    <div className="row mt-2 g-3">
                        <h3 className="font-18 montserrat-semibold heading-reward-summary mt-0 mb-12">
                            Reward Summary
                        </h3>
                        {[
                            { value: 12, label: 'Total Rewards', RewardIcons: Reward },
                            {
                                value: 12,
                                label: 'Current Reward Balance',
                                RewardIcons: Balance,
                            },
                            { value: 12, label: 'Total Redeemed', RewardIcons: Redeemed },
                            { value: 123, label: 'Pending Rewards', RewardIcons: Pending },
                        ].map((item, idx) => (
                            <div className="col-6 col-md-3 mt-0" key={idx}>
                                <div className="d-flex flex-column justify-content-between bg-light-purple-transparent p-3 rounded">
                                    <div className="d-flex  justify-content-between">
                                        <div className="reward-icons-div">
                                            <img src={item.RewardIcons} alt="Icons" />
                                        </div>
                                        <h3 className="text-primary-color montserrat-semibold mb-8 font-24">
                                            {item.value}
                                        </h3>
                                    </div>
                                    <small className="montserrat-medium font-16 text-end text-primary-color">
                                        {item.label}
                                    </small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Invite Links */}
                <div className="row mb-4 g-3">
                    <h3 className="font-18 montserrat-semibold text-light-color mt-0 mb-12">
                        Reward Review
                    </h3>
                    <div className="col-md-6 mt-0">
                        <div className="position-relative">
                            <input
                                type="text"
                                className="w-100 text-light-color montserrat-medium font-14 input-profile-copy-link bg-light-purple-transparent border-0"
                                value={inviteLink}
                                readOnly
                            />
                            <button
                                className="btn position-absolute btn-profile-copy-link font-14 text-white montserrat-regular bg-primary-color"
                                onClick={() => copyToClipboard(inviteLink)}
                            >
                                Copy Link
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 mt-0">
                        <div className="position-relative">
                            <input
                                type="text"
                                className="w-100 text-light-color montserrat-medium font-14 input-profile-copy-link bg-light-purple-transparent border-0"
                                value={inviteCode}
                                readOnly
                            />
                            <button
                                className="btn position-absolute btn-profile-copy-link font-14 text-white montserrat-regular bg-primary-color"
                                onClick={() => copyToClipboard(inviteCode)}
                            >
                                Copy Code
                            </button>
                        </div>
                    </div>
                </div>

                {/* Accordions */}
                <div className="accordion" id="profileAccordion">
                    {/* Wallet */}
                    <div className="accordion-item bg-transparent border-0 border-radius-0">
                        <h2 className="accordion-header bg-transparent">
                            <button
                                className={`accordion-button text-light-color bg-transparent font-18 montserrat-semibold pt-4 pb-4 ${activeSection === 'wallet' ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => toggleSection('wallet')}
                            >
                                My Wallet
                            </button>
                        </h2>
                        <div
                            className={`accordion-collapse collapse ${activeSection === 'wallet' ? 'show' : ''}`}
                        >
                            <div className="accordion-body">
                                <p className="font-16 montserrat-semibold text-primary-color mb-24">
                                    Your Current Wallet Balance
                                </p>
                                <div className="d-flex gap-4 fw-bold mb-32">
                                    <span
                                        className="font-24 montserrat-bold text-primary-color"
                                        role="button"
                                    >
                                        X{' '}
                                        <span className="font-16 montserrat-semibold">Meteors</span>
                                    </span>
                                    <span className="ml-60 mr-60 text-light-color">|</span>
                                    <span
                                        className="font-24 montserrat-bold text-primary-rr"
                                        role="button"
                                    >
                                        Y <span className="font-16 montserrat-semibold">Stars</span>
                                    </span>
                                    <span className="ml-60 mr-60 text-light-color">|</span>
                                    <span
                                        className="font-24 montserrat-bold text-primary-color"
                                        role="button"
                                    >
                                        Z
                                        <span className="font-16 montserrat-semibold">
                                            {' '}
                                            Cash/Points
                                        </span>
                                    </span>
                                </div>
                                <div className="d-flex gap-3 mb-24">
                                    <button className="btn btn-primaryColor font-14 text-white montserrat-semibold">
                                        Convert meteors into stars
                                    </button>
                                    <button className="btn btn-outlineDark font-14 text-primary-color montserrat-semibold">
                                        Convert stars into cash/points
                                    </button>
                                </div>
                                <small className="text-primary-color">
                                    <span className="font-14 montserrat-semibold">Note*</span>{' '}
                                    <span className="font-14 montserrat-medium">
                                        The conversion rates are as follows:
                                    </span>{' '}
                                    <span className="font-18 montserrat-semibold">
                                        "X <span className="font-16">Meteors =</span> Y{' '}
                                        <span className="font-16">Stars</span>= Z{' '}
                                        <span className="font-16">Cash/Points"</span>
                                    </span>
                                </small>
                            </div>
                        </div>
                    </div>
                    {/* Notification Section */}
                    <div className="accordion-item bg-transparent border-0">
                        <h2 className="accordion-header bg-transparent">
                            <button
                                className={`accordion-button text-light-color bg-transparent font-18 montserrat-semibold pt-4 pb-4 ${activeSection === 'notifications' ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => toggleSection('notifications')}
                            >
                                Notification Settings / Preferences
                            </button>
                        </h2>
                        <div
                            className={`accordion-collapse collapse ${activeSection === 'notifications' ? 'show' : ''}`}
                        >
                            <div className="accordion-body">
                                <div className="form-check form-switch pl-0 mb-20 width-30 d-flex justify-content-between align-items-center">
                                    <label
                                        className="form-check-label montserrat-medium font-14 text-primary-color"
                                        htmlFor="rewardNotifications"
                                    >
                                        Reward Notifications
                                    </label>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="rewardNotifications"
                                        defaultChecked
                                    />
                                </div>

                                <div className="form-check form-switch pl-0 mb-20 width-30 d-flex justify-content-between align-items-center">
                                    <label
                                        className="form-check-label montserrat-medium font-14 text-primary-color"
                                        htmlFor="milestoneUpdates"
                                    >
                                        Milestone Updates
                                    </label>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="milestoneUpdates"
                                    />
                                </div>

                                <div className="form-check form-switch pl-0 mb-20 width-30 d-flex justify-content-between align-items-center">
                                    <label
                                        className="form-check-label montserrat-medium font-14 text-primary-color"
                                        htmlFor="referralAlerts"
                                    >
                                        Referral Alerts
                                    </label>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="referralAlerts"
                                        defaultChecked
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Account Settings Section */}
                    <div className="accordion-item bg-transparent border-0">
                        <h2 className="accordion-header bg-transparent">
                            <button
                                className={`accordion-button text-light-color bg-transparent font-18 montserrat-semibold pt-4 pb-4 ${activeSection === 'account' ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => toggleSection('account')}
                            >
                                Account Settings
                            </button>
                        </h2>
                        <div
                            className={`accordion-collapse collapse ${activeSection === 'account' ? 'show' : ''}`}
                        >
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li
                                        className="montserrat-medium font-14 text-primary-color mb-20"
                                        role="button"
                                    >
                                        <a className="anchor-link" href="#">
                                            Linked social media accounts
                                        </a>
                                    </li>
                                    <li
                                        className="montserrat-medium font-14 text-primary-color mb-20"
                                        role="button"
                                    >
                                        <a className="anchor-link" href="#">
                                            Logout
                                        </a>
                                    </li>
                                    <li
                                        className="montserrat-medium font-14 text-primary-color"
                                        role="button"
                                    >
                                        <a href="#" className="anchor-link">
                                            Delete / De-activate account
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Help Section */}
                    <div className="accordion-item bg-transparent border-0">
                        <h2 className="accordion-header bg-transparent">
                            <button
                                className={`accordion-button text-light-color bg-transparent font-18 montserrat-semibold pt-4 pb-4 ${activeSection === 'help' ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => toggleSection('help')}
                            >
                                Help & Support
                            </button>
                        </h2>
                        <div
                            className={`accordion-collapse collapse ${activeSection === 'help' ? 'show' : ''}`}
                        >
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li
                                        className="montserrat-medium font-14 text-primary-color mb-20"
                                        role="button"
                                    >
                                        <a
                                            onClick={() => setIsMessageModalOpen(true)}
                                            className="anchor-link"
                                        >
                                            Send Message
                                        </a>
                                    </li>
                                    <li
                                        className="montserrat-medium font-14 text-primary-color mb-20"
                                        role="button"
                                    >
                                        <a className="anchor-link" href="tel:91788888888">
                                            91788888888
                                        </a>{' '}
                                        |{' '}
                                        <a className="anchor-link" href="mailto:abcd1234@gmail.com">
                                            abcd1234@gmail.com
                                        </a>
                                    </li>
                                    <li
                                        className="montserrat-medium font-14 text-primary-color"
                                        role="button"
                                    >
                                        <a href="#" className="anchor-link">
                                            Frequently Asked Questions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Other Accordion Sections - (Use your previous code, unchanged) */}
                    {/* Notification Settings, Account Settings, Help & Support (already provided by you) */}
                </div>

                {/* Edit Profile Modal */}
                {isEditModalOpen && (
                    <div className="edit-modal">
                        <div className={`modal-content bg-light-gray-blue slide-in p-4`}>
                            <button
                                className="btn_close border-0 bg-transparent"
                                onClick={() => setIsEditModalOpen(false)}
                            >
                                <img className="close-icon" src={Close} alt="Close icon" />
                            </button>
                            <h5 className="font-24 text-primary-color mb-42 montserrat-semibold">
                                Edit Profile
                            </h5>
                            <form onSubmit={handleFormSubmit}>
                                <div className="position-relative mb-48">
                                    <div className="rounded-circle bg-light profile-pic d-flex align-items-center justify-content-center overflow-hidden">
                                        {profileImage ? (
                                            <img
                                                src={profileImage}
                                                alt="Profile"
                                                className="w-100 h-100 object-fit-cover"
                                            />
                                        ) : (
                                            <span className="fw-bold fs-4 text-primary">
                                                <img
                                                    className="h-100 w-100 user-profile-icon"
                                                    src={ProfileIcon}
                                                    alt=""
                                                />
                                            </span>
                                        )}
                                    </div>
                                    <label className="add-photo-icon d-flex align-items-center justify-content-center">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            hidden
                                        />
                                        <img
                                            className="addprofile-plus-icon"
                                            src={AddIcon}
                                            alt="Add"
                                        />
                                    </label>
                                </div>
                                <div className="mb-32">
                                    <label className="form-label mb-8 font-14 text-light-color montserrat-regular">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control font-14 text-primary-color montserrat-medium"
                                        name="name"
                                        value={profileData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {/* <div className="mb-32">
                                    <label className="form-label mb-8 font-14 text-light-color montserrat-regular">
                                        Your Mobile No
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control font-14 text-primary-color montserrat-medium"
                                        name="mobile"
                                        value={profileData.mobile}
                                        onChange={handleInputChange}
                                    />
                                </div> */}
                                <div className="mb-32">
                                    <label className="form-label mb-8 font-14 text-light-color montserrat-regular">
                                        Your Mobile No
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control font-14 text-primary-color montserrat-medium"
                                        name="mobile"
                                        value={profileData.mobile}
                                        onChange={handleInputChange}
                                        maxLength={10}
                                        pattern="\d{10}"
                                        onKeyPress={(e) => {
                                            if (!/[0-9]/.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }}
                                        required
                                    />
                                </div>

                                <div className="mb-32">
                                    <label className="form-label mb-8 font-14 text-light-color montserrat-regular">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control font-14 text-primary-color montserrat-medium"
                                        name="email"
                                        value={profileData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <hr />
                                <div className="mb-32">
                                    <label className="form-label mb-8 font-14 text-light-color montserrat-regular">
                                        Change Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control form-control font-14 text-primary-color montserrat-medium mb-32"
                                        placeholder="New Password"
                                    />
                                    <input
                                        type="password"
                                        className="form-control form-control font-14 text-primary-color montserrat-medium"
                                        placeholder="Re-enter Password"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primaryColor montserrat-medium text-white font-14 w-100"
                                >
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Send Message Modal */}
                {isMessageModalOpen && (
                    <div className="message-modal">
                        <div className={`modal-content bg-light-gray-blue slide-in p-4`}>
                            <button
                                className="btn_close border-0 bg-transparent"
                                onClick={() => setIsMessageModalOpen(false)}
                            >
                                <img className="close-icon" src={Close} alt="Close icon" />
                            </button>
                            {/* <button className="btn-close" onClick={() => setIsMessageModalOpen(false)}></button> */}
                            <h5 className="font-18 montserrat-semibold text-light-color mb-8">
                                Leave us a message
                            </h5>
                            <p className="font-12 text-primary-color montserrat-medium mb-20">
                                We’re here to help—leave us a message and we’ll get back to you
                                soon!
                            </p>

                            <form onSubmit={handleMessageSubmit}>
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label mb-8 font-14 text-light-color montserrat-regular">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control font-12 text-primary-color montserrat-medium mb-20"
                                            value={messageForm.name}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="form-label mb-8 font-14 text-light-color montserrat-regular">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control font-12 text-primary-color montserrat-medium mb-20"
                                            value={messageForm.email}
                                            readOnly
                                        />
                                    </div>
                                </div>

                                <div className="mb-20">
                                    <label className="form-label mb-8 font-14 text-light-color montserrat-regular">
                                        How can we help you?
                                    </label>
                                    <textarea
                                        className="w-100 textarea-message font-12 text-primary-color montserrat-medium"
                                        placeholder="Write to us..."
                                        value={messageForm.message}
                                        onChange={(e) =>
                                            setMessageForm({
                                                ...messageForm,
                                                message: e.target.value,
                                            })
                                        }
                                        required
                                    ></textarea>
                                </div>

                                <div className="row mb-12">
                                    <label className="form-label mb-8 font-14 text-light-color montserrat-regular d-block">
                                        Attachments (If any)
                                    </label>

                                    <div className="col-8">
                                        {/* Custom File Upload Button */}
                                        <label className="custom-upload-btn w-100 text-light-color font-12">
                                            <img src={UploadIcon} alt="Upload File Icon" className="me-2" />
                                            Attachments (up to 5 files)
                                            <input
                                                type="file"
                                                multiple
                                                hidden
                                                onChange={(e) => {
                                                    const selectedFiles = Array.from(e.target.files);
                                                    const totalFiles = messageForm.files.length + selectedFiles.length;

                                                    if (totalFiles > 5) {
                                                        alert(`You can only upload up to 5 files. You already selected ${messageForm.files.length} file(s).`);
                                                        return;
                                                    }

                                                    setMessageForm({
                                                        ...messageForm,
                                                        files: [...messageForm.files, ...selectedFiles],
                                                    });
                                                }}
                                            />
                                        </label>

                                        {/* Show File Names with Remove Option */}
                                        {messageForm.files.length > 0 && (
                                            <ul className="mt-2 file-list">
                                                {messageForm.files.map((file, index) => (
                                                    <li key={index} className="d-flex justify-content-between align-items-center mb-2">
                                                        <span>{file.name}</span>
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-danger"
                                                            onClick={() => {
                                                                const updatedFiles = [...messageForm.files];
                                                                updatedFiles.splice(index, 1);
                                                                setMessageForm({ ...messageForm, files: updatedFiles });
                                                            }}
                                                        >
                                                            Remove
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>


                                    <div className="col-4">
                                        <button type="submit" className="btn w-100 btn-primaryColor text-white font-14 montserrat-medium">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Profile;
