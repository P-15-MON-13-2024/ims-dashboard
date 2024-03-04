import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import HomePage from './components/HomePage/HomePage';
function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <div className='workArea'>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
