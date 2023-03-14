import { IReferenceCategoria } from "./IReferenceCategoria"

export interface INewGasto {
    title: string,
    amount: number
    desc: string,
    created: Date,
    category: IReferenceCategoria
}