import React from "react";
import { AtcBtn } from "../AddToCart/AtcBtn";
import "./ProductDescription.css";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

export const ProductDescription = () => {
  return (
    <div className="product-description-main-container">
      <div className="product-description">
        <div className="product-image">
          <img
            src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/385/1214/BLISS_Bright_Idea_Vitamin_C_SERUM_30ml_FINALupdated__36719.1667516793.jpg?c=2"
            alt="prod-image"
          />
        </div>
        <div className="product-description-details">
          <div className="product-view-details">
            <h1 className="product-title">Bright Idea Serum</h1>
            <h3 className="product-short-description">Vitamin C + Tri</h3>
            <p className="product-rating">Rating</p>
            <a href="" className="product-review">
              Read 648Reviews
            </a>

            <div className="product-long-description">
              Powered by clinical-grade vitamin C plus a patented tri-peptide,
              this super serum brightens skin, boosts elasticity and protects
              from free radical damage for next-level glowing results. Plus, it
              reduces the look of dark spots in 28 days for a more even
              complexion. Smooth on skin 2x daily for maximum brightening
              benefits.
            </div>
            <p>
              <strong>Skin Type(s):</strong>
              All Skin Types
            </p>
            <p>
              <strong>Size:</strong>1 0z
            </p>
            <p>
              <strong>Scent:</strong>
              Citrus
            </p>
            <div>
              <p>or 4 interest-free payments of $7.00 with</p>
              Afterpay
            </div>
          </div>
          <div className="product-view-bottom">
            <label>Qty:</label>
            <ButtonGroup className="buttons"size="sm" isAttached variant="outline">
              <IconButton aria-label="Add to friends" icon={<MinusIcon />} />
              <Button>1</Button>
              <IconButton aria-label="Add to friends" icon={<AddIcon />} />
            </ButtonGroup>
            <AtcBtn />
            
          
          </div>
        </div>
      </div>
      <div className="video-link">
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/yC5s_smItPQ"
          title="Bliss Bright Idea Vitamin C Face Serum"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
