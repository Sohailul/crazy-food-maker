import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitHubUser, gitHubError] = useSignInWithGithub(auth);

    if (user || gitHubUser) {
        navigate('/');
    }

    const googleSignIn = () => {
        signInWithGoogle();
    }

    const gitHubSignIn = () => {
        signInWithGithub();
    }
    return (
        <div>
            <div className='form-group d-flex justify-content-center'>
                <button
                    onClick={googleSignIn}
                    className="btn w-50"
                    style={{ backgroundColor: "#f0a453" }}><FcGoogle />&nbsp;SignIn with Google</button>
            </div>
            <div className='form-group d-flex justify-content-center mt-3'>
                <button
                    onClick={gitHubSignIn}
                    className="btn w-50" style={{ backgroundColor: "#f0a453" }}><BsGithub />&nbsp;SignIn with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;