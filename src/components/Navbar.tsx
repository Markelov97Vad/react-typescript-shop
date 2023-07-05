import { Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import trash from '../image/shoppingbasket_114841.svg'

function Navbar() {
  return ( 
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to='/store' as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button 
        style={{ 
          width: '3rem',
          height: '3rem',
          position: 'relative',
        }}
        // variant='currentColor'
        className='rounded-circle'
        >
          <img src={trash}/>
          <div 
            className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
            style={{ width: '1.5rem', height: '1.5rem', position:'absolute', top: 30, left: 25}}
            >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
   );
}

export default Navbar;