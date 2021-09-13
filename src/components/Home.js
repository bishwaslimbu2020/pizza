import React, { useEffect } from "react";
import Items from "./Items";
import Cart from "./Cart";
import Checkout from "./Checkout";

const Home = () => {
  return (
    <>
      <div className="home ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11  mx-auto g-2">
              <div className="row">
                <div className="col-8 items">
                  <Items />
                </div>
                <div className="col-4 bag">
                  <Cart />
                  <Checkout />

                  {useEffect(() => {
                    window.alert(
                      "Proper CSS has not been used in this site. This is only a reactjs demo."
                    );
                  }, [])}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
