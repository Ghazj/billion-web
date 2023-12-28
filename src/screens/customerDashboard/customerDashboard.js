import { useNavigate } from 'react-router-dom'
import useUser from '../../hooks/useUser';
import { useEffect } from 'react';
import Chart1 from '../../components/charts/chart1';
import { Employee } from '../../services/Employee';

import './customerDashboard.css'

function CustomerDashboard() {
    const { isLogged, logout, jwt} = useUser();
    const navigate = useNavigate();
    
    const fetchEmployee = async (token) =>{
        const res = await Employee(token);
        console.log(res);
    }

    const initialData = [
        { time: '2018-12-22', value: 90.51 },
        { time: '2018-12-23', value: 31.11 },
        { time: '2018-12-24', value: 27.02 },
        { time: '2018-12-25', value: 27.32 },
        { time: '2018-12-26', value: 25.17 },
        { time: '2018-12-27', value: 28.89 },
        { time: '2018-12-28', value: 25.46 },
        { time: '2018-12-29', value: 23.92 },
        { time: '2018-12-30', value: 22.68 },
        { time: '2018-12-31', value: 4.67 },
    ];

    useEffect(() => {
        if (isLogged === false) navigate('/')
    }, [isLogged, navigate])

    const handleClick = (e) => {
        e.preventDefault();
        logout();
    }

    const handleClickEmployee = (e) => {
        e.preventDefault();
        fetchEmployee(jwt);
    }

    return (
        <div className='customerDashboard'>
            <header>
                <h1>Welcome, </h1>
            </header>
            <h1>
                Customer Dashboard
            </h1>
            <button className='mainMenu' onClick={handleClick}>Cerrar sesión</button>
            <Chart1 data={initialData}/>
            <button className='fetch' onClick={handleClickEmployee}>Consultar Employee</button>
        </div>
    )
}

export default CustomerDashboard;