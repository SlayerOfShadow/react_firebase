import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Import the necessary Firebase Firestore functions

const Books = ({ firebaseApp, books }) => {

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const db = getFirestore(firebaseApp); // Get Firestore instance from firebaseApp
    //         const booksCollection = collection(db, 'Books'); // Reference to the "Books" collection
    //         const querySnapshot = await getDocs(booksCollection); // Fetch the documents in the collection

    //         // Convert the querySnapshot to an array of book objects
    //         const booksData = querySnapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             ...doc.data(),
    //         }));

    //         setBooks(booksData); // Update the state with the fetched books
    //     };
    
    //     fetchData();
    // }, [firebaseApp]);

    return (
        <div>
            <h2>My Books:</h2>
            <ul>
                {books.map((book, index) => (
                    <div key={index}><b>{book.Title}</b> written by {book.Author}</div>
                ))}
            </ul>
        </div>
    );
};

export default Books;
