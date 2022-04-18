import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../images/Social/google.png'
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {

        errorElement = <div>
            <p className='text-danger' >Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center ' >
                <div style={{ height: '1px' }} className='bg-primary w-50' ></div>
                <p className='mt-2 px-2 ' >or</p>

                <div style={{ height: '1px' }} className='bg-primary w-50' ></div>


            </div>

            <div  >
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary d-block mx-auto ' > <img style={{ width: '30px' }} src={google} alt="" /> Google Sign in</button>
            </div>
            {errorElement}

        </div>


    );
};

export default SocialLogin;