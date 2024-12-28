// Import React and necessary libraries (React와 필요한 라이브러리 import)
import React, { useState } from "react";

// Import CSS styles (CSS 스타일 가져오기)
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 열림/닫힘 상태

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 메뉴 토글
  };
  return (
    <div className="App">
    {/* Header and Navigation */}
     <header className="navbar">
       
       <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
         <ul>
           <li><a href="#home">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#menu">Menu</a></li>
           <li><a href="#contact">Contact</a></li>
         </ul>
       </nav>
       {/* Hamburger Icon */}
       <div className="hamburger" onClick={toggleMenu}>
         ☰
       </div>
     </header>

      {/* Company Name Section (회사 이름 섹션) */}
      <section className="hero">{/*코멘트 테스트 */}
        <h1>Young Brewing Company</h1>
        <p>Crafting traditional and modern makgeolli since 2023</p>
        {/* 2023년부터 전통과 현대 막걸리를 양조합니다 */}
      </section>

      {/* About Section (막걸리에 대한 설명) */}
      <section className="about">
        <h2>About Our Makgeolli</h2>
        <p>
          Makgeolli, a traditional Korean rice wine, has been our passion. Using
          locally sourced ingredients, we bring a refreshing taste to every
          sip.
        </p>
        <p>
          막걸리는 한국의 전통 쌀 와인으로, 지역에서 공급받은 재료를
          사용하여 신선한 맛을 제공합니다.
        </p>
      </section>

      {/* Contact Section (연락처 섹션) */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: youngbrewing@example.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Craft Lane, Calgary, AB, Canada</p>
        {/* 이메일, 전화번호, 주소 */}
      </section>

      {/* Photo Section (사진 추가를 위한 자리) */}
      <section className="photos">
        <h2>Our Brewery in Action</h2>
        <div className="photo-grid">
          {/* Placeholder for photos (사진 자리 표시) */}
          <div className="photo">Photo 1</div>
          <div className="photo">Photo 2</div>
          <div className="photo">Photo 3</div>
        </div>
      </section>

      {/* Payment Section (결제 섹션) */}
      <section className="payment">
        <h2>Order Online</h2>
        <p>We accept all major credit cards and PayPal.</p>
        {/* 주요 신용카드와 PayPal을 지원합니다 */}
        <button className="order-button">Order Now</button>
      </section>

      {/* Social Media Section (소셜 미디어 섹션) */}
      <section className="social-media">
        <h2>Follow Us</h2>
        <ul>
          <li>
            <a href="https://facebook.com/youngbrewing" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://instagram.com/youngbrewing" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/youngbrewing" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
        </ul>
        {/* Facebook, Instagram, Twitter 링크 */}
      </section>

      {/* Footer Section (하단 섹션) */}
      <footer>
        <p>© 2023 Young Brewing Company. All rights reserved.</p>
        {/* 저작권 안내 */}
      </footer>
    </div>
  );
}

export default App;
