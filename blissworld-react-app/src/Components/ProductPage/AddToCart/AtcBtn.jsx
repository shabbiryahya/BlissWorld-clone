import React from "react";
import "./AtcBtn.css";
import { action } from "../../../Redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const AtcBtn = ({ item, btnName, price }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((storeData) => {
    return storeData.cart;
  });

  const sendDataToCart = () => {
    // console.log("ATC button is clicked", item);
    let match = cartData.filter((ele) => ele.id === item.id);
    if (match.length > 0) {
      match[0].count++;
      let newCartData = cartData.filter((ele) => ele.id !== item.id);
      action([...newCartData, match[0]], dispatch);
    } else {
      action([...cartData,{ ...item, count: 1 }], dispatch);
    }
  };

  return (
    <div>
      <button onClick={sendDataToCart} className="btn">
        {`${btnName} $${price}`}
      </button>
    </div>
  );
};
