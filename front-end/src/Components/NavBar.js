
import '../styles/styles.css';

//how to bring css file into this component?  import bulma from "bulma/css/bulma.css";




function NavBar() {
  return (
    <nav className="navbar has-shadow is-spaced has-background-black column ">
      <div className="navbar-brand center">
        <h1>Vynil Libre</h1>
        <a href='#'
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-end center">
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-primary">
              <strong>Buy</strong>
            </button>
            <button class="button is-light">Sell</button>

            <button class="button is-light">about</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
