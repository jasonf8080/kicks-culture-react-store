import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar, MobileNavbar, Footer, Loader, MobileFooter } from './components';



//Pages 


const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Products = lazy(() => import("./pages/Products"))
const Product = lazy(() => import("./pages/Product"))
const Cart = lazy(() => import("./pages/Cart"))
const Register = lazy(() => import("./pages/Register"))
const EditProfile = lazy(() => import("./pages/EditProfile"))
const Checkout = lazy(() => import("./pages/Checkout"))
const Error = lazy(() => import("./pages/Error"))



function App() {


  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      

      <Suspense fallback={<Loader className='page-loader'/>}>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
             <Route path='/products' element={<Products/>}></Route>
            <Route path='/product/:id' element={<Product/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/editProfile' element={<EditProfile/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
      </Suspense>

       <Footer></Footer>
       <MobileFooter></MobileFooter>

    </BrowserRouter>

  );
}

export default App;
