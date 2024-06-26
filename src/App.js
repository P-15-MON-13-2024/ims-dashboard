import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import HomePage from './components/HomePage/HomePage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import InventoryViewPage from './components/InventoryViewPage/InventoryViewPage';
import UserListPage from './components/UserListPage/UserListPage';
import PopUpBlock from './components/PopUpBlock/PopUpBlock';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <HeaderBar className="Navigation"/>
      <div className='workArea'>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/inventory' element={<InventoryViewPage/>} />
            <Route path='/user-list' element={<UserListPage/>} />
            <Route path='*' element={<PageNotFound/>} />

          </Routes>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
