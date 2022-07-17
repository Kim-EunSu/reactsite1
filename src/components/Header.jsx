import React from "react";

function Header(props) {
  return (
    <header id="headerType" className={props.fonts}>
      <div className="header__inner">
        <h1 className="header__logo">
          <a href="/">
            WEB <em>site</em>
          </a>
        </h1>
        <nav className="header__menu">
          <h2 className="ir_so">메인 메뉴</h2>
          <ul>
            <li>
              <a href="/">헤더 영역</a>
            </li>
            <li>
              <a href="/">슬라이드 영역</a>
            </li>
            <li>
              <a href="/">이미지 영역</a>
            </li>
            <li>
              <a href="/">컨텐츠 영역</a>
            </li>
            <li>
              <a href="/">푸터 영역</a>
            </li>
          </ul>
        </nav>
        <div className="header__member">
          <a href="/">로그인</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
