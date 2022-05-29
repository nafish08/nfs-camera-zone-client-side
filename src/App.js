import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import auth from './firebase.init';
import AddReview from './Pages/AddReview/AddReview';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import MyOrders from './Pages/MyOrders/MyOrders';
import MyProfile from './Pages/MyProfile/MyProfile';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="mx-auto bg-slate-200">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
        </Route>

        <Route path='/myorders' element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
        <Route path='/addreview' element={<RequireAuth><AddReview></AddReview></RequireAuth>}></Route>
        <Route path='/myprofile' element={<RequireAuth><MyProfile></MyProfile></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
