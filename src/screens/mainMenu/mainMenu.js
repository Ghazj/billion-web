import { Link } from 'react-router-dom'

function MainMenu() {
    return (
        <div >
            <h1>
                Main Menu
            </h1>
            <Link to='/login'>
                <button className='loggingButton'>Login</button>
            </Link>
            <Link to='/sign-in'>
                <button className='signInButton'>Crear cuenta</button>
            </Link>
        </div>
    )
}

export default MainMenu;