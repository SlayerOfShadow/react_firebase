import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails />
      <Books />
    </div>
  );
}

export default App;