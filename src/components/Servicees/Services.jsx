import React from "react";

import { Link } from "react-router-dom";

import "./Services.scss";

export default function Services() {
  const path = window.location.pathname;
  const marginBottom = path === "/hizmetlerimiz" ? "marginBottom" : "";

  return (
    <section id="hizmetlerimiz" className={marginBottom}>
      <div className="placeholder"></div>
      <div className="services__headline">
        <h2>Faaliyet Alanlarımız</h2>
      </div>
      <div className="services__text">
        <p>
          Ertürk Hukuk Ve Danışmanlık faaliyet gösterdiği çalışma alanlarında
          hukuki danışmanlık ve avukatlık hizmeti vermekte olup, ülkemizdeki ve
          dünyadaki hukuki gelişmeleri yakından takip etmekte ve çeşitli hukuk
          veri tabanları ile basın, yayın araçları üzerinden güncel mevzuat
          değişikliklerini dikkate alınmaktadır. <br />
          <br /> Bilgisi ve iş ahlakı yüksek ekibimizle birlikte disiplinli bir
          şekilde çalışarak, şeffaflık ilkeleri doğrultusunda hizmet verdiğimiz
          başlıca çalışma alanlarımız ;
        </p>
      </div>

      <div className="services">
        <div className="services__service">
          <div className="service__icon">
            <i className="fa-solid fa-handshake-simple"></i>
          </div>
          <div className="service__info">
            <h4>Arabuluculuk</h4>
            <div className="info__divider-line"></div>
            <p>
              Arabuluculuk; bir özel hukuk uyuşmazlığının tarafı olan kişilerin,
              özgür iradeleriyle seçtikleri tarafsız ve uzman bir üçüncü kişinin
              (arabulucu) hakemliğinde, dava açılmadan önce veya dava açıldıktan
              sonra başvurdukları bir uyuşmazlık çözüm yöntemidir. Arabuluculuk,
              uyuşmazlığın mahkeme dışı, hızlı ve kesin bir şekilde çözülmesini
              amaçlayan bir usul hukuku kurumudur.
            </p>
          </div>
        </div>

        <div className="services__service">
          <div className="service__icon">
            <i className="fa-solid fa-person-half-dress"></i>
          </div>
          <div className="service__info">
            <h4>Aile Hukuku</h4>
            <div className="info__divider-line"></div>
            <p>
              Aile hukuku, aileye ilişkin konularla ilgilenen, medeni hukukun
              kapsamı içinde yer alan bir hukuk dalıdır. Evlilikler, ayrılıklar
              ve sebepleri, fesih, soydaşlık ve bu durumların tüm sonuçları
              baslica konu alanlaridir.
            </p>
          </div>
        </div>

        <div className="services__service">
          <div className="service__icon">
            <i className="fa-solid fa-handcuffs"></i>
          </div>
          <div className="service__info">
            <h4>Ceza Hukuku</h4>
            <div className="info__divider-line"></div>
            <p>
              Ceza hukuku, suç teşkil eden bir haksızlığın varlığından söz
              edilebilmesi ve dolayısıyla bir kişi hakkında işlemiş olduğu bu
              haksızlıktan dolayı ceza hukuku yaptırımı uygulanabilmesi için
              gerekli şartların oluşup oluşmadığı ile ilgilenen bir hukuk
              dalıdır.
            </p>
          </div>
        </div>

        <div className="services__service">
          <div className="service__icon">
            <i className="fa-solid fa-sack-dollar"></i>
          </div>
          <div className="service__info">
            <h4>İcra ve İflas Hukuku</h4>
            <div className="info__divider-line"></div>
            <p>
              İcra ve İflas Hukuku, borçlunun borcunu ifa etmemesi durumunda
              alacaklının talebiyle kanunda belirlenen sınırlar içerisinde kamu
              otoritesi kullanılarak borcun karşılanması sürecini kapsamaktadır.
            </p>
          </div>
        </div>

        <div className="services__service ">
          <div className="service__icon">
            <i className="fa-solid fa-person-digging"></i>
          </div>
          <div className="service__info">
            <h4>İş ve Sosyal Güvenlik Hukuku</h4>
            <div className="info__divider-line"></div>
            <p>
              İş hukuku, işçi hakları, çalışma koşulları, işçi ücretleri, işçi
              sendikaları ve işveren-işçi ilişkileri ile ilgili konuları
              inceleyen hukuk dalıdır. İş hukuku, hem çalışanı hem de işvereni
              koruyan ve devletle ilişkilerini düzenleyen bir sistematiktir.
            </p>
          </div>
        </div>

        <div className="services__service">
          <div className="service__icon">
            <i className="fa-solid fa-industry"></i>
          </div>
          <div className="service__info">
            <h4>Şirketler Hukuku</h4>
            <div className="info__divider-line"></div>
            <p>
              Şirketler hukuku, Ticaret hukuku bünyesinde yer alan ve ticaret
              şirketlerinin kurulması, birleşmesi, bölünmesi, devredilmesi, tip
              değiştirmesi, tasfiyesi gibi konulara dair normları ihtiva eden ve
              ticaret şirketlerine ilişkin hukuki ilişkileri inceleyen bir hukuk
              dalıdır.
            </p>
          </div>
        </div>

        <div className="services__service">
          <div className="service__icon">
            <i className="fa-solid fa-house-chimney-window"></i>
          </div>
          <div className="service__info">
            <h4>Gayrimenkul Hukuku</h4>
            <div className="info__divider-line"></div>
            <p>
              Gayrimenkul hukuku adı verilen hukuk biçimi, birden fazla olmak
              üzere bireyler veya kurumlar arasındaki taşınması mümkün ve olağan
              olmayan ev, arsa, arazi, apartman, daire gibi mevzuatları kendine
              konu edinen bir hukuk dalıdır. Gayrimenkul hukuku da eşya
              hukukunun çok önemli bir parçasıdır ve eşya hukukuna bağlı olarak
              ortaya çıkmıştır.
            </p>
          </div>
        </div>

        <div className="services__service">
          <div className="service__icon">
            <i className="fa-solid fa-file-invoice-dollar"></i>
          </div>
          <div className="service__info">
            <h4>Miras Hukuku</h4>
            <div className="info__divider-line"></div>
            <p>
              Miras hukuku, insanların ölümlerinden sonra malları üzerinde
              yapmak istedikleri ölüme bağlı tasarrufları ve ölümleri halinde,
              gaipliğine karar verilmesinden sonra veya ölüm karinesinin varlığı
              halinde mirasa konu mallarının yasal mirasçılar ve diğer
              mirasçılar arasında ne şekilde paylaştırılacağını, borçlarının
              nasıl ve hangi sırayla ödeneceğini inceleyen bir özel hukuk
              dalıdır.
            </p>
          </div>
        </div>
        <div className="services__service">
          <div className="service__icon">
            <i className="fa-solid fa-hand-holding-dollar"></i>
          </div>
          <div className="service__info">
            <h4>Ticaret Hukuku</h4>
            <div className="info__divider-line"></div>
            <p>
              Ticaret hukuku, hukukun, ticaretle ilişkili tüm mevzuatı kapsayan
              bir alt dalıdır. İşletmeler, tacirler, bireyler arasındaki ticari
              ilişkileri, alışverişi ve tarafların haklarını düzenler. Ticaret
              hukukunun genel kavramları tacir, ticari işletme, ticaret sicili,
              ticaret unvanı, haksız rekabet, ticari defterler, cari hesap,
              acentelik, ticaret ortaklıkları başlıklarında tanımlanır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
