import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import Books from './components/Books';
import { useState } from 'react';

function App() {

  const [books, setBooks] = useState([])

  return (
    <div className="App">
      <SignIn books={books} setBooks={setBooks} />
      <SignUp />
      <AuthDetails />
      <Books books={books} />
    </div>
  );
}

export default App;