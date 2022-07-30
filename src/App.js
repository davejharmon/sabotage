import { LoginBar } from './Components/LoginBar';
import { MainWindow } from './Components/MainWindow';
import { StatusBar } from './Components/StatusBar';
import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import firebase from './FirebaseConfig';
import './App.css';

// dummy data
const USER_LIST = ['Paul', 'John', 'George', 'Ringo'];

function App() {
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [phase, setPhase] = useState('awaitingvote');

  useEffect(() => {
    console.log('Initial load');
    const localUser = localStorage.getItem('user');
    console.log(localUser);
    if (localUser !== 'null') setUser(localStorage.getItem('user'));
  }, []);

  useEffect(() => {
    console.log('User has changed, updating useEffect');
    const localUser = localStorage.getItem('user');
    if (localUser !== user) localStorage.setItem('user', user);
  }, [user]);

  return (
    <div className="App">
      <LoginBar user={user} setUser={setUser} userlist={USER_LIST} />
      <MainWindow phase={phase} user={user} userlist={USER_LIST} />
      <StatusBar />
    </div>
  );
}

export default App;
