import React, { useState } from "react"; // 상태 관리를 위해 useState 사용


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 열림/닫힘 상태

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 메뉴 토글
  };

  return (
    <header className="navbar">
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* 햄버거 아이콘 */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Header;
