import { useContext, useCallback } from 'react';
import Context from '../contexts/userContext';

function useUser (){
    const {jwt, setJWT} = useContext(Context);

    const login = useCallback(({user, password}) => {
        setJWT('test');
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null);
    }, [setJWT])

    return(
        {
            isLogged: Boolean(jwt),
            login,
            logout
        }
    )
}

export default useUser;