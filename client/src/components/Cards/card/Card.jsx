import StarIcon from '../../../assets/goldStar.png'
import style from './Card.module.css'

const Card = ({ game }) => {

    return (
        <div className={ style.card_container }>
            <div className={ style.image_wrapper }>
                <img src={ game.background_image } alt={ game.name } />
            </div>
            <div className={ style.info_wrapper }>
                <h2>
                    { game.name }
                </h2>
                <div className={ style.rating_wrapper }>
                    {
                        [ ...new Array(game.rating_top) ].map((s, i) => (
                            <img className={ style.starIcon } key={ i } src={ StarIcon } alt={ i } />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Card