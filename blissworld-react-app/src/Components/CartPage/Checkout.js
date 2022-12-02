import React from "react";
import "./stylee.css";
import Cartmodal from "./Cartmodal";
import { BsCheckCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FaPlus, FaMinus, FaUnlockAlt, FaQuestionCircle } from "react-icons/fa";

const Checkout = () => {
  const [state, usestate] = useState([]);

  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    fetch("https://vikramdata.onrender.com/products")
      .then((res) => res.json())
      .then((json) => usestate(json));
  };

  return (
    <div>
      <div id="dotebackground"></div>
      <div id="checkoutheading">
        <h1>Checkout</h1>
      </div>

      <div id="parentcheckoutdiv">
        <div id="child_1">
          <div id="firstcorrecttick">
            <div id="child_1_tick">
              <BsCheckCircleFill fontSize="28px" color="rgb(115,210,230)" />
              <h2>Customer</h2>
            </div>
            <div>vikram99301@gmail.com</div>
            <div>
              <button>SIGNOUT</button>
            </div>
          </div>

          <div id="firstcorrecttick">
            <div id="child_1_tick">
              <BsCheckCircleFill fontSize="28px" color="rgb(115,210,230)" />
              <h2>Shipping</h2>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              exercitationem eaque unde nemo? Perferendis hic sequi debitis eius
            </div>
            <div>
              <button>EDIT</button>
            </div>
          </div>

          <div id="firstcorrecttick">
            <div id="child_1_tick">
              <BsCheckCircleFill fontSize="28px" color="rgb(115,210,230)" />
              <h2>Billing</h2>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              exercitationem eaque unde nemo? Perferendis hic sequi debitis eius
            </div>
            <div>
              <button>EDIT</button>
            </div>
          </div>

          <div id="paymenttick">
            <div id="child_1_tick">
              <BsCheckCircleFill fontSize="28px" color="rgb(115,210,230)" />
              <h2>Payment</h2>
            </div>

            <div id="paymentAcordian">
              <div id="paymentchildd">
                <div id="disp">
                  <input type="radio" id="inp" />
                  <div id="cardpayment">
                    <div>Credit Card</div>
                    <div id="payimgs">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                        width="40"
                      />

                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"
                        width="40"
                      />

                      <img
                        src="https://banner2.cleanpng.com/20180802/bjr/kisspng-logo-american-express-computer-icons-sign-payment-amex-icons-5b63167f33c0e7.460691621533220479212.jpg"
                        width="40"
                      />

                      <img
                        src="https://seeklogo.com/images/D/Discover_Card-logo-4BC5D7C02C-seeklogo.com.png"
                        width="40"
                      />
                    </div>
                  </div>
                </div>
                <div id="labeldiv1">
                  <div>Credit Card Number</div>
                  <div>Expiration</div>
                </div>

                <div id="inputdivpay">
                  <div id="lockd">
                    <input id="inputpay1" type="tel" maxLength="16" />
                    <div>
                      <FaUnlockAlt />
                    </div>
                  </div>
                  <div>
                    <input id="inputpay2" type="month" placeholder="MM/YY" />
                  </div>
                </div>
                <div id="labeldiv1">
                  <div>Name on Card</div>
                  <div>
                    CVV
                    {}
                    <FaQuestionCircle fontSize="13px" />
                  </div>
                </div>
                <div id="inputdivpay">
                  <div id="lockd">
                    <input id="inputpay1" maxLength="30" />
                    <div></div>
                  </div>
                  <div id="cvvdiv">
                    <input id="inputpay2" maxLength="3" />
                    <div>
                      <FaUnlockAlt />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div id="disp">
                  <input type="radio" id="inp" />
                  <div id="cardpayment">
                    <div>
                      <img
                        src="https://cdn11.bigcommerce.com/r-730829d048250d1f5b10617209d296bf1fac0b8b/img/payment-providers/paypalpaymentsprouk.png"
                        width="112"
                        height="26"
                      />
                    </div>
                    <div id="payimgs">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                        width="40"
                      />

                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"
                        width="40"
                      />

                      <img
                        src="https://banner2.cleanpng.com/20180802/bjr/kisspng-logo-american-express-computer-icons-sign-payment-amex-icons-5b63167f33c0e7.460691621533220479212.jpg"
                        width="40"
                      />

                      <img
                        src="https://seeklogo.com/images/D/Discover_Card-logo-4BC5D7C02C-seeklogo.com.png"
                        width="40"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div id="disp">
                  <input type="radio" id="inp" />
                  <div id="cardpayment">
                    <div id="disp2">
                      <img
                        src="https://cdn11.bigcommerce.com/r-730829d048250d1f5b10617209d296bf1fac0b8b/img/payment-providers/afterpay-badge-blackonmint.png"
                        width="129"
                        height="26"
                      />

                      <div>Pay over time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="parentcartdivvc">
          <div id="child_2">
            {/* jj */}
            <div id="h1ding">
              <h3>Order Summary</h3>
              <button>Edit Cart</button>
            </div>
            <h3 id="qutyyy">7 Items</h3>

            {state.map((e) => {
              return (
                <div id="datadiv">
                  <div id="datadivchild1">
                    <img src={e.img} alt="gh" />
                  </div>
                  <div id="datadivchild2">
                    <a id="atag">{e.name}</a>

                    <div id="buttonss">
                      <p id="doller">${e.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="child33">
            <div id="subtotalam">
              <span>Subtotal</span>
              <span>$112</span>
            </div>

            <div id="subtotalam">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div id="subtotalam">
              <span>Tax</span>
              <span>$18</span>
            </div>
            <div id="coupensubp">
              <button id="coupensub">Enter Coupon code</button>
            </div>

            <div id="secondcoupendiv">
              <div>
                <input />{" "}
              </div>
              <div>Apply</div>
            </div>
            {/* <button id="coupensub">Enter Coupon code</button> */}
          </div>

          <div id="finaldivv">
            <div id="subtotalam">
              <span>Total(USD)</span>
              <span>$188</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
