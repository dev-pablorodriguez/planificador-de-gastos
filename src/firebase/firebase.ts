import firebaseConfig, { firebaseUser } from './config';

import {
    Auth,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
    Firestore,
    getFirestore,
    collection,
    query,
    orderBy,
    onSnapshot,
    addDoc,
    doc,
    deleteDoc,
    setDoc,
    Timestamp
} from 'firebase/firestore'
import { ICategoria } from '../interfaces/ICategoria';
import { INewCategoria } from '../interfaces/INewCategoria';
import { IGasto } from '../interfaces/IGasto';
import { INewGasto } from '../interfaces/INewGasto';

export class Firebase {
    private _db: Firestore;
    private _auth: Auth;

    constructor(){
        const app: FirebaseApp = initializeApp(firebaseConfig);
        this._db = getFirestore(app);

        this._auth = getAuth();
    }

    onAuthStateChangedHandler = ( callback: (user: any) => void ) => {
        const unsubscribe = onAuthStateChanged(this._auth, callback);

        return unsubscribe;
    }

    login = async () => {
        try {
            await signInWithEmailAndPassword(this._auth, firebaseUser.username, firebaseUser.password)
        } catch (error: any) {
            return error.code;
        }
    }

    logout = async () => {
        try {
            await signOut(this._auth)
        } catch (error: any) {
            return error.code;
        }
    }

    getCategories = (setSate: (categories: ICategoria[]) => void) => {
        try {
            const col = collection(this._db, 'categories_dev')

            const unsuscribe = onSnapshot(query(col, orderBy('created')), querySnapshot => {
                const items: ICategoria[] = [];
                querySnapshot.forEach(doc => {
                    const { title, canBeModified, created } = doc.data()
                    items.push({
                        id: doc.id,
                        title,
                        canBeModified,
                        created
                    });
                })

                setSate(items);
            })

        } catch (error: any) {
            return error.code;
        }
    }

    addCategory = async (categoria: INewCategoria): Promise<boolean> => {
        try {
            const col = collection(this._db, 'categories_dev')
            const { title, canBeModified, created } = categoria;
            await addDoc(col, {
                title,
                canBeModified,
                created
            })

            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    getGastos = (setSate: (gastos: IGasto[]) => void) => {
        try {
            const col = collection(this._db, 'gastos_dev')

            const unsuscribe = onSnapshot(query(col, orderBy('created', 'desc')), querySnapshot => {
                const items: IGasto[] = [];
                querySnapshot.forEach(doc => {
                    const { title, amount, desc, created, category } = doc.data()
                    
                    items.push({
                        id: doc.id,
                        title,
                        amount,
                        desc,
                        created: created.toDate(),//Firebase Timestamp method toDate()
                        category
                    });
                })
                
                setSate(items);
            })

        } catch (error: any) {
            return error.code;
        }
    }

    addGasto = async (gasto: INewGasto): Promise<boolean> => {
        try {
            const col = collection(this._db, 'gastos_dev')
            const { title, amount, desc, created, category} = gasto;
            await addDoc(col, {
                title, amount, desc, created, category
            })

            return true;
        } catch (error) {
            console.log(error)

            return false;
        }
    }

    // async deleteProduct(id: string): Promise<boolean>{
    //     try {
    //         const document = doc(this._db, 'productos', id)
    //         await deleteDoc(document);

    //         return true;
    //     } catch (error) {
    //         console.log(error)

    //         return false;
    //     }
    // }

    // async updateProduct(producto: IProducto): Promise<boolean>{
    //     try {
    //         const { id, title, inPossesion, created } = producto

    //         const document = doc(this._db, 'productos', id)
    //         await setDoc(document, {
    //             title,
    //             inPossesion,
    //             created
    //         })

    //         return true;
    //     } catch (error) {
    //         console.log(error)

    //         return false;
    //     }
    // }
}

const firebase = new Firebase();

export default firebase;