import { NavLink } from 'react-router-dom';
import './nav.scss'

const Nav = () => (
   <nav className="nav-container">
      <NavLink to="/" className="logo">
         your.name
      </NavLink>

      <div className="nav-links">
         <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>work</NavLink>
         <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>about</NavLink>
      </div>
   </nav>
    
);

export default Nav;
