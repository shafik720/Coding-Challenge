import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import FindUser from './Components/FindUser/FindUser';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <div className="main-div">
        <Header></Header>
        <div className="main-div-second">
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/findUser' element={<FindUser></FindUser>}></Route>

            <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
