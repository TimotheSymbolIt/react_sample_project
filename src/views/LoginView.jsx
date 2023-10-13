import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../shared/store/slice/authSlice';
import { authenticate } from '../api/functions/auth';

/**
 * Login View
 */

const LoginView = () => {

    const [errorLog, setErrorLog] = useState(false)
    const [textInput, setTextInput] = useState("")
    const dispatch = useDispatch()
    const user = useSelector((state) => state); // Utilisez le sélecteur pour obtenir l'utilisateur

    console.log(user)
    const handleLogin = (values) => {
        authenticate(values)
            .then(res => {
                if(res.status === 200 && res.data.token) {
                    dispatch(signIn(res.data.token))
                }
            }
            ).catch((error) => setErrorLog(error))
    }

    return (
        <div className="container">
            <div className="max-w-7xl mx-auto">
                <input type='text' onChange={(e) => {setTextInput(e.target.value)}}/>
                <p>{textInput}</p>

                <button onClick={() => handleLogin(textInput)}>Submit</button>
                {/* <Login submit={handleLogin} errorLog={errorLog} /> */}
            </div>
        </div>
    );
};

export default LoginView
