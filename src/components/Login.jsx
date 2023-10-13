import React, { useState } from 'react';
import { authenticate } from "../api/functions/auth"


const Login = ({errorLog}) => {

    const [error, setError] = useState(errorLog);

    return (
        <div className='cadreCnx bg-white p-4 rounded-md shadow space-y-8 py-12 px-4 sm:px-6 lg:px-8'>
            <div>
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-800 uppercase">
                    Se connecter à son compte
                </h1>
            </div>

            <hr />
            {errorLog && <p>{error}</p>}
        </div>
    );
};

export default Login;
