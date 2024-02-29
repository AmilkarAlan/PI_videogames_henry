import { useState } from 'react';
import CardsContainer from '../../Cards/cardContainer/CardsContainer'
import NavButtons from '../../Navigation/NavButtons/NavButtons';
import SearchBar from '../../Navigation/SearchBar/SearchBar';
import style from './MainPage.module.css'

const MainPage = ({games}) => {


  return (
    <div className={ style.main_grid }>

      <CardsContainer games={games} />

    </div>
  )
}

export default MainPage