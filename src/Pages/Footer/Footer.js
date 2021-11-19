import React from "react";
import phoneIcon from "../../assets/images/phoneIcon.svg";
import mainIcon from "../../assets/images/mainIcon.svg";
import linkedin from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";
import footerLogo from "../../assets/images/footerLogo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerBase">
      <div className="container">
        <div className="row p-3 justify-content-around">
          <div className="col-12 col-md-5 col-lg-3 my-3">
            <h5 className="bold mb-3">ما کی هستیم</h5>
            <p id="footerText">
              شرکت ایده پرداز تجارت الکترونیک طوبی ( ایده سافت ) فعالیت خود را
              از آبان سال 1392 باهدف طراحی و تولید نرم‌افزارهای تحت وب و ارائه
              راهکارهای تجارت الکترونیک آغاز نموده است و توانسته با تخصص بیزینسی
              خود باعث رشد کسب و کار ها شود
            </p>
          </div>
          <div className="col-12 col-md-5 col-lg-3 my-3">
            <h5 className="bold mb-3">خدمات</h5>
            <ul>
              <li id="footerLI">طراحی و توسعه وب سایت شخصی</li>
              <li id="footerLI">طراحی و توسعه وب سایت فروشگاهی</li>
              <li id="footerLI">طراحی و توسعه اتوماسیون اداری</li>
              <li id="footerLI">طراحی و توسعه وب سایت خدماتی</li>
              <li id="footerLI">طراحی و توسعه اتوماسیون اختصاصی</li>
              <li id="footerLI">طراحی و توسعه پنل های مدیریتی</li>
            </ul>
          </div>
          <div className="col-12 col-md-5 col-lg-3 my-3">
            <h5 className="bold mb-3">دسترسی سریع</h5>
            <ul>
              <li id="footerLI">
                <a>درباره ما</a>
              </li>
              <li id="footerLI">
                <a>اخبار</a>
              </li>
              <li id="footerLI">
                <a>مقالات</a>
              </li>
              <li id="footerLI">
                <a>سرویس های اقساطی</a>
              </li>
              <li id="footerLI">
                <a>نحوه ی ارتباط</a>
              </li>
              <li id="footerLI">
                <a>مشاوره تخصصی</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-5 col-lg-3 my-3">
            <h6 className="footerJustify mb-4">
              تهران خیابان قنبرزاده خیابان مرتاض هجری خیابان عشقیار پلاک 70 طبقه
              اول واحد 1
            </h6>
            <div className="row">
              <div className="col-12 col-lg-5 my-3">
                <div className="d-flex w-75 text-center">
                  <img src={phoneIcon} className="mx-1" />
                  <h6>021-88503494</h6>
                </div>
              </div>
              <div className="col-12 col-lg-5 my-3">
                <div className="d-flex w-75 text-center">
                  <img src={mainIcon} className='mx-1' />
                  <h6>www.idesoft.ir</h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-5 d-flex ">
                <img src={linkedin} />
                <img src={twitter} className='mx-1' />
                <img src={facebook} />
              </div>
              <div className="col-12 col-lg-5 text-center">
                <img src={footerLogo} className='m-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
