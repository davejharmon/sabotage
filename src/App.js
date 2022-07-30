import { useCollectionData } from 'react-firebase-hooks/firestore';
import { LoginBar } from './Components/LoginBar';
import { MainWindow } from './Components/MainWindow';
import { StatusBar } from './Components/StatusBar';
import { useState, useEffect } from 'react';
import { collection } from 'firebase/firestore';
// eslint-disable-next-line no-unused-vars
import { firestore } from './FirebaseConfig';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [phase, setPhase] = useState('awaitingvote');
  const [players, loading, error] = useCollectionData(
    collection(firestore, 'players')
  );

  useEffect(() => {
    console.log('Initial load');
    const localUser = localStorage.getItem('user');
    console.log(localUser);
    // TODO: NEXT STEP: Make User a user number showing position in array.
    if (localUser !== 'null') setUser(localStorage.getItem('user'));
  }, []);

  useEffect(() => {
    console.log('User has changed, updating useEffect');
    const localUser = localStorage.getItem('user');
    if (localUser !== user) localStorage.setItem('user', user);
  }, [user]);

  return (
    <div className="App">
      {loading && <p>LOADING...</p>}
      {error && <p>ERROR...</p>}
      {players && (
        <div>
          {console.log(players)}
          <LoginBar user={user} setUser={setUser} players={players} />
          <MainWindow phase={phase} user={user} players={players} />
          <StatusBar />
        </div>
      )}
    </div>
  );
}

export default App;
