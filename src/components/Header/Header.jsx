import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
    setDropDown1(false);
    setDropDown2(false);
  };

  const openMenu = menu ? "" : "close";

  const handleDropDown1 = () => {
    setDropDown1(!dropDown1);
    setDropDown2(false);
  };
  const openDropDown1 = dropDown1 ? "" : "closeDropDown";

  const handleDropDown2 = () => {
    setDropDown2(!dropDown2);
    setDropDown1(false);
  };
  const openDropDown2 = dropDown2 ? "" : "closeDropDown";

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="/bilder/ertürk_logo.png" alt="ertürk_logo" />
        </Link>
      </div>
      <div className="navbar">
        <nav>
          <label htmlFor="check" className="checkbtn">
            <i onClick={handleClick} className="fa-solid fa-bars"></i>
          </label>
          <ul className={"navbar__list " + openMenu}>
            <li className="navbar__link ">
              <Link className="navbar__link-page" onClick={handleDropDown1}>
                Kurumsal
              </Link>
              <ul className={"dropdown-list kurumsal " + openDropDown1}>
                <li>
                  <Link to="/hakkimizda" onClick={() => setMenu(false)}>
                    Hakkımızda
                  </Link>
                </li>
                <li className="last-child">
                  <Link to="/ekibimiz" onClick={() => setMenu(false)}>
                    Ekibimiz
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbar__link">
              <Link
                to="/hizmetlerimiz"
                className="navbar__link-page"
                href="#hizmetlerimiz"
                onClick={handleClick}
              >
                Faaliyet Alanları
              </Link>
              {/* <ul className={"dropdown-list our-services " + openDropDown2}>
                <li>
                  <Link onClick={() => setMenu(false)}>Arabuluculuk</Link>
                </li>
                <li>
                  <Link onClick={() => setMenu(false)}>Aile Hukuku</Link>
                </li>
                <li>
                  <Link onClick={() => setMenu(false)}>Ceza Hukuku</Link>
                </li>
                <li className="service-4">
                  <Link onClick={() => setMenu(false)}>
                    İcra ve İflas Hukuku
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setMenu(false)}>İş Hukuku</Link>
                </li>
                <li className="last-child">
                  <Link onClick={() => setMenu(false)}>Şirketler Hukuku</Link>
                </li>
              </ul> */}
            </li>
            <li className="navbar__link navbar_link_blog">
              <Link className="navbar__link-page" onClick={handleDropDown2}>
                Blog
              </Link>
              <ul className={"dropdown-list makale " + openDropDown2}>
                <li className="dropdown-list_link">
                  <Link to="/blog" onClick={() => setMenu(false)}>
                    Tüm Makaleler
                  </Link>
                </li>
                <li className="dropdown-list_link">
                  <Link to="/blog/son-makaleler" onClick={() => setMenu(false)}>
                    Son Eklenenler
                  </Link>
                </li>
                <li className="last-child dropdown-list_link">
                  <Link to="/blog/cok-okunanlar" onClick={() => setMenu(false)}>
                    En Çok Okunanlar
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbar__link">
              <Link
                className="navbar__link-page"
                to="/iletisim"
                onClick={handleClick}
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
