import { LoginBar } from './Components/LoginBar';
import { MainWindow } from './Components/MainWindow';
import { StatusBar } from './Components/StatusBar';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import firebase from './FirebaseConfig';
import './App.css';

const USER_LIST = ['Paul', 'John', 'George', 'Ringo'];
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <LoginBar user={user} setUser={setUser} userlist={USER_LIST} />
      <MainWindow />
      <StatusBar />
    </div>
  );
}

export default App;
