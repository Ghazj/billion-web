import { useContext, useCallback } from 'react';
import { signInApi } from '../services/signIn';
import { loginApi } from '../services/login';
import { verifyTokenApi } from '../services/verifyToken';

import Context from '../contexts/userContext';

function useUser() {
    const { jwt, setJWT } = useContext(Context);

    const signIn = useCallback(async (signInData) => {
        console.log('signInData: ', signInData);
        let response = await signInApi(signInData);
        return response
    }, [])

    const login = useCallback((loginData) => {
        console.log('loginData: ', loginData);

        loginApi(loginData)
            .then(res => {
                if (res.status === 201) {
                    console.log('status: ' + res.status)
                    setJWT(res.data)
                } else {
                    console.log('status: ' + res.status)
                    setJWT(null);
                }
            })
            .catch(e => console.log(e))
    }, [])

    const verifyToken = useCallback(async (header) => {
        console.log('Header: ', header)
        let response = await verifyTokenApi(header);
        console.log(response);
        if (response.status === 201) {
            console.log('status: ' + response.status)
        } else {
            console.log('status: ' + response.status)
            setJWT(null);
        }
        return response;
    })

    const logout = useCallback(() => {
        setJWT(null);
    })

    return (
        {
            isLogged: Boolean('jwt'),
            signIn,
            login,
            verifyToken,
            logout,
            jwt
        }
    )
}

export default useUser;