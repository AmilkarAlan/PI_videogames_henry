import style from './SearchBar.module.css'
import SearchIcon from '../../../icons/SearchIcon/SearchIcon';
import { useState } from 'react';

const SearchBar = ({setSearchInput,searchInput}) => {
    const [ open, setOpen ] = useState(false);

    return (
        <div className={ style.formContainer }>
            <form
                className={ open ? (style.main_searchBarContainer + " " + style.open) : style.main_searchBarContainer }>
                <input
                    className={ style.inputSearch }
                    type="search"
                    value={searchInput}
                    onChange={(e)=>setSearchInput(e.target.value)}
                    name="search" />
                <div
                    onClick={ () => setOpen(!open) }
                    className={ style.iconContainer }>
                    <SearchIcon />
                </div>
            </form>
        </div>
    )
}

export default SearchBar