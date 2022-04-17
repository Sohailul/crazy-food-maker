import React from 'react';

const Blogs = () => {
    return (
        <div class="container">
            <div className='card'>
                <div className='card-header'>
                    <h3>Difference between authorization and authentication.</h3>
                </div>
                <div className='card-body'>
                    <p>authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</p>
                    <div>
                        <p>
                            <b>Authorization</b>
                            <br/>
                            <p>
                                <ul>
                                <li>Authorization determines what resources a user can access.</li>
                                <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                                <li>Authorization always takes place after authentication.</li>
                                <li>Authorization isn’t visible to or changeable by the user.</li>
                                </ul>
                            </p>
                        </p>
                    </div>

                    <div>
                        <p>
                            <b>Authentication</b>
                            <br/>
                            <p>
                                <ul>
                                <li>Authentication verifies who the user is.</li>
                                <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                                <li>Authentication is the first step of a good identity and access management process.</li>
                                <li>Authentication is visible to and partially changeable by the user.</li>
                                </ul>
                            </p>
                        </p>
                    </div>
                </div>
            </div>
            <div className='card mt-3'>
                <div className='card-header'>
                    <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                </div>
                <div className='card-body'>
                    <p>Firebase can be seen as a server-less backend for your mobile apps, web apps, etc. It is a service provided by Google. It has many features like Authentication, Realtime database, Cloud functions, Analytics, Crashlytics, Cloud Firestore, Hosting etc.</p>
                    <p>Auth0, MongoDB, Passport, and Okta are the most popular alternatives and competitors to Firebase Authentication.</p>
                </div>
            </div>
            <div className='card mt-3 mb-5'>
                <div className='card-header'>
                    <h3>What other services does firebase provide other than authentication?</h3>
                </div>
                <div className='card-body'>
                    <p>
                    There are many services which Firebase provides, Most useful of them are:

                    Cloud Firestore,
                    Cloud Functions,
                    Authentication,
                    Hosting,
                    Cloud Storage,
                    Google Analytics,
                    Predictions,
                    Cloud Messaging,
                    Dynamic Links,
                    Remote Config.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;