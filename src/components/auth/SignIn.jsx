import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, getBookDocument, getUserDocument, signInWithGoogle } from "../../firebase";


const SignIn = ({books, setBooks}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then( async (userCredential) => {
        const user = await getUserDocument(userCredential);
        const tempBooks = [];
        user.Books.map(async (book) => {
          const newBook = await getBookDocument(book._key.path.segments[6]);
          tempBooks.push(newBook);
        })
        setBooks(tempBooks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
        <button onClick={signInWithGoogle}>Log In with Google</button>
      </form>
    </div>
  );
};

export default SignIn;