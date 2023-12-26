import { Link, useNavigate } from 'react-router-dom'
import useUser from '../../hooks/useUser';
import { useEffect } from 'react';

function CustomerDashboard() {
    const { isLogged, logout } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Login isLogged: ', isLogged)
        if (isLogged === false) navigate('/')
    }, [isLogged, navigate])

    const handleClick = (e) => {
        console.log('Login isLogged: ', isLogged)
        e.preventDefault();
        logout();
        console.log('Login isLogged: ', isLogged)
    }

    return (
        <div >
            <h1>
                Customer Dashboard
            </h1>
            <button className='mainMenu' onClick={handleClick}>Cerrar sesión</button>
        </div>
    )
}

export default CustomerDashboard;