import React from "react";
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

export const ProductList = () => {
  return (
    <div className="parent-container">
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
          <Accordion allowMultiple>
          <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      
                      <Box flex="1" textAlign="left">
                          BEST SELLERS BY CATEGORY

                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel textAlign="left" pb={2}>
                    Body & Hair Care
                  </AccordionPanel>
                  <AccordionPanel textAlign="left" pb={2}>
                    Skincare
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
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
