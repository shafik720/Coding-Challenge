import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import FindUser from './Components/FindUser/FindUser';
import Header from './Components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FindSingleUser from './Components/FindUser/FindSingleUser/FindSingleUser';


function App() {
  return (
    <div>
      <div className="main-div">
        <Header></Header>
        <div className="main-div-second">
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/findUser' element={<FindUser></FindUser>}></Route>
            <Route path='/findSingleUser/:userName' element={<FindSingleUser></FindSingleUser>}></Route>

            <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
          </Routes>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

        </div>
      </div>
    </div>
  );
}

export default App;
