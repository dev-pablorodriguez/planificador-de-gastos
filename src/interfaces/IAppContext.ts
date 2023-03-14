import { IAppState } from "./IAppState";
import { ICategoria } from "./ICategoria";
import { IGasto } from "./IGasto";

export interface IAppContext extends IAppState {
    setLoading: (loading: boolean) => void
    login: (uid: string) => void
    logout: () => void
    setCategories: (items: ICategoria[]) => void
    setGastos: (items: IGasto[]) => void    
}