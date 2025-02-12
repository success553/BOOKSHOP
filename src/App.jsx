import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styles from './App.module.css'
import { Home } from './pages/Home/Home'
import { Navber } from './component/Navber/Navber'
// import { Header } from './component/Header/Header'
import { Footer } from './component/Footer/Footer'
import { Checkout } from './pages/Checkout/Checkout'
import { Books } from './pages/Books/Books';
import {Product} from './pages/Product/Product';
import {Author} from './pages/Author/Author';

function App() {
 
  return (
      <div className={styles.App}>
          <Router>
       
                  <Navber/>
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/product' element={<Product/>}/>
                      <Route path='/check-out' element={<Checkout />} />
                      <Route path='/Books' element={<Books />} />
                      <Route path='/authors' element={<Author />} />
                      
                                            
                    </Routes>
                  

                  <Footer />
        
                 </Router>

      </div>
  )
}

export default App
