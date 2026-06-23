import { Component } from "react";
import MenuItems from "./MenuItems";
import "../styles/navbar.css"
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked
                ? "fa-solid fa-times"
                : "fa-solid fa-bars"
            }
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index} >
              <a href={item.url} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;