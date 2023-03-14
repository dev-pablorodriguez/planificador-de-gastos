//context
import AppContextProvider from './src/context/AppContextProvider'
import FirebaseProvider from './src/firebase/FirebaseProvider'

import AppWrapper from './src/components/AppWrapper';

export default function App() {
  return (
    <AppContextProvider>
      <FirebaseProvider>
        <AppWrapper />
      </FirebaseProvider>
    </AppContextProvider>
  );
}
