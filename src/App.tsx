import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './page/Home';
import Store from './page/Store';
import About from './page/About';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/provider/ShoppingCartProvider';

function App() {

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/store' element={<Store />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
