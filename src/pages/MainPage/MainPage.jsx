import React, { useState } from 'react';
import styles from "./MainPage.module.scss";
import { NavLink } from "react-router-dom";
import ToursList from '../../Components/ToursList/ToursList';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Spinner } from "../../img/spinner.svg";



function MainPage() {

  const testimonials = [
    {
      id: 1,
      img: "https://img.freepik.com/premium-photo/close-up-stylish-young-business-woman-sitting-chair_252847-43947.jpg",
      name: 'Анна Маковська',
      text: 'Я хотіла подякувати вам за те, що ви спланували поїздку до Карпат для мене та мого хлопця. Це було неймовірно та перевершило мої очікування! Ми чудово провели час і були дуже задоволені розміщенням.'
    },
    {
      id: 2,
      img: "https://img.freepik.com/premium-photo/portrait-girl-closeup-girl-brown-background-beautiful-look_215924-2125.jpg",
      name: 'Дарина Охрименко',
      text: 'Я чудово провела час під час наших подорожей Карпат, у мене були просто чудові враження. Мені сподобалося розташування табору Gorges, оскільки я поачила та відчула на собі те, як раніше жили люди у карпатах. Обслуговування було чудовим, і всі були дуже уважними!'
    },
    {
      id: 3,
      img: "https://w0.peakpx.com/wallpaper/576/387/HD-wallpaper-cute-girl-blonde-hairs-blonde-girls-model.jpg",
      name: 'Олена Шевченко',
      text: "Просто хотіла сказати велике-велике спасибі за допомогу в організації дивовижної пригоди! Ми з племінником отримали задоволення! Усе помешкання було ідеальним, як і всі види діяльності, якими ми займалися (походи, риболовля та масаж!) У нас такі приємні спогади, і ми не можемо вам віддячити!"
    }
  ];

  const [selectorFromValue, setSelectorFromValue] = useState("Kyiv");
  const [selectorToValue, setSelectorToValue] = useState("Kyiv");
  const [listFromOpen, setlistFromOpen] = useState();
  const [listToOpen, setlistToOpen] = useState();
  const [duration, setDuration] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  return (
    <div className={styles.mainPage}>
      <img className={styles.mainImg} src="https://w.forfun.com/fetch/1e/1e6e2c0e090932aeb463def6dcacaf8c.jpeg" alt="" />
      <section className={styles.mainSection}>
        <div className={styles.mainInfo}>
          <h1 className={styles.mainInfoTite}>Подорожуй Україною!</h1>
          <p className={styles.mainInfoText}>Наша туристична агенція готова запропонувати вам захоплюючу відпустку, яка буде створена відповідно до ваших потреб і побажань.</p>
          <NavLink to={"/contacts"} className={styles.mainInfoBtn}>подробніше</NavLink>
        </div>
        <form className={styles.form} action="">
          <h2 className={styles.formTitle}>Знайди свій тур</h2>
          <div className={styles.formCities}>
            Із
            <button type='button' className={styles.formSelectBtn} onClick={() =>
              setlistFromOpen((val) => !val)}>
              {selectorFromValue}
            </button>
            {listFromOpen ?
              <ul className={styles.formList}>
                <li className={styles.formListElement} onClick={() => {
                  setSelectorFromValue("Kyiv");
                  setlistFromOpen(false)
                }}>Kyiv</li>
                <li className={styles.formListElement} onClick={() => {
                  setSelectorFromValue("Kharkiv");
                  setlistFromOpen(false)
                }}>Kharkiv</li>
                <li className={styles.formListElement} onClick={() => {
                  setSelectorFromValue("Odesa");
                  setlistFromOpen(false)
                }}>Odesa</li>
                <li className={styles.formListElement} onClick={() => {
                  setSelectorFromValue("Dnipro");
                  setlistFromOpen(false)
                }}>Dnipro</li>
              </ul>
              : null}
          </div>

          <div className={styles.formCities}>
            До
            <button type='button' className={styles.formSelectBtn} onClick={() => setlistToOpen((val) => !val)}>
              {selectorToValue}
            </button>
            {listToOpen ?
              <ul className={styles.formList}>
                <li className={styles.formListElement} onClick={() => {
                  setSelectorToValue("Kyiv");
                  setlistToOpen(false)
                }}>Kyiv</li>
                <li className={styles.formListElement} onClick={() => {
                  setSelectorToValue("Kharkiv");
                  setlistToOpen(false)
                }}>Kharkiv</li>
                <li className={styles.formListElement} onClick={() => {
                  setSelectorToValue("Odesa");
                  setlistToOpen(false)
                }}>Odesa</li>
                <li className={styles.formListElement} onClick={() => {
                  setSelectorToValue("Dnipro");
                  setlistToOpen(false)
                }}>Dnipro</li>
              </ul>
              : null}
          </div>
          <div className={styles.anotherInfo}>
            <div className={styles.infoTitle}>
              Дата відправлення
              <button type='button' className={styles.infoDateBtn}>Оберіть дату</button>
            </div>
            <div className={styles.infoTitle}>
              Кількість днів
              <div className={styles.infoCounter}>
                <button className={styles.infoCounterBtn} type='button' onClick={() => {
                  setDuration(val => {
                    if (val >= 1) {
                      return val - 1;
                    } else {
                      return val;
                    }
                  })
                }}>-</button>
                {duration}
                <button className={styles.infoCounterBtn} type='button'
                  onClick={() => {
                    setDuration(val => {
                      if (val <= 13) {
                        return val + 1;
                      } else {
                        return val;
                      }
                    })
                  }}>+</button>
              </div>
            </div>
            <div className={styles.infoTitle}>
              Дорослих
              <div className={styles.infoCounter}>
                <button className={styles.infoCounterBtn} type='button'
                  onClick={() => {
                    setAdults(val => {
                      if (val >= 1) {
                        return val - 1;
                      } else {
                        return val;
                      }
                    })
                  }}>-</button>
                {adults}
                <button className={styles.infoCounterBtn} type='button'
                  onClick={() => {
                    setAdults(val => {
                      if (val <= 13) {
                        return val + 1;
                      } else {
                        return val;
                      }
                    })
                  }}>+</button>
              </div>
            </div>
            <div className={styles.infoTitle}>
              Дітей
              <div className={styles.infoCounter}>
                <button className={styles.infoCounterBtn} type='button'
                  onClick={() => {
                    setChildren(val => {
                      if (val >= 1) {
                        return val - 1;
                      } else {
                        return val;
                      }
                    })
                  }}>-</button>
                {children}
                <button className={styles.infoCounterBtn} type='button'
                  onClick={() => {
                    setChildren(val => {
                      if (val <= 4) {
                        return val + 1;
                      } else {
                        return val;
                      }
                    })
                  }}>+</button>
              </div>
            </div>
          </div>
          <button className={styles.formBtn}>Знайти тур</button>
        </form >
      </section>
      <section className={styles.tours}>
        <h2 className={styles.toursTitle}>гарячі тури</h2>
        <div className={styles.toursTitleAddition}>
          <NavLink to="tours" className={styles.toursTitleAdditionBtn} >переглянути всі тури</NavLink>
        </div>
        <ToursList />
      </section>
      <section className={styles.testimonials}>
        <h2 className={styles.testimonialsTitle}>Відгуки</h2>
        <Carousel data-bs-theme="dark" className={styles.testimonialsSlider}>
          {testimonials.map((el) => <Carousel.Item key={el.id} className={styles.sliderItem}>
            <img className={styles.sliderItemImg} src={el.img} alt="" />
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
    </div>
  );
}

export default MainPage;