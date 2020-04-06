import React from 'react';
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire';
import firebaseConfig from './firebase/config';
import Router from './Router';
import Load from './components/Load';
function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <SuspenseWithPerf fallback={<Load />}>
        <Router />
      </SuspenseWithPerf>
    </FirebaseAppProvider>
  );
}

export default App;
