import React from "react";
import Consulting from "../../assets/images/Consulting-rafiki.svg";
import BoxTitle from "../../Components/BoxTitle/BoxTitle";
import "./Moshavere.css";

function Moshavere() {
  return (
    <div id="base1">
      <div id="con1" className="p-3 row">
        <BoxTitle title='مشاوره ی کسب و کار' />
        <div className=" rev1 row justify-content-between align-items-center">
          <div className="col-12 col-md-4 text-center">
            <img src={Consulting} className=" photo1 img-fluid" />
          </div>
          <div className=" col-12 col-md-8">
            <p className="text1">
              برای کسب و کارت میخوای وب سایت داشته باشی ,میخوای بدونی چجوری کسب
              و کارت و رونق بدی این کاری نداره اول از ما مشاوره بگیر ما شما رو
              توی پلن و برنامه ریزی که برای کارت داریم قرار میدیم و کارمون و
              شروع میکنیم
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moshavere;
