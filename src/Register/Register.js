import React from 'react';

const Register = () => {
    return (
        <div>
            <form>
                <input type="text" name="name" id="" placeholder='your name' required />
                <input type="email" name="email" id="" placeholder='your Email' required />
                <input type="password" name="password" id="" placeholder='Your password' required />
            </form>
        </div>
    );
};

export default Register;