import { LoginBar } from './Components/LoginBar';
import { MainWindow } from './Components/MainWindow';
import { StatusBar } from './Components/StatusBar';
// eslint-disable-next-line no-unused-vars
import firebase from './FirebaseConfig';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoginBar />
      <MainWindow />
      <StatusBar />
    </div>
  );
}

export default App;
