import PostForm from '../postForm/PostForm'
import style from './CardForm.module.css'

const CardForm = ({games}) => {
    return (
        <div>
            <div>
                <h2>Añade un videojuego</h2>
                <hr />
            </div>
            <PostForm games={games}/>
        </div>
    )
}

export default CardForm