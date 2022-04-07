import './App.css';
import { FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import app from './firebase.init';

const auth = getAuth(app)

function App() {
  const provider = new FacebookAuthProvider();

  const [user1, setUser] = useState({})
  const facebookSignIn = () =>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    setUser(user)
    console.log(user)
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });

  }
  return (
    <div className="App">
      <>
      <button onClick={facebookSignIn}>Facebook</button>
      </>
      <div>
        <h3>name: {user1.displayName}</h3>
        <img src={user1.photoURL} alt="" />
      </div>
    </div>
  );
}

export default App;
