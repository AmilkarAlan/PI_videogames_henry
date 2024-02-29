import CardsContainer from '../../Cards/cardContainer/CardsContainer'
import style from './NavBar.module.css'
import NavButtons from '../NavButtons/NavButtons'

const NavBar = ({ gamesApi }) => {
    return (
        <div className={ style.main_wrapper }>
            <NavButtons />
            <nav className={ style.navBar }>
                
            </nav>
        </div>
    )
}

export default NavBar