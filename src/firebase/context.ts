import { createContext } from 'react'
import { Firebase } from './firebase';

export const FirebaseContext = createContext<Firebase>({} as Firebase);
