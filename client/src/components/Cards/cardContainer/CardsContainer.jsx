import { useState } from 'react';
import Card from '../card/Card'
import style from './CardsContainer.module.css'
import Pagination from '../pagination/Pagination';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 10
const CardsContainer = ({ games }) => {

  const [ currentPage, setCurrentPage ] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedItems = games.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className={ style.cards_wrapper }>
      <div className={ style.cards_grid }>
        { selectedItems.map((game) => (
          <Link to={ `detail/${game.id}` } >
            <Card key={ game.id } game={ game } />
          </Link>
        )) }
      </div>
      <Pagination handlePageChange={ handlePageChange } itemsPerPage={ ITEMS_PER_PAGE } currentPage={ currentPage } games={games}/>
    </div>
  )
}

export default CardsContainer