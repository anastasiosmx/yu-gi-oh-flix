import logo from '../../images/yu-gi-oh-logo.png';
import './navbar.css';

export const NavBar = () => {
    return(
        <>
            <div className="navbar-wrapper">
                <img className='logo-img' src={logo} alt="logo" />
                <input type="text" className='search-bar' placeholder='Search for any card using their name... e.g. "Crystal Tree"'/>
            </div>
        </>
    );
}