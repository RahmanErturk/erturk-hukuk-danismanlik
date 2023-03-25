import React from "react";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer__footer-content">
        <div className="footer-items">
          <a href="#hakkimizda">
            <h3>Ertürk Hukuk ve Danışmanlık</h3>
          </a>
          <p>
            Avukat Resul Ertürk tarafından kurulmuş olup, temsil ettiği gerçek
            ve tüzel kişilere hukuk danışmanlığı ve avukatlık hizmeti sunan,
            yargılama sürecinin her aşamasında çözüm odaklı hareket eden,
            dinamik bir hukuk bürosudur.
          </p>
        </div>

        <div className="footer-items">
          <a href="#hizmetlerimiz">
            <h3>Faaliyet Alanları</h3>
          </a>
          <ul>
            <li>Arabuluculuk</li>
            <li>Aile Hukuku</li>
            <li>Ceza Hukuku</li>
            <li>İcra ve İflas Hukuku</li>
            <li>İş Hukuku</li>
            <li>Şirketler Hukuku</li>
          </ul>
        </div>

        <div className="footer-items">
          <h3>Hızlı Linkler</h3>
          <ul>
            <li>
              <a href="https://www.yargitay.gov.tr/" target="_blank">
                Yargıtay Başkanlığı
              </a>
            </li>
            <li>
              <a href="https://www.danistay.gov.tr/" target="_blank">
                Danıştay Başkanlığı
              </a>
            </li>
            <li>
              <a href="https://www.anayasa.gov.tr/tr/anasayfa/" target="_blank">
                Anayasa Mahkemesi
              </a>
            </li>
            <li>
              <a href="https://www.barobirlik.org.tr/" target="_blank">
                Barolar Birliği
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-items">
          <h3>İletisim</h3>
          <div className="items-contact">
            <i className="fa-solid fa-map-location-dot"></i>
            <p>Hacıalibey Mah. Sakarya-1 Cad. No: 30/2 Tepebaşı Eskişehir</p>
          </div>
          <div className="items-contact">
            <i className="fa-solid fa-phone-flip"></i>
            <p>+90 123 456 78 90</p>
          </div>
          <div className="items-contact">
            <i className="fa-solid fa-envelope"></i>
            <p>av.lorem.ipsum@ erturk.hukuk.tr</p>
          </div>
        </div>
      </div>

      <div className="social-media">
        <div className="footer-logo-title">
          <div className="footer-logo">
            <img src="/bilder/ertürk_logo.png" alt="" />
          </div>
          <p>Ertürk Hukuk ve Danışmanlık</p>
        </div>
        <div className="social-media__links">
          <div className="smlogo">
            <a href="https://instagram.com" target="-blank">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
          </div>

          <div className="smlogo">
            <a href="https://facebook.com" target="-blank">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
          </div>
          <div className="smlogo">
            <a href="https://twitter.com" target="-blank">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>

          <div className="smlogo">
            <a href="https://linkedin.com" target="-blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <small>
          <p>&copy; Copyright 2022 | Tüm Hakları Saklıdır.</p>
        </small>
      </div>

      <div className="placeholder-bottom"></div>
    </footer>
  );
}
