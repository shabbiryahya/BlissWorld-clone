import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

export const ProductList = () => {
  return (
    <div>
      <div className="sorting-div">
        <div className="sortBy">
          <label>SORT BY:</label>
          <Menu>
            <MenuButton>Default {<ChevronDownIcon />}</MenuButton>
            <MenuList>
              <MenuItem>Default</MenuItem>
              <MenuItem>A to Z</MenuItem>
              <MenuItem>Z to A</MenuItem>
              <MenuItem>Price: Ascending</MenuItem>
              <MenuItem>Price: Descending</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="container">
        <div className="left-filter">
          <ul>
            <li>
              <h2> BEST SELLER BY CATEGORY</h2>
            </li>
          </ul>
        </div>
        <div className="product-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
