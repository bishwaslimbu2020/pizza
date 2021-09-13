import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import { NavLink } from "react-router-dom";
import Modal1 from "./Modal1";

const Navbar = () => {
  const { cart, totalItem } = useContext(CartContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid col-11">
          <NavLink className="navbar-brand" to="/">
            <h4>Pizza House</h4>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <Modal1 />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i class="fas fa-shopping-cart">
                    <sup className="sup">{totalItem}</sup>
                  </i>
                </NavLink>
              </li>
            </ul>
          </div>
          {/*links ends*/}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
