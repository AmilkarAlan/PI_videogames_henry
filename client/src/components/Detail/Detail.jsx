import { useParams } from 'react-router-dom'
import style from './Detail.module.css'

const Detail = ({games}) => {
    const {id} = useParams();
    const game = games.find((g)=> g.id === id)
    console.log(game);
  return (
    <div>
        { game ? "cargado" : "cargando" }
    </div>
  )
}

export default Detail