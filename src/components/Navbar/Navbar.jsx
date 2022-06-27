import "./Navbar.scss";

export const Navbar = () => {
   return (
      <div className="navbar">
         <div className="navContainer">
            <span className="logo">Tetsh Booking</span>
            <div className="navItems">
               <button className="navButton">Register</button>
               <button className="navButton">Register</button>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
