import React from "react";
import brandPic from "../../assets/images/navbarBrand@2x.png";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light ">
      <div className="container my-3">
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img id="brand" src={brandPic} className="navbar-brand" />
        <div class="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                صفحه نخست
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle active"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                خدمات
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">
                نمونه های موفق
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                مشاوره رایگان
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                مقالات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                ما کی هستیم
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                تماس با ما
              </a>
            </li>
          </ul>
          <div className="text-center my-3">
            <button
              id="tamas"
              className="btn btn-success"
            >
              تماس
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
