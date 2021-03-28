import React, { useContext } from "react";
import { Navigation } from "./style";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/trolley.svg";
import AppContext from "../../context/app/context";
import { CartPreviewComponent } from "../CartPreview";
import CartContext from "../../context/cart/context";

export const NavigationComponent: React.FC = () => {
  const { cartPreviewIsVisible, toggleCartPreview } = useContext(AppContext);
  const cart = useContext(CartContext);
  const itemsInCart = 4; //TODO from context;

  return (
    <>
      <Navigation className="light">
        <h1 className="brand" /> Ima's
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <div>
              {/* <p className="vanity">{itemsInCart}</p> */}
              <img
                src={cartIcon}
                onClick={() => toggleCartPreview()}
                width="25"
                alt="cart"
              />
            </div>
            {/* <Link to="/cart">
            
            </Link> */}
          </li>
        </ul>
        {cartPreviewIsVisible && (
          <div className="preview-container">
            <CartPreviewComponent cart={cart} />
          </div>
        )}
      </Navigation>
    </>
  );
};
