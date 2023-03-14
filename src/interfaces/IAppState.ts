import { ICategoria } from "./ICategoria";
import { IGasto } from "./IGasto";
import { IUser } from "./IUser";

export interface IAppState {
    isLoading: boolean
    user: IUser
    categories: ICategoria[]
    gastos: IGasto[]
}