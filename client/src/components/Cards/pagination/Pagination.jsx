import styles from './Pagination.module.css'

const Pagination = ({ games, handlePageChange, itemsPerPage, currentPage}) => {

    return (
        <div>
            <div>
                { Array(Math.ceil(games.length / itemsPerPage)).fill().map((_, index) => (
                    <button key={ index } onClick={ () => handlePageChange(index + 1) }
                    className={`${styles.button} ${currentPage === index + 1 ? styles.active : ''}`}>
                        { index + 1 }
                    </button>
                )) }
            </div>
        </div>
    );

}

export default Pagination