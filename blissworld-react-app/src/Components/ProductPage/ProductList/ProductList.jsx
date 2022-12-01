import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import { ChevronDownIcon, MinusIcon, AddIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export const ProductList = ({ endPoint }) => {
  const [totalProducts, setTotalProducts] = useState([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    fetch(`https://blissworldapi.onrender.com/bestSeller`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("total data", data);
        setTotalProducts(data.totalData);
        setCategories({ ...data.categories });
      })
      .catch((err) => {
        console.log("something went wrong");
      });
  }, []);

  console.log("state", categories);
  // console.log("Object.keys(categories)", Object.keys(categories));
  // console.log("Object.keys(categories)", categories["BY CONCERN"]);

  return (
    <div className="parent-container">
      <div className="sorting-div">
        <div className="sortBy">
          <label>SORT BY: Default</label>
          <Menu>
            <MenuButton righticon={<ChevronDownIcon />}>D</MenuButton>
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
          <Accordion allowMultiple>
            {Object.keys(categories).length > 0 &&
              Object.keys(categories).map((category, index) => (
                <AccordionItem key={index + 1}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            {category}
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      {categories[category].map((item, index) => (
                        <AccordionPanel key={index + 1} textAlign="left" pb={2}>
                          {item}
                        </AccordionPanel>
                      ))}
                    </>
                  )}
                </AccordionItem>
              ))}
          </Accordion>
        </div>
        <div className="product-container">
          {totalProducts.map((item, index) => (
            <ProductCard item={item} key={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};
