import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import FindUser from './Components/FindUser/FindUser';

function App() {
  return (
    <div>
      <div className="main-div">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/findUser' element={<FindUser></FindUser>}></Route>

          <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        </Routes>        
      </div>
    </div>
  );
}

export default App;
