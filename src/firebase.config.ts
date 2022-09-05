import { initializeApp, getApps } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';

const config = {
  apiKey: 'AIzaSyCLSR1ic_VSL23E73yzNGEMCof8L7hoWl0',
  authDomain: 'super-store-2ae61.firebaseapp.com',
  projectId: 'super-store-2ae61',
  storageBucket: 'super-store-2ae61.appspot.com',
  messagingSenderId: '199244471872',
  appId: '1:199244471872:web:fa870f977038032cd009a5',
  measurementId: 'G-60JWKDVB26',
};

const appList = getApps();
let app;

if (!appList.length) {
  app = initializeApp(config);
}

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
