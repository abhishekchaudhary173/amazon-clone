import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <nav className="header">
      {/* logo on the left -> img*/}
      <Link to="/">
        <img className="header__logo" src="../image/amazon_logo.png" alt="" />
      </Link>

      {/* Search box*/}
      <div className="header_search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header__nav">
        {/* 1st Link*/}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> Hello Abhishek</span>
            <span className="header__optionLineTwo"> Sign In</span>
          </div>
        </Link>

        {/* 2nd Link*/}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> Returns</span>
            <span className="header__optionLineTwo"> & Orders</span>
          </div>
        </Link>

        {/* 3rd Link*/}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> Your</span>
            <span className="header__optionLineTwo"> Prime</span>
          </div>
        </Link>

        {/* 4th Link*/}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping Basket Icon */}
            <ShoppingBasketIcon />
            {/* Number of item in the Basket */}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
