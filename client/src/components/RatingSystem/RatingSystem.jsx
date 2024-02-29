import { useState } from 'react'
import style from './RatingSystem.module.css'

const RatingSystem = ({maxStars, onChange}) => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (star) =>{ 
        setRating(star);
        onChange(star);
    }
    
  return (
    <div className={style.rating_stars}>
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className={`${style.star} ${index < rating ? style.filled : ""}`}
          onClick={() => handleStarClick(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default RatingSystem