import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB01LU9gwM1HRC87MXFP-UdNfeM-1E8hqg',
  authDomain: 'web1309chat.firebaseapp.com',
  projectId: 'web1309chat',
  storageBucket: 'web1309chat.appspot.com',
  messagingSenderId: '766823477594',
  appId: '1:766823477594:web:a3d9ea6b4a9f31662ec363',
  measurementId: 'G-LLK2CJDDVM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
