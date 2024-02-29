
import style from './Home.module.css'
import { Outlet } from 'react-router-dom';
import NavButtons from '../../components/Navigation/NavButtons/NavButtons';
import SearchBar from '../../components/Navigation/SearchBar/SearchBar';
import { useState } from 'react';

const Home = ({ loading }) => {
    const [searchInput, setSearchInput] = useState();
    const handleSubmit = () => {
        
    }
    return (
        <div className={ style.main_grid }>
            <NavButtons />
            <SearchBar searchInput={ searchInput } setSearchInput={ setSearchInput } />
            <Outlet />
        </div>
    )
}

export default Home