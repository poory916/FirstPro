import React from "react";
import terraficKala from "../../assets/images/terrafic-kala.svg";
import aminFood from "../../assets/images/amin-food.svg";
import "./Examples.css";
import BoxTitle from "../../Components/BoxTitle/BoxTitle";
import Wrapper from "../../Components/Wrapper/Wrapper";

function Examples() {
  return (
    <Wrapper>
      <BoxTitle title="نمونه های موفق" />
      <div className=" my-4 exRev row p-3 bg-white justify-content-around align-items-center">
        <div className="col-12 col-md-4 text-center">
          <div className="exCover m-auto my-5">
            <img src={terraficKala} />
            <button id="exButton">مشاهده</button>
          </div>
          <h6 className=" exUnderTitle text-center">ترافیک کالا</h6>
        </div>
        <div className="col-12 col-md-4 text-center my-5">
          <div className="exCover m-auto my-5 ">
            <img src={aminFood} />
            <button id="exButton">مشاهده</button>
          </div>
          <h6 className=" exUnderTitle text-center">امین فود</h6>
        </div>
      </div>
    </Wrapper>
  );
}

export default Examples;
