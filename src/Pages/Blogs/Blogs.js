import React from 'react';

const Blogs = () => {
    return (
        <div style={{ width: '50%' }} >
            <h2>Differnece Between Authentication and Autorization  </h2>
            <p>
                Authentication is mainly a process where it verify the person who is trying to access something. It's like checking one person's ID to ensure that he or she is the person they are representing.
            </p>
            <p>
                On the other hand authorization specifies the data,files and application one user has access. Authorization gives the access to the user which are available for the user.
            </p>

            <h2>Why i use firebase:</h2>
            <p>
                Firebase is used for authentication. I used in this project. Firebase is lightweight, simple to use, friendly, well recognized. It can reduce workload and also reduce time. So i get more time to make my project unique.
            </p>

            <h2>Some other options for authentication:</h2>

            <p>
                There are also some more option that are used for authentication. Such As 1. Token Based authentication 2. Cookie based authentication. 3. SAML(Security assertion markup language) 4.OpenId authentication etc.
            </p>

            <h2>What firebase does rather that authentication:</h2>

            <p>
                Firebase has multiple uses for the developers. Rather than authentication it does many more. Like website analytics: Firebase gives the developer or owner of the website information about the users. That helps to update the website. It reports about crashing apps and also fix those apps. It creates marketing alongside product experiment.
            </p>

        </div>
    );
};

export default Blogs;