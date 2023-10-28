import "./navbar.css";
import GoogleButton from 'react-google-button';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">dePublic</span>
        <div className="navItems">
          <GoogleButton label="Sign In / Sign Up" onClick={() => { console.log('Google button clicked') }}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar