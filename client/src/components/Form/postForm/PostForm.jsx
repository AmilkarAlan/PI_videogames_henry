import style from "./PostForm.module.css"
import { getUniqueProperties, validate } from "../../../utils/hooks";
import { useState } from "react";
import SelectOptions from "../selectOptions/SelectOptions";
import RatingSystem from "../../RatingSystem/RatingSystem";

const PostForm = ({ games }) => {
    const [ ofName, setOfName ] = useState("");
    const [ releasedDate, setReleasedDate ] = useState("");
    const [ platformsSelected, setPlatformsSelected ] = useState("")
    const [ tagsSelected, setTagsSelected ] = useState("")
    const [ rating, setRating ] = useState("")
    const [ playtime, setPlaytime ] = useState("")

    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setOfName(value);
    };

    const handleChangePlaytime = (time) => {
        setPlaytime(time);
    }
    const handleChangeRating = (rating) => {
        setRating(rating);
    }
    const handleChangePlatform = (e) => {
        const { value, checked, id } = e.target;
        if (checked) {
            setPlatformsSelected([ ...platformsSelected, { [ "name" ]: value, [ "id" ]: id } ])
        } else {
            setPlatformsSelected(
                platformsSelected.filter((p) => p.id !== id)
            );
        }
    };
    const handleChangeTags = (e) => {
        const { value, checked, id } = e.target;
        if (checked) {
            setTagsSelected([ ...tagsSelected, { [ "name" ]: value, [ "id" ]: id } ])
        } else {
            setPlatformsSelected(
                tagsSelected.filter((p) => p.id !== id)
            );
        }
    };

    const handleChangeDate = (e) => {
        setReleasedDate(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const game = {
            name: ofName,
            search_name: ofName.toLowerCase().replace(/ /g, "-"),
            released: releasedDate,
            rating_top: rating,
            platforms: platformsSelected,
            tags: tagsSelected,
            playtime: playtime
        }
        const errors = validate(game);
        if (!Object.keys(errors).length) {

            console.log('¡Éxito! No hay errores.');
        } else {
            console.log('Hay errores:');
            for (let error in errors) {
                console.log(error + ': ' + errors[ error ]);
            }
        }

    };

    let platforms = getUniqueProperties(games, "platforms", "name");
    let tags = getUniqueProperties(games, "tags", "name");


    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="name">¿Cuál es el nombre del videojuego?</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={ ofName.name }
                        onChange={ handleChangeName }
                        placeholder="Ejemplo: Metal Slug 2..."

                    />
                </div>
                <div>
                    <label htmlFor="date">Fecha de lanzamiento: </label>
                    <input type="date"
                        name="date"
                        value={ releasedDate }
                        onChange={ handleChangeDate }
                    />
                </div>
                <div>
                    <label htmlFor="playtime">Tiempo de juego: </label>
                    <input type="number"
                        name="playtime"
                        value={ playtime }
                        onChange={(e)=> handleChangePlaytime(e.target.value) }
                    />
                </div>
                <div>
                    <label htmlFor="date">Calificacion: </label>
                    <RatingSystem onChange={ handleChangeRating } maxStars={ 5 } />
                </div>
                <div>
                    <label htmlFor="platforms">¿Para que plataformas fue lanzado?</label>
                    <SelectOptions
                        name={ "platforms" }
                        options={ platforms }
                        label={ "Plataforma" }
                        type={ "input" }
                        shape={ "checkbox" }
                        onChange={ handleChangePlatform } />
                </div>
                <div>
                    <label htmlFor="tags">¿Que etiquetas le pondrías?</label>
                    <SelectOptions
                        name={ "tags" }
                        options={ tags }
                        label={ "Etiquetas" }
                        type={ "input" }
                        shape={ "checkbox" }
                        onChange={ handleChangeTags } />
                </div>
                <div>
                    <button type="submit">Crear</button>
                </div>
            </form>
        </>
    );
}

export default PostForm