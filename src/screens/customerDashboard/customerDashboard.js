import useUser from '../../hooks/useUser';
import Chart1 from '../../components/charts/chart1';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Employee } from '../../services/Employee';

import { ReactComponent as Favorite } from '../../assets/icons/favorite.svg';
import { ReactComponent as Schedule } from '../../assets/icons/schedule.svg';
import { ReactComponent as Clock } from '../../assets/icons/clock-outline.svg';
import { ReactComponent as Timer } from '../../assets/icons/timer.svg';
import { ReactComponent as Pack } from '../../assets/Illustrations/pack-graphics.svg';

import './customerDashboard.css'
import { ColorType } from 'lightweight-charts';

function CustomerDashboard() {
    const { percent, setPercent } = useState(null);
    const { percentClass, setPercentClass } = useState('');
    const { isLogged, logout, jwt, verifyToken } = useUser();
    const navigate = useNavigate();

    const fetchEmployee = async (token) => {
        const res = await Employee(token);
        console.log(res);
    }

    const initialData = [
        { time: '2018-12-22', value: 300 },
        { time: '2018-12-23', value: 500 },
        { time: '2018-12-24', value: 634 },
        { time: '2018-12-25', value: 740 },
        { time: '2019-02-25', value: 740 },
        { time: '2019-02-28', value: 900 },
        { time: '2019-03-03', value: 1000 },
        { time: '2019-03-28', value: 1200 },
        { time: '2019-04-28', value: 1230 },
        { time: '2019-05-28', value: 1500 },
        { time: '2019-06-28', value: 9000 },
        { time: '2019-07-28', value: 10000 },
        { time: '2019-08-28', value: 11000 },
        { time: '2019-09-28', value: 15900 },
        { time: '2019-10-28', value: 19900 },
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

    const handleClickGetToken = (e) => {
        console.log(jwt);
        alert('El token actual de la sesisón es: ' + jwt)
    }

    const handleClickGetAuth = async (e) => {
        e.preventDefault();

        const header = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "token": jwt
            }
        }

        const response = await verifyToken(header);
        console.log(response)
    }

    return (
        <>
            {isLogged ?
                <div className='customerDashboard'>
                    <header>
                        <h1>Congratulations, {'{Customer Name}'} 🎉</h1>
                        <p>
                            Your social network had an incredible growth this month, let's see your statistics.
                        </p>
                    </header>
                    <div className='section'>
                        <div className='block'>
                            <div className='itemContainer'>
                                <div className='item'>
                                    <Favorite className='icon-engagement' />
                                    <strong>
                                        Engagement
                                    </strong>
                                    <strong className='textValue' >
                                        11%
                                    </strong>
                                    <strong className='equal'>
                                        ±0%
                                    </strong>
                                </div>
                            </div>
                            <div className='itemContainer'>
                                <div className='item'>
                                    <Schedule className='icon-growth' />
                                    <strong>
                                        Growth of the month
                                    </strong>
                                    <strong className='textValue' >
                                        15k
                                    </strong>
                                    <strong className='positive'>
                                        ↑+20%
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className='block'>
                            <div className='itemContainer'>
                                <div className='item'>
                                    <Clock className='icon-lastMonth' />
                                    <strong>
                                        Last month
                                    </strong>
                                    <strong className='textValue' >
                                        12k
                                    </strong>
                                    <strong className='negative'>
                                        ↓-16%
                                    </strong>
                                </div>
                            </div>
                            <div className='itemContainer'>
                                <div className='item'>
                                    <Timer className='icon-duration' />
                                    <strong>
                                        Duration of the Pack
                                    </strong>
                                    <strong className='textValue' >
                                        1 month
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className='block'>
                            <div className='itemContainer'>
                                <div className='item'>
                                    <strong className='pack-title'>
                                        PACK
                                    </strong>
                                    <strong className='textValue' >
                                        15k
                                    </strong>
                                    <Pack className='pack-illustration' />
                                </div>
                            </div>
                            <div className='itemContainer'>

                                <div className='item'>
                                    <strong className='currentGrowth-text'>
                                        Current Growth
                                    </strong>
                                    <strong className='textValue' >
                                        10k
                                    </strong>
                                    <strong className='toFinish-text' >
                                        To finish
                                    </strong>
                                    <strong className='textValue' >
                                        5k
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Chart1 data={initialData} />
                    </div>
                    <button className='mainMenu' onClick={handleClick}>Cerrar sesión</button>
                    <button className='fetch' onClick={handleClickEmployee}>Consultar Employee</button>
                    <button className='token' onClick={handleClickGetToken}>Consultar JWT</button>
                    <button className='token' onClick={handleClickGetAuth}>Consultar auth usuario</button>
                </div>
                : <></>
            }

        </>

    )
}

export default CustomerDashboard;