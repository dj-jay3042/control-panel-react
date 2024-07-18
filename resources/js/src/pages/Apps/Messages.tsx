import React from 'react';
import PropTypes from 'prop-types';

const Messages = ({ selectedUser, message }) => {
    return (
        <div className="space-y-5 p-4 sm:pb-0 pb-[68px] sm:min-h-[300px] min-h-[400px]" key={index}>
            <div className={`flex items-start gap-3 ${selectedUser.userId === message.fromUserId ? 'justify-end' : ''}`}>
                <div className={`flex-none ${selectedUser.userId === message.fromUserId ? 'order-2' : ''}`}>
                    {selectedUser.userId === message.fromUserId ? (
                        <img src={`${loginUser.path}`} className="rounded-full h-10 w-10 object-cover" alt="" />
                    ) : (
                        ''
                    )}
                    {selectedUser.userId !== message.fromUserId ? (
                        <img src={`${selectedUser.path}`} className="rounded-full h-10 w-10 object-cover" alt="" />
                    ) : (
                        ''
                    )}
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div
                            className={`dark:bg-gray-800 p-4 py-2 rounded-md bg-black/10 ${message.fromUserId === selectedUser.userId
                                ? 'ltr:rounded-br-none rtl:rounded-bl-none !bg-primary text-white'
                                : 'ltr:rounded-bl-none rtl:rounded-br-none'
                                }`}
                        >
                            {message.text}
                        </div>
                        <div className={`${selectedUser.userId === message.fromUserId ? 'hidden' : ''}`}>
                            <svg
                                className="w-5 h-5 text-black/70 dark:text-white/70 hover:!text-primary"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                <path
                                    d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
                                    fill="currentColor"
                                />
                                <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                    <div className={`text-xs text-white-dark ${selectedUser.userId === message.fromUserId ? 'ltr:text-right rtl:text-left' : ''}`}>
                        {message.time ? message.time : '5h ago'}
                    </div>
                </div>
            </div>
        </div>
    );
};

// PropTypes for type checking
Messages.propTypes = {
    selectedUser: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
};

export default Messages;