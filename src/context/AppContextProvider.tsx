import { useReducer } from 'react'
import { ICategoria } from '../interfaces/ICategoria'
import { IGasto } from '../interfaces/IGasto'
import { AppContext } from './appContext'
import { appContextReducer } from "./appReducer"

import { types } from './types'

const AppContextProvider = ({ children }: any) => {
    //reducer
    const [state, dispatch] = useReducer(appContextReducer, {
        isLoading: false,
        user: {
            isLogged: false
        },
        categories: [],
        gastos: []
    })

    const setLoading = (loading: boolean) => {
        dispatch({
            type: types.LOADING,
            payload: loading
        })
    }

    const login = (uid: string) => {
        dispatch({
            type: types.LOGIN,
            payload: uid
        })
    }

    const logout = () => {
        dispatch({
            type: types.LOGOUT
        })
    }

    const setCategories = (items: ICategoria[]) => {
        dispatch({
            type: types.SET_CATEGORIES,
            payload: items
        })
    }

    const setGastos = (items: IGasto[]) => {
        dispatch({
            type: types.SET_GASTOS,
            payload: items
        })
    }

    return (
        <AppContext.Provider value={{
            ...state,
            setLoading,
            login,
            logout,
            setCategories,
            setGastos
        }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider
