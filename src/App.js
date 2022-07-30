import {
  useCollectionData,
  useDocumentData,
} from 'react-firebase-hooks/firestore';
import { LoginBar } from './Components/LoginBar';
import { MainWindow } from './Components/MainWindow';
import { StatusBar } from './Components/StatusBar';
import { useState, useEffect } from 'react';
import { collection, doc } from 'firebase/firestore';
import { firestore } from './FirebaseConfig';
import './App.css';

function App() {
  const [userNum, setUserNum] = useState(null);
  const [players, loading, error] = useCollectionData(
    collection(firestore, 'players')
  );

  const [gameState, gloading, gerror] = useDocumentData(
    doc(firestore, 'game', 'state')
  );

  useEffect(() => {
    console.log('Initial load');
    const localUser = localStorage.getItem('user');
    if (localUser !== 'null') setUserNum(localStorage.getItem('user'));
  }, []);

  useEffect(() => {
    console.log('User has changed, updating useEffect');
    const localUser = localStorage.getItem('user');
    if (localUser !== userNum) localStorage.setItem('user', userNum);
  }, [userNum]);

  return (
    <div>
      {(loading || gloading) && <p>LOADING...</p>}
      {(error || gerror) && <p>ERROR...</p>}
      {players && (
        <div className="App">
          {console.log(gameState)}
          <LoginBar
            username={players[userNum]?.displayName}
            setUser={setUserNum}
            players={players}
            turn={gameState.turn}
          />
          <MainWindow
            phase={gameState.phase}
            userNum={userNum}
            players={players}
          />
          <StatusBar role={players[userNum]?.role} />
        </div>
      )}
    </div>
  );
}

export default App;
