import { useContext, useCallback } from 'react';
import Context from '../contexts/userContext';

function useUser (){
    const {jwt, setJWT} = useContext(Context);

    const login = useCallback((user, password) => {
        
        let inputObj={"Username": user, "Password": password}

    const token = fetch("http://localhost:21658/api/users/login",{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(inputObj)
    }).then((res=>{
        return res.json();
    })).then((resp=>{
        setJWT(resp.Data.Token);
    }))
    }, [setJWT])
    
    const logout = useCallback(() => {
        setJWT(null);
    }, [setJWT])
    
    return(
        {
            isLogged: Boolean(jwt),
            login,
            logout,
            jwt
        }
    )
}

export default useUser;