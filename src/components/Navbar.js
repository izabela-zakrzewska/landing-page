const Navbar = () => {
  return (
    <nav>
      <div className="container-1">
        <div>
          <a href="index.html">moja firma</a>
        </div>
        <div className="links">
          <div className="about">
            <a href="#about">o nas</a>
          </div>
          <div className="offer">
            <a href="#offer">oferta</a>
          </div>
          <div className="contact">
            <a href="contact.html">kontakt</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
