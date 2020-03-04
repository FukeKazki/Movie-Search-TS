import React, {useReducer, useEffect} from 'react'
import Header from './Header'
import Movie from './Movie'
import Search from './Search'

export interface Movie {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

interface State {
    loading: boolean
    movies: Movie[]
    errorMessage: string | null
}

enum ActionName {
    REQUEST = 'SEARCH_MOVIES_REQUEST',
    SUCCESS = 'SEARCH_MOVIES_SUCCESS',
    FAILURE = 'SEARCH_MOVIES_FAILURE',
}

interface REQUEST {
    type: ActionName.REQUEST
}

interface SUCCESS {
    type: ActionName.SUCCESS
    payload: Movie[]
}

interface FAILURE {
    type: ActionName.FAILURE
    error: string
}

type MovieActions = REQUEST | SUCCESS | FAILURE

const MOVIE_API_URL: string = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b'

const initialState: State = {
    loading: true,
    movies: [],
    errorMessage: null,
}

const reducer = (state: State, action: MovieActions): State => {
    console.log(action)
    switch (action.type) {
        case 'SEARCH_MOVIES_REQUEST':
            return {
                ...state,
                loading: true,
                errorMessage: null
            }
        case 'SEARCH_MOVIES_SUCCESS':
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        case 'SEARCH_MOVIES_FAILURE':
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            }
        default:
            return state
    }
}

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                dispatch({
                    type: ActionName.SUCCESS,
                    payload: jsonResponse.Search
                })
            })
    }, [])

    const search = (searchValue: string) => {
        dispatch({
            type: ActionName.REQUEST
        })

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === 'True') {
                    dispatch({
                        type: ActionName.SUCCESS,
                        payload: jsonResponse.Search
                    })
                } else {
                    dispatch({
                        type: ActionName.FAILURE,
                        error: jsonResponse.Error
                    })
                }
            })
    }

    const {movies, errorMessage, loading} = state

    return (
        <div>
            <Header text='HOOKED'/>
            <Search search={search}/>
            <p>Sharing a few of our favourite movies</p>
            <div>
                {loading && !errorMessage ? (
                    <span>loading... </span>
                ) : errorMessage ? (
                    <div>{errorMessage}</div>
                ) : (
                    movies.map((movie: Movie, index: number) => (
                        <Movie key={`${index}-${movie.Title}`} movie={movie}/>
                    ))
                )}
            </div>
        </div>
    )
}

export default App
