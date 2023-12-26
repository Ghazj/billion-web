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
        </div>
    )
}

export default MainMenu;