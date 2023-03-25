import React from "react";

import LinkCon from "../../components/LinkCon/LinkCon";
import Title from "../../components/Title/Title";
import { aboutLinks } from "../../data/data";
import "./About.scss";

export default function About() {
  return (
    <div className="aboutView">
      <LinkCon links={aboutLinks} />
      <div className="aboutView__content">
        <div className="title-img">
          <Title title="Hakkımızda" />
          <div className="image">
            <img src="/bilder/IMG_1144.jpg" alt="" />
          </div>
        </div>
        <div className="aboutView__content-text">
          <div className="content__text">
            Ertürk Hukuk ve Danışmanlık, Avukat Resul Ertürk tarafından kurulmuş
            olup, temsil ettiği gerçek ve tüzel kişilere hukuk danışmanlığı ve
            avukatlık hizmeti sunan, yargılama sürecinin her aşamasında çözüm
            odaklı hareket eden, şeffaflık ve dürüstlüğe önem veren, gelişime
            açık, dinamik bir hukuk bürosudur. <br />
            <br /> Hukuk danışmanlığı hizmetinin güven ilişkisi içerisinde,
            şeffaflıkla, uzmanlıkla ve sonuç odaklı şekilde verilmesini
            hedefleyen Ertürk Hukuk ve Danışmanlık Eskişehir’de kurulmuştur.
            Eskişehir’de birebir avukatlık ve hukuk danışmanlığı hizmeti
            vermektedir. Bununla birlikte ülkemizin diğer illerinden ve Almanya,
            Belçika, Fransa, ABD gibi çeşitli ülkelerde bulunan yerli ve yabancı
            gerçek ve tüzel kişilere hizmet vermektedir. Temsil ettiği kişilerin
            hukuki sorunlarıyla başından sonuna kadar ilgilenmeyi, ekip
            çalışması ile en iyi hizmeti vererek tüm süreçten bilgi sahibi
            olmalarını ve önleyici hukuk hizmetinin de öneminin farkında olarak
            çalışmayı dürüst, güvenilir bir ilişki içerisinde vekalet ilişkisini
            ve hukuki süreçleri yönetmeyi amaç edinmiştir. <br />
            <br /> Etkin ve bilinçli bir hukuk hizmeti vermenin yanı sıra,
            sürekli olarak değişen ve gelişen kanunların ve hayatın
            yeniliklerine ayak uydurmak ve dünyadaki gelişmelerin takibine önem
            vermek öncelikli vizyonumuzdur. Bu doğrultuda çeşitli firmaların
            hukuk veri tabanları ile basın, yayın araçları üzerinden güncel
            yenilikler sürekli takip edilmektedir. <br />
            <br /> Ertürk Hukuk Ve Danışmanlık  başlıca hizmet verdiği alanlar,
            Gayrimenkul Hukuku, Sözleşmeler Hukuku, Borçlar Hukuku, Aile Hukuku,
            Miras Hukuku, İş ve Sosyal Güvenlik Hukuku, Ticaret Hukuku, İcra ve
            İflas Hukuku, Tüketici Hukuku, Sigorta Hukuku, İdare Hukuku, Vergi
            Hukuku, Kamulaştırma Hukuku, İmar Hukuku, Spor Hukuku, Fikri Haklar
            Hukuku, Ceza Hukuku’dur. <br />
            <br /> Bilgisi ve iş ahlakı yüksek ekibimizle birlikte disiplinli
            bir şekilde çalışarak, şeffaflık ilkeleri doğrultusunda hizmet
            vermek temel ilkemizdir.
          </div>
        </div>
      </div>
    </div>
  );
}
