import style from './NavButtons.module.css'
import HomeIcon from "../../../icons/HomeIcon/HomeIcon"
import SearchIcon from '../../../icons/SearchIcon/SearchIcon';
import { Link } from 'react-router-dom';
import PlusIcon from '../../../icons/PlusIcon/PlusIcon';

const NavButtons = () => {
    return (
        <div className={ style.main_grid }>
            <ul className={ style.buttonsContainer }>
                <li className={ style.homeButonContainer }>
                    <Link to="/videogames">
                        <HomeIcon />
                        <span>Home</span>
                    </Link>
                </li>
                <li className={ style.searchButonContainer }>
                    <Link to="create">
                        <PlusIcon />
                        <span>Add videogame</span>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default NavButtons