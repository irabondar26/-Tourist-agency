import React from 'react';
import { ReactComponent as Spinner } from "../../img/spinner.svg";
import styles from "./ContactsPage.module.scss";
import { ReactComponent as Location } from "../../img/location.svg";
import { ReactComponent as Calendar } from "../../img/calendar.svg";
import { ReactComponent as Mail } from "../../img/mail.svg";
import { ReactComponent as Phone } from "../../img/phone.svg";
import { ReactComponent as FacebookSvg } from "../../img/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../img/instagram.svg";
import ToursList from '../../Components/ToursList/ToursList';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from "react-router-dom";
import { getStateFromLocalStorage } from '../../utils/localStorageHelper';

function ContactsPage() {
  
  const testimonials = getStateFromLocalStorage("testimonials");
  //   {
  //     id: 1,
  //     img: "https://img.freepik.com/premium-photo/close-up-stylish-young-business-woman-sitting-chair_252847-43947.jpg",
  //     name: 'Анна Маковська',
  //     text: 'Я хотіла подякувати вам за те, що ви спланували поїздку до Карпат для мене та мого хлопця. Це було неймовірно та перевершило мої очікування! Ми чудово провели час і були дуже задоволені розміщенням.'
  //   },
  //   {
  //     id: 2,
  //     img: "https://img.freepik.com/premium-photo/portrait-girl-closeup-girl-brown-background-beautiful-look_215924-2125.jpg",
  //     name: 'Дарина Охрименко',
  //     text: 'Я чудово провела час під час наших подорожей Карпат, у мене були просто чудові враження. Мені сподобалося розташування табору Gorges, оскільки я поачила та відчула на собі те, як раніше жили люди у карпатах. Обслуговування було чудовим, і всі були дуже уважними!'
  //   },
  //   {
  //     id: 3,
  //     img: "https://w0.peakpx.com/wallpaper/576/387/HD-wallpaper-cute-girl-blonde-hairs-blonde-girls-model.jpg",
  //     name: 'Олена Шевченко',
  //     text: "Просто хотіла сказати велике-велике спасибі за допомогу в організації дивовижної пригоди! Ми з племінником отримали задоволення! Усе помешкання було ідеальним, як і всі види діяльності, якими ми займалися (походи, риболовля та масаж!) У нас такі приємні спогади, і ми не можемо вам віддячити!"
  //   }
  // ];

  return (<div className={styles.contacts}>
    <section className={styles.contactsInfoWrapper}>
      <h1 className={styles.contactsInfoTitle}>Туристичне агентство "TravelTeam"</h1>
      <div className={styles.contactsInfo}>
        <div className={styles.contactsInfoImgWrapper}>
          <img src="https://etnoxata.com.ua/image/catalog/stat3/10_2016/27_10/a19.jpg" alt="" className={styles.contactsInfoImg} />
          <div className={styles.logo}>
            <Spinner className={styles.logoImg} />
            <h1 className={styles.logoText}>TRAVEL TEAM</h1>
          </div>
        </div>
        <ul className={styles.contactsInfoList}>
          <li className={styles.contactsInfoListElement}>
            <Location className={styles.contactsInfoListElementLogo} />
            <p className={styles.contactsInfoListElementText}>Київ, вул. Вербова 24, метро Почайна</p>
          </li>
          <li className={styles.contactsInfoListElement}>
            <Calendar className={styles.contactsInfoListElementLogo} />
            <div>
              <p className={styles.contactsInfoListElementText}>Пн-Пт: 10:00 - 19:00,</p>
              <p className={styles.contactsInfoListElementText}>Сб: 11:00 - 15:00, </p>
              <p className={styles.contactsInfoListElementText}>Нд: вихідний</p>
            </div>
          </li>
          <li className={styles.contactsInfoListElement}>
            <Mail className={styles.contactsInfoListElementLogo} />
            <a className={styles.contactsInfoListElementLink} href="mailto:irabondar1012@gmail.com">irabondar1012@gmail.com</a>
          </li>
          <li className={styles.contactsInfoListElement}>
            <Phone className={styles.contactsInfoListElementLogo} />
            <a className={styles.contactsInfoListElementLink} href="tel:+380634724504">+380634724504</a>
          </li>
          <li className={styles.contactsInfoListElementSocial}>
            <p className={styles.contactsInfoListElementText}>Ми в соціальних мережах</p>
            <div className={styles.contactsInfoListElementLinksWrapper}>
              <FacebookSvg className={styles.contactsInfoListElementSocialLink} />
              <InstagramSvg className={styles.contactsInfoListElementSocialLink} />
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section className={styles.contactsTours}>
      <h2 className={styles.contactsToursTitle}>Гарячі тури</h2>
      <ToursList type="hot" />
    </section>
    <section className={styles.contactsTestimonials}>
      <h2 className={styles.contactsTestimonialsTitle}>Відгуки</h2>
      <Carousel data-bs-theme="dark" className={styles.testimonialsSlider}>
        {testimonials.map((el) => <Carousel.Item key={el.id} className={styles.sliderItem}>
          <div className={styles.sliderItemImgWrapper}>
            <img className={styles.sliderItemImg} src={el.img} alt="" />
          </div>
          <h3 className={styles.sliderItemTitle}>{el.name}</h3>
          <p className={styles.sliderItemText}>{el.text}</p>
        </Carousel.Item>)}
      </Carousel>
    </section>
    <section className={styles.footer}>
      <NavLink to={"/"} className={styles.footerLogo}>
        <Spinner className={styles.footerLogoImg} />
        <h1 className={styles.footerLogoText}>TRAVEL TEAM</h1>
      </NavLink>
      <p className={styles.footerText}>All Rights Reserved. Design by Iryna Nadtochyi</p>
    </section>
  </div>);
}

export default ContactsPage;
