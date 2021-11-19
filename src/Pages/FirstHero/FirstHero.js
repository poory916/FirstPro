import React from "react";
import phoneWoman from "../../assets/images/Mobile development-rafiki.svg";
import BoxTitle from "../../Components/BoxTitle/BoxTitle";
import "./FirstHero.css";

function FirstHero() {
  return (
    <div id="base">
      <div id="con" className="p-3">
        <BoxTitle title='ایده سافت را بیشتر بشناسید' />
        <div className=" rev row p-3 bg-white justify-content-between align-items-center">
          <div className="col-12 col-md-6">
            <img src={phoneWoman} className=" photo img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            <p className='text'>
              شرکت ایده پرداز تجارت الکترونیک طوبی ( ایده سافت ) فعالیت خود را
              از آبان سال 1392 با هدف طراحی و تولید نرم‌افزارهای تحت وب و ارائه
              راهکارهای تجارت الکترونیک آغاز نموده است و توانسته با تخصص بیزینسی
              خود باعث رشد کسب و کار ها شود به‌کارگیری نیروی متخصص، احترام به
              مشتری و تحویل به موقع و با کیفیت از ارزش‌های ایده سافت است
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstHero;
