import { initializeApp } from 'firebase/app';
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword
    } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDVs5UE5KUs8NlHm10LYXcv_pP95VB6Cag",
    authDomain: "e-commerce-cab8f.firebaseapp.com",
    projectId: "e-commerce-cab8f",
    storageBucket: "e-commerce-cab8f.appspot.com",
    messagingSenderId: "301527096674",
    appId: "1:301527096674:web:4229005cf441fd21fe203b"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {} ) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userCheck = await getDoc(userDocRef);

    if(!userCheck.exists()){
        const {displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInfo
            });
        }
        catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}

export const createAuthWithEmail = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}