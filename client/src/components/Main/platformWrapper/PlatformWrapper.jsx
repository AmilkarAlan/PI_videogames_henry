import style from './PlatformWrapper.module.css'
import Card from '../../Cards/card/Card';

const PlatformWrapper = ({ attributeName, games }) => {
  return (
    <section className={ style.main_wrapper }>
      <div>
        <h3>{ attributeName } </h3>
      </div>
      <div className={ style.cards_wrapper }>

        <div className={ style.cards_grid }>
          { games.slice(0, 10).map((game) => (
            <Card key={ game.id } game={ game } />
          )) }
        </div>
      </div>

    </section>
  )
}

export default PlatformWrapper