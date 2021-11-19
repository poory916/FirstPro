import React from "react";
import BoxTitle from "../../Components/BoxTitle/BoxTitle";
import Wrapper from "../../Components/Wrapper/Wrapper";
import KhadamatBox from "../../Components/KhadamatBox/KhadamatBox";
import "./Khadamat.css";

function Khadamat() {
  return (
    <Wrapper>
      <BoxTitle title="خدمات مدیریتی ما" />
      <div className="row g-1 justify-content-around mb-4">
        <KhadamatBox
          title="پشتیبانی"
          text="تیم پشتیبانی ما 24 ساعته فعال هستند تا از لحاض تولید محتوا , امنیت , نگهداری سیستم و . . . بتوانند وب سایتی پر بازده را برای شما فراهم کنند "
        />
        <KhadamatBox
          title="قالب اختصاصی"
          text="برای هر چه بهتر شدن وب سایت شما , ما تیم های تخصصی رابط کاربری و طراحان برتر را استخدام کردیم , تا بتوانند نیاز کاربر را برطرف کنند "
        />
        <KhadamatBox
          title="چت با کاربر"
          text="ما ابزار چت کردن در وبسایت را برای شما فراهم میکنیم که ارتباط و تعامل را با کاربر خود برای هر چه بهتر شدن وب سایت فراهم شود "
        />
      </div>
      <div className="row g-1 justify-content-around mb-4">
        <KhadamatBox
          title="باشگاه مشتریان"
          text="ارتباط کاربر با وب سایت شما در باشگاه مشتریان توسط تیم بازاریابی ما و ارتباط با کاربران در شبکه های مجازی چه از طریق ارسال پیامک و همچون انستاگرام و تلگرام انجام میشود "
        />
        <KhadamatBox
          title="سرویس ارسال محصولات"
          text="طراحی و فعال سازی سرویس ارسال برای شرکت الوپیک برای راحت شدن ارسال محصولات شما "
        />
        <KhadamatBox
          title="آنالیز"
          text="امکان مشاهده مسیر حرکت کاربر , امکان گزارش بازدید سایت , گزارش بازدید قسمت هایی که بازدید نشده , آمار پر فروش های سیستم را برای شما فراهم میکنیم "
        />
      </div>
      <div className="row g-1 justify-content-around">
        <KhadamatBox
          title="بخش درباره ما"
          text="ثبت آدرس با استفاده از مختصات و نقشه و نشان , و ثبت نماد ها و مجوز ها "
        />
        <KhadamatBox
          title="سرویس ارسال محصولات"
          text="طراحی و فعال سازی سرویس ارسال برای شرکت الوپیک برای راحت شدن ارسال محصولات شما "
        />
        <KhadamatBox
          title="ویژگی داینامیک"
          text="امکان مشاهده مسیر حرکت کاربر , امکان گزارش بازدید سایت , گزارش بازدید قسمت هایی که بازدید نشده , آمار پر فروش های سیستم را برای شما فراهم میکنیم "
        />
      </div>
    </Wrapper>
  );
}

export default Khadamat;
