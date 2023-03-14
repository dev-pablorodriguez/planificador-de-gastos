import { types } from "./types";
import { IAppState } from '../interfaces/IAppState'
import { IReducerAction } from "../interfaces/IReducerAction";

export const appContextReducer = ( state: IAppState, action: IReducerAction ): IAppState => {
    switch (action.type) {
        case types.LOADING:
            return { ...state, isLoading: action.payload }

        case types.LOGIN:
            return { ...state, user: { isLogged: true, uid: action.payload } };

        case types.LOGOUT:
            return { ...state, user: { isLogged: false } }

        case types.SET_CATEGORIES:
            return { ...state, categories: action.payload }
        
        case types.SET_GASTOS:
            return { ...state, gastos: action.payload }
            
        default:
            return state;
    }  
}