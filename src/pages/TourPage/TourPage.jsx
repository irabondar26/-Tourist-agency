import React from 'react';
import { getStateFromLocalStorage } from "../../utils/localStorageHelper";
import { NavLink } from "react-router-dom";
import styles from "./TourPage.module.scss";
import { ReactComponent as Spinner } from "../../img/spinner.svg";

function TourPage() {
  let tour = getStateFromLocalStorage("tour");
  console.log(tour);
  return (
    <>
      <div className={styles.tourWrapper}>
        <section className={styles.tourTitle}>
          <h1 className={styles.tourTitleHotel}>{tour.hotel}</h1>
          <p className={styles.tourTitlePlace}>{tour.country}, {tour.city}</p>
        </section>
        <section className={styles.tourInfoWrapper}>
          <img src={tour.photoHotel} alt="" className={styles.tourPhotoHotel} />
          <div className={styles.tourInfo}>
            <h2 className={styles.tourInfoTitle}>Інформація про тур</h2>
            <div className={styles.tourInfoTextWrapper}>
              <p className={styles.tourInfoText}>Дати туру з <span>{tour.startDate}</span> по <span>{tour.finishDate}</span></p>
              <p className={styles.tourInfoText}>Тривалість <span>{tour.duration}</span> ночей</p>
              <p className={styles.tourInfoText}>Харчування <span>{tour.eat}</span> </p>
              <p className={styles.tourInfoText}>Дорослих <span>{tour.adult}</span> </p>
              <p className={styles.tourInfoText}>Дітей <span>{tour.children}</span></p>
              <p className={styles.tourInfoText}>Трансфер <span>{tour.transfet}</span></p>
              <p className={styles.tourInfoText}><span>{tour.startDate}</span> з <span>{tour.from}</span></p>
              <p className={styles.tourInfoText}><span>{tour.finishDate}</span> з <span>{tour.to}</span></p>
            </div>
            <div className={styles.tourPriceWrapper}>
              <p className={styles.tourPriceTitle}>Ціна за 1 людину</p>
              <h2 className={styles.tourPrice}>{tour.price} $</h2>
              <button className={styles.tourBtnSubmit}>Відправити заявку</button>
            </div>
            <div className={styles.tourAdditionInfo}>
              <h4 className={styles.tourAdditionTitle}>Уточнити деталі туру або замовити тур можна в офісі</h4>
              <p className={styles.tourAdditionText}>Київ, вул. Вербова 24, метро Почайна</p>
              <a className={styles.tourAdditioLink} href="num:+380634724504">+380634724504</a>
              <NavLink to="/contacts" className={styles.tourAdditioLink}>Детальніше</NavLink>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.footer}>
        <NavLink to={"/"} className={styles.footerLogo}>
          <Spinner className={styles.footerLogoImg} />
          <h1 className={styles.footerLogoText}>TRAVEL TEAM</h1>
        </NavLink>
        <p className={styles.footerText}>All Rights Reserved. Design by Iryna Nadtochyi</p>
      </section>
    </>);
}

export default TourPage;
