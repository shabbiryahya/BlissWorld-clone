import React from "react";
import { AtcBtn } from "../AddToCart/AtcBtn";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="product-card">
      <figure>
        <div className="product-card-image">
        <img
            src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/800w/products/300/1503/LS-Body-Butter-reviews__64796.1668812297.jpg"
            alt="product-back"
            className="img-back"
          />
          <img
            src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/300/1141/lemonsage_body_butter_sku_1003_10000_01__74065.1668812297.jpg?c=2"
            alt="product"
            className="img-front"
          />
          
        </div>
      </figure>
      <div className="product-card-body" style={{}}>
        <div className="teaser-card-rating" style={{}}>
          <p>rating: 4/5</p>
        </div>

        <div className="card-title-short-description">
          <h3 className="card-title">
            <a href="">Lemon & Sage Body Butter</a>
          </h3>
          {/* Short description - start-- */}
          <p className="card-short-description">
            {" "}
            Lemon Sage Maximum Moisture Cream
          </p>
          {/* Short description - start-- */}
        </div>

        <div className="card-button">
          <div className="card-button-first-child">
            {/* to adding sizing view start */}
            {/* <button>6.7 oz</button>
            <button>32 oz</button> */}

            {/* to adding sizing view end */}
          </div>
          <div className="card-button-last-child">
            <AtcBtn btnName= {"ADD TO CART"} price={12} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
