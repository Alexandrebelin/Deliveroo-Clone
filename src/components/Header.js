import logo from "../img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
