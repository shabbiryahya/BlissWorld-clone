import React from "react";
import { useEffect, useState } from "react";
import "./stylee.css";
import { FaPlus, FaMinus } from "react-icons/fa";
function Cartmodal() {
  const [state, usestate] = useState([]);

  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    fetch("https://vikramdata.onrender.com/products")
      .then((res) => res.json())
      .then((json) => usestate(json));
  };

  async function Put(id, value) {
    await fetch(`https://vikramdata.onrender.com/products/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        q: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function openn() {
    document.getElementById("cancelcoupen").style.display = "block";
    document.getElementById("addcoupen").style.display = "none";
    document.getElementById("closethe").style.display = "block";
  }

  function closee() {
    document.getElementById("cancelcoupen").style.display = "none";
    document.getElementById("addcoupen").style.display = "block";
    document.getElementById("closethe").style.display = "none";
  }
  return (
    <div className="cart_modal">
      <div>
        <div id="cart_child">
          <a>{"< "}KEEP SHOPPING</a>
          <a>VIEW FULL SHOPPING BAG{" >"}</a>
        </div>

        <div id="cart_child2">
          <h3>Shopping Bag</h3>
          <p>(6 items)</p>
        </div>
        {state.map((e) => {
          return (
            <div id="datadiv">
              <div id="datadivchild1">
                <img src={e.img} alt="gh" />
              </div>
              <div id="datadivchild2">
                <a id="atag">{e.name}</a>
                <p>{e.description}</p>
                <div id="buttonss">
                  <div id="pmbuton">
                    {/* <button>-</button> */}
                    <FaMinus
                      color="grey"
                      onClick={() => {
                        Put(e.id, e.q - 1);

                        setTimeout(() => {
                          getdata();
                        }, 1);
                      }}
                    />
                    {e.q}
                    {/* <button>+</button> */}
                    <FaPlus
                      disabled={e.q == 1 ? true : false}
                      color="grey"
                      onClick={() => {
                        Put(e.id, e.q + 1);

                        setTimeout(() => {
                          getdata();
                        }, 1);
                      }}
                    />
                  </div>
                  <p id="idp">Remove</p>
                  <p id="doller">${e.price}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div id="parentcoupen">
          <div id="coupon">
            <strong>Coupon Code</strong>
            <button
              id="addcoupen"
              onClick={() => {
                openn();
              }}
            >
              Add Coupon
            </button>
            <button
              id="cancelcoupen"
              onClick={() => {
                closee();
              }}
            >
              Cancel
            </button>
          </div>

          <div id="closethe">
            <div id="inputd">
              <input placeholder="Enter your coupon code" />
            </div>

            <div id="couponbutton">APPLY </div>
          </div>
        </div>

        <div id="parentcoupen2">
          <div id="coupon">
            <strong>Grand total:</strong>
            <button id="addcou">${44}</button>
            {/* <button id="cancelcoupen">Cancel</button> */}
          </div>
        </div>

        <div id="radiant">You've earned FREE Shipping</div>
        <br />
        <div id="radiant2">
          <p>To use a gift card please call customer support: 888-243-8825</p>
        </div>
        {/* <div id="ankor"> */}
        <p id="ankortag">VIEW FULL SHOPPING BAG</p>
        {/* </div> */}

        <div id="checkout">CHECKOUT </div>
      </div>
    </div>
  );
}

export default Cartmodal;

// <ul>
// {state.map((e) => {
//   return (

//       <li>
//         <img src={e.image} alt={e.title} />
//         <h3>{e.title}</h3>
//         <p>{e.id}</p>
//       </li>

//   );
// })}
// </ul>
