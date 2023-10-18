// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNExiAK2zPzKue34My-wGmgbY6hgDg9as",
    authDomain: "test-a6ed7.firebaseapp.com",
    projectId: "test-a6ed7",
    storageBucket: "test-a6ed7.appspot.com",
    messagingSenderId: "907031823502",
    appId: "1:907031823502:web:fb1c23f968e7a847c035df",
    measurementId: "G-PF0MCK3ZBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            createUserDocument(result)
        })
        .catch((error) => {
            console.log(error);
        });
};

const createUserDocument = async (obj) => {
    const usersRef = collection(db, "Users");
    await setDoc(doc(usersRef, obj.user.uid), {
        email: obj.user.email
    });
}

const getUserDocument = async (obj) => {
    const usersRef = collection(db, "Users");
    const docRef = doc(usersRef, obj.user.uid);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
}

const getBookDocument = async (bookReference) => {
    const booksRef = collection(db, "Books")
    const docRef = doc(booksRef, bookReference)
    const docSnap = await getDoc(docRef)

    return docSnap.data()
}

export { auth, signInWithGoogle, createUserDocument, getUserDocument, getBookDocument };