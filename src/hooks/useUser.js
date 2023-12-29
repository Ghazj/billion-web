import { useContext, useCallback } from 'react';
import { signInApi } from '../services/signIn';
import { loginApi } from '../services/login';
import { verifyTokenApi } from '../services/verifyToken';

import Context from '../contexts/userContext';

function useUser() {
    const { jwt, setJWT } = useContext(Context);

    const signIn = useCallback( async (signInData) => {
        console.log('signInData: ', signInData);
        let response = await signInApi(signInData);
        return response
    })

    const login = useCallback((loginData) => {
        console.log('loginData: ', loginData);

        loginApi(loginData)
            .then(res => setJWT(res.data))
            .catch(e => console.log(e))
    })

    const verifyToken = useCallback((header) => {
        return verifyTokenApi(header);
    })

    const logout = useCallback(() => {
        setJWT(null);
    })

    return (
        {
            isLogged: Boolean(jwt),
            signIn,
            login,
            verifyToken,
            logout,
            jwt
        }
    )
}

export default useUser;