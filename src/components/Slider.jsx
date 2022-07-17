import React from "react";

function Slider(props) {
  return (
    <section id="sliderType" className={`${props.fonts[0]} ${props.fonts[1]}`}>
      <h2 className="ir_so">슬라이드 영역</h2>
      <div className="slider__inner">
        <div className="slider">
          <div className="slider__img">
            <div className="desc">
              <span>DEVELOPER</span>
              <h3>NEW FRONTEND</h3>
              <p>
                당신이 만들어갈 새로운 이야기
                <br /> 당신도 할 수 있습니다.
              </p>
              <div className="btn">
                <a href="/" className="white">
                  자세히 보기
                </a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </div>
          <div className="slider__arrow">
            <a href="/" className="left">
              <span className="ir_pm">이전이미지</span>
            </a>
            <a href="/" className="right">
              <span className="ir_pm">다음이미지</span>
            </a>
          </div>
          <div className="slider__dot">
            <a href="/" className="dot active">
              <span className="ir_pm">1</span>
            </a>
            <a href="/" className="dot">
              <span className="ir_pm">2</span>
            </a>
            <a href="/" className="dot">
              <span className="ir_pm">3</span>
            </a>
            <a href="/" className="dot">
              <span className="ir_pm">4</span>
            </a>
            <a href="/" className="play">
              <span className="ir_pm">자동플레이</span>
            </a>
            <a href="/" className="stop">
              <span className="ir_pm">정지</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
