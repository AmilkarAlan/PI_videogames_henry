import axios from "axios"
import * as actionTypes from "./actions-type"

export const getVideogames = () => {
    return async (dispatch) => {
        dispatch(
            {
                type: actionTypes.GET_GENRE_START
            }
        );
        try {
            const { data:{results} } = await axios.get("http://localhost:3001/videogames/");
            dispatch({
                type: actionTypes.GET_VIDEOGAME_FULL,
                payload: results.dbData.length ? {db:results.dbData, api:results.apiData} : {api: results.apiData},
            });
            
        } catch (error) {
            dispatch({
                type: actionTypes.GET_VIDEOGAME_ERROR,
                error: error.message
            });
        }
    }
}
