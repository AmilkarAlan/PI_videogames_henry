import * as actionsType from './actions-type'

const initialState = {
    videogamesApi: [],
    videogamesDb: [],
    searchResults: [],
    genres: [],
    loading: true,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.GET_VIDEOGAME_START:
            return {
                ...state,
                loading: true,
            }
        case actionsType.GET_VIDEOGAME_FULL:
            return {
                ...state,
                loading: false,
                videogamesApi: [ ...action.payload.api],
                videogamesDb: action.payload.db ? [...action.payload.db] : []
               
            }
        case actionsType.GET_VIDEOGAME_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer