import React from "react";
import BoxTitle from "../../Components/BoxTitle/BoxTitle";
import GhalebSlick from "../../Components/GhalebSlick/GhalebSlick";
import Wrapper from "../../Components/Wrapper/Wrapper";
import "./Ghaleb.css";

function Ghaleb() {
  return (
    <Wrapper>
      <BoxTitle title="قالب های انتخابی" />
      <div className="ghalebTitle">قالب های فروشگاهی</div>
      <div className="col-md-10 m-auto">
        <GhalebSlick />
      </div>
    </Wrapper>
  );
}

export default Ghaleb;
