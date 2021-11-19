import React from "react";
import automation from "../../assets/images/automation.svg";
import shopping from "../../assets/images/shopping-bag.svg";
import SecondConComponent from "../../Components/SecondConComponent/SecondConComponent";
import globe from "../../assets/images/globe-key.svg";
import online from "../../assets/images/online-resume.svg";
import vip from "../../assets/images/automation-vip.svg";
import technical from "../../assets/images/technical-support.svg";
import BoxTitle from "../../Components/BoxTitle/BoxTitle";
import "./SecondHero.css";

function SecondHero() {
  return (
    <div id="secondBase">
      <div id="secondCon" className="p-3">
        <BoxTitle title='خدمات ایده سافت' />  
        <div className="  row justify-content-around rev">
          <div className="col-12 col-md-3 text-center ggg p-2">
            <SecondConComponent
              img={automation}
              title="طراحی و توسعه اتوماسیون اداری"
              text="حجم کاری شرکت‌ها با وجود استفاده از پرسنل متعدد. برنامه‌ریزی، سازماندهی، کنترل و نظارت بر عملکرد فعالیت‌های درون سازمانی با اتوماسیون داخلی راحت میشه کافیه فقط طراحیشو ما براتون انجام بدیم"
            />
          </div>
          <div className="col-12 col-md-3 text-center ggg p-2">
            <SecondConComponent
              img={shopping}
              title="طراحی و توسعه وب سایت فروشگاهی"
              text="برای فروش محصولات خود نیاز به مغازه زدن و اجاره مغازه نداری , ما براتون فروشگاه دلخواه خودتونو طراحی و توسعه میدیم و در هر ساعت از شبانه روز محصولات خودتو بفروش"
            />
          </div>
          <div className="col-12 col-md-3 text-center ggg p-2">
            <SecondConComponent
              img={globe}
              title="طراحی و توسعه وب سایت شخصی"
              text="داشتن یک وبسایت زیبا برای توسعه کسب و کار در هر زمینه ای مهم هست , ایده سافت با وجود طراحان و دیزاینر ها این حس خوب را به انتقال میدهند"
            />
          </div>
        </div>
        <div className=" row justify-content-around rev my-1">
          <div className="col-12 col-md-3 text-center ggg p-2">
            <SecondConComponent
              img={online}
              title="طراحی و توسعه پنل های مدیریتی"
              text="حجم کاری شرکت‌ها با وجود استفاده از پرسنل متعدد. برنامه‌ریزی، سازماندهی، کنترل و نظارت بر عملکرد فعالیت‌های درون سازمانی با اتوماسیون داخلی راحت میشه کافیه فقط طراحیشو ما براتون انجام بدیم"
            />
          </div>
          <div className="col-12 col-md-3 text-center ggg p-2">
            <SecondConComponent
              img={vip}
              title="طراحی و توسعه اتوماسیون اختصاصی"
              text="برای فروش محصولات خود نیاز به مغازه زدن و اجاره مغازه نداری , ما براتون فروشگاه دلخواه خودتونو طراحی و توسعه میدیم و در هر ساعت از شبانه روز محصولات خودتو بفروش"
            />
          </div>
          <div className="col-12 col-md-3 text-center ggg p-2">
            <SecondConComponent
              img={technical}
              title="طراحی و توسعه وب سایت خدماتی"
              text="داشتن یک وبسایت زیبا برای توسعه کسب و کار در هر زمینه ای مهم هست , ایده سافت با وجود طراحان و دیزاینر ها این حس خوب را به انتقال میدهند"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHero;
