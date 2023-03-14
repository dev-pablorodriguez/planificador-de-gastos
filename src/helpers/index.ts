import { ICategoria } from "../interfaces/ICategoria";
import { IReferenceCategoria } from "../interfaces/IReferenceCategoria";

export const convertCategoriaToReferenceCategoria = (origin: ICategoria): IReferenceCategoria => {
    const category = origin as any;
    
    delete category.canBeModified;
    delete category.created;

    return category as IReferenceCategoria;
}