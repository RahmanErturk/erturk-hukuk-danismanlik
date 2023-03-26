import React from "react";

import "./Contact.scss";

export default function Contact() {
  return (
    <section id="iletisim">
      <div className="placeholder"></div>

      <div className="contact">
        <div className="contact__image">
          <img
            src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="court"
          />
        </div>

        <div className="contact__headline">
          <h2>İletişim</h2>
        </div>

        <div className="contact__content">
          <div className="content__contact-form">
            <div className="contact-info__info-title">
              <h3>Avukata Soru Sorun</h3>
              <p>Hemen formu doldurun, size en kısa sürede dönüş yapalım.</p>
            </div>

            <form action="https://formspree.io/f/myyolvky" method="post">
              <label>
                <input
                  type="text"
                  name="vorname"
                  className="form-item"
                  placeholder="Adınız"
                  required
                />
              </label>
              <br />
              <label>
                <input
                  type="text"
                  name="lastname"
                  className="form-item"
                  placeholder="Soyadınız"
                  required
                />
              </label>
              <br />
              <label>
                <input
                  type="text"
                  name="straße"
                  className="form-item"
                  placeholder="Adres"
                  required
                />
              </label>
              <br />
              <label>
                <input
                  type="text"
                  name="telefon"
                  className="form-item"
                  placeholder="Telefon Numaranız"
                />
              </label>
              <br />
              <label>
                <input
                  type="email"
                  name="email"
                  className="form-item"
                  placeholder="Email"
                  required
                />
              </label>
              <br />
              <label>
                <input
                  type="text"
                  name="telefon"
                  className="form-item"
                  placeholder="Konu"
                />
              </label>
              <br />
              <label>
                <textarea
                  name="kommentar"
                  className="form-item message"
                  placeholder="Mesajınız"
                ></textarea>
              </label>
              <button type="submit">Avukata Sor</button>
            </form>
          </div>

          <div className="content__contact-info">
            <div className="contact-info__info-title">
              <h3>Randevu Almak İçin:</h3>
              <p>
                Aşağıdaki iletişim bilgilerinden bize ulaşabilir veya formu
                doldurup randevu talep edebilirsiniz.
              </p>
            </div>

            <div className="contact-info__info-text">
              <div className="info-text__items">
                <i className="fa-solid fa-map-location-dot"></i>
                <p>
                  Hacıalibey Mah. Sakarya-1 Cad. No: 30/2 Tepebaşı Eskişehir
                </p>
              </div>
              <div className="info-text__items">
                <i className="fa-solid fa-phone-flip"></i>
                <p>
                  <a href="tel: +90 222 221 26 00">+90 222 221 26 00</a>
                </p>
              </div>
              <div className="info-text__items">
                <i className="fa-solid fa-envelope"></i>
                <p>
                  <a href="mailto: info@erturkhukukvedanismanlik.com">
                    info@erturkhukukvedanismanlik.com
                  </a>
                </p>
              </div>
              <div className="info-text__items">
                <i className="fa-regular fa-clock"></i>
                <p>Haftaiçi 09:00-18:00 – Cumartesi 09:00-12:30</p>
              </div>
            </div>

            <div className="contact-info__iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.309684133484!2d30.51549433241166!3d39.77760503644662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc15788e68f7e3%3A0x9c84bc2eeb793006!2zRXJ0w7xyayBIdWt1ayBWZSBEYW7EscWfbWFubMSxaw!5e0!3m2!1str!2sde!4v1679392688806!5m2!1str!2sde"
                height="350"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="placeholder-bottom"></div>
    </section>
  );
}
