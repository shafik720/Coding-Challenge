import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes, useLocation } from 'react-router';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import FindUser from './Components/FindUser/FindUser';
import Header from './Components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FindSingleUser from './Components/FindUser/FindSingleUser/FindSingleUser';
import EditUser from './Components/EditUser/EditUser';
import { useEffect } from 'react';


function App() {
  const location = useLocation();

  useEffect(() => {
    // this function to be triggered on route change and it will change the background
    function handleRouteChange() {
      console.log(location.pathname);
      if(location.pathname == '/findUser'){
        document.querySelector('.main-div').classList.add('forest');
      }else{
        document.querySelector('.main-div').classList.remove('forest');
      }
    }
    handleRouteChange();
  }, [location]);
  return (
    <div>
      <div className="main-div">
        <Header></Header>
        <div className="main-div-second">
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/findUser' element={<FindUser></FindUser>}></Route>
            <Route path='/findSingleUser/:userName' element={<FindSingleUser></FindSingleUser>}></Route>
            <Route path='/editUser/:userName' element={<EditUser></EditUser>}></Route>

            <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
          </Routes>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar
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
