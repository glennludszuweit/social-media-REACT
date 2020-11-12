import { Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from '../Components/Search';
import logo from '../logo.svg';

function Header() {
  return (
    <div className='header'>
      <Navbar collapseOnSelect expand='lg' bg='danger' variant='dark'>
        <Navbar.Brand>
          <Link to='/'>Glued</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto ml-auto m-2'>
            <Search />
          </Nav>
          <Nav>
            <div className='user-dropdown-box'>
              <div className='user-menu'>
                <div className='nav-image'>
                  <img src={logo} alt='' />
                </div>
              </div>
              <div>
                <DropdownButton
                  className='ml-2 user-menu-dropdown'
                  variant='danger'
                  menuAlign='right'
                >
                  <Dropdown.Item href='/me/posts'>Posts</Dropdown.Item>
                  <Dropdown.Item href='/me/friends'>Friends</Dropdown.Item>
                  <Dropdown.Item href='/me'>Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='/me/settings'>Settings</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
