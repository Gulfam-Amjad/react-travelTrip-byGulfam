import React, { Component } from 'react';
import './NavbarStyle.css';
import Menu from './Menu';

class Navitems extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className='navitems'>
        <h1 className='logo'>Logo</h1>

        <div className='menu-icons' onClick={this.handleClick}>
          <i style={{ fontSize: "24px", cursor: "pointer" }}>
              {this.state.clicked ? '✖' : '☰'}
          </i>

        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {Menu.map((items, index) => (
            <li key={index} className={items.cName}>
              <a href={items.url} className={items.cName}>
                {/* {items.icon && <i className={items.icon}></i>} */}
                {items.title}
              </a>
            </li>
          ))}
        </ul>

        <button>SignUp</button>
      </nav>
    );
  }
}

export default Navitems;
