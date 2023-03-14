import firebase from "./firebase";
import { FirebaseContext } from "./context";

const FirebaseProvider = ({ children }: any) => {
  return (
    <FirebaseContext.Provider value={ firebase }>
        { children }
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider