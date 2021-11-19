import React from "react";
import serach from "../../assets/images/serach.svg";
import LevelsCard from "../../Components/LevelsCard/LevelsCard";
import gearModel from '../../assets/images/gearModel.svg';
import worldGear from '../../assets/images/worldGear.svg';
import "./Levels.css";
import BoxTitle from "../../Components/BoxTitle/BoxTitle";


function Levels() {
  return (
    <div id="base2">
      <div id="con2" className="p-3">
        <BoxTitle title='مراحل کاری ما' />
        <div className=" rev row p-3 bg-white justify-content-around align-items-START">
          <div className=" my-4 col-12 col-md-3 text-center">
            <LevelsCard
              title="تحلیل ایده و کسب و کار"
              text="با تحقیق و تبادل نظر , طرح تجاری شما را امکان سنجی کرده و بر اساس نیاز شما روی ساختار کلی آن برنامه ریزی میکنیم تا در بهترین مسیر برای رسیدن به اهدافتان قرار گیرد"
              firstList="مدیریت فرایند کسب و کار (BPM)"
              secondList="تجزیه و تحلیل (MOST,SWOT,PESTLE)"
              thirdList="طوفان فکری (Brainstorming)"
              img={serach}
            />
          </div>
          <div className=" my-4 col-12 col-md-3 text-center">
            <LevelsCard
              title="تبدیل تحلیل به مدل واقعی"
              text="شما در جریان تمام مراحل توسعه وب سایت خواهید بود در تعامل با تیم گرافیک و برنامه نویسان ما هسته اصلی وب سایت طراحی , پیکربندی و راه اندازی میشود"
              firstList="طراحی رابط کاربری و تجربه ی کاربری (UI/UX)"
              secondList="Microsoft ASP.NET MVC, CORE"
              thirdList="Microsoft SQL Server"
              img={gearModel}
            />
          </div>
          <div className=" my-4 col-12 col-md-3 text-center">
            <LevelsCard
              title="توسعه , پیاده سازی و پشتیبانی"
              text="وب سایت شما آماده به کار است , همچنین در این مرحله تیم پشتیبانی ما در هر زمان که برای وبسایت شما مشکلی به وجود بیاید از شما حمایت خواهد کرد jsj"
              firstList="Scrum Methodology"
              secondList="یکپارچه سازی (CMMI)"
              thirdList="مانیتورینگ دائمی سرور"
              img={worldGear}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Levels;
