import React, { useState, useEffect } from 'react';
import TourList from "../../Components/ToursList/ToursList";
import styles from "./ToursPage.module.scss";
import { ReactComponent as Filter } from "../../img/filter.svg";
import DatePicker from '../../Components/DatePicker/DatePicker';
import { NavLink } from "react-router-dom";
import { ReactComponent as Spinner } from "../../img/spinner.svg";
import Tour from '../../Components/Tour/Tour';
import { getStateFromLocalStorage, deleteStateFromLocalStorage } from '../../utils/localStorageHelper';

function ToursPage() {
  const seatrchTour = getStateFromLocalStorage("searchTours");
  const tours = getStateFromLocalStorage("tours");

  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [selectorFromValue, setSelectorFromValue] = useState(seatrchTour ? seatrchTour.selectorFromValue : "Київ");
  const [selectorToValue, setSelectorToValue] = useState(seatrchTour ? seatrchTour.selectorToValue : "Одеса");
  const [listFromOpen, setlistFromOpen] = useState();
  const [listToOpen, setlistToOpen] = useState();
  const [duration, setDuration] = useState(seatrchTour ? seatrchTour.duration : 0);
  const [adults, setAdults] = useState(seatrchTour ? seatrchTour.adults : 0);
  const [children, setChildren] = useState(seatrchTour ? seatrchTour.children : 0);
  const [search, isSearch] = useState(seatrchTour ? true : false);
  const [date, setdate] = useState(seatrchTour ? new Date(seatrchTour.date) : "");

  useEffect(() => {
    return () => {
      deleteStateFromLocalStorage("searchTours");
      isSearch(false);
    }
  }, [])
  //   {
  //     id: 3,
  //     country: "Україна",
  //     city: "Одеса",
  //     price: 350,
  //     img: "https://24tv.ua/resources/photos/news/202107/1685585.jpg?v=1661261418000",
  //     hotel: "Holiday Inn Express - Oak Grove, an IHG Hotel",
  //     photoHotel: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/277581133.jpg?k=4afc6130eab5a02d0cd51830d1be97f7f181f4cdd281f2b692ed638524d6ab82&o=&hp=1",
  //     startDate: "12.06.2024",
  //     finishDate: "",
  //     eat: "сніданок",
  //     duration: 7,
  //     adult: 2,
  //     children: 0,
  //     transfet: "включений",
  //     from: "Київ",
  //     to: "Karpaty",
  //     hot: false,
  //   },
  //   {
  //     id: 4,
  //     country: "Україна",
  //     city: "Івано-Франківськ",
  //     price: 350,
  //     img: "https://karpatium.com.ua/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamdPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--86f901a06a2c1919b7944e4045b219ba0ba7f92d/%D1%80%D0%B0%D1%82%D1%83%D1%88%D0%B0%20%D1%84%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%20%D1%89%D0%BE%20%D0%BF%D0%BE%D0%B4%D0%B8%D0%B2%D0%B8%D1%82%D0%B8%D1%81%D1%8C.jpeg",
  //     hotel: "Готельно-рестораний комплекс Silver",
  //     photoHotel: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/258901723.jpg?k=fcbc30b94c200746f1276933953d6a043ff5a326c52f44a37101b16351c1fb1a&o=&hp=1",
  //     startDate: "12.06.2024",
  //     finishDate: "",
  //     eat: "сніданок",
  //     duration: 7,
  //     adult: 2,
  //     children: 0,
  //     transfet: "включений",
  //     from: "Київ",
  //     to: "Karpaty",
  //     hot: false,
  //   },
  //   {
  //     id: 1,
  //     country: "Україна",
  //     city: "Яремче",
  //     price: 135,
  //     img: "https://vidviday.ua/storage/media/tour/16498/velika-yaremce-bukovel-gedzyo.jpg",
  //     hotel: "Girske Povitria 2",
  //     photoHotel: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/146371181.jpg?k=f25014da08741717dd07915c641214c7028f8b581409c303583f4a9e3f1bcccb&o=&hp=1",
  //     startDate: "14.06.2024",
  //     finishDate: "",
  //     eat: "сніданок",
  //     duration: 7,
  //     adult: 2,
  //     children: 0,
  //     transfet: "включений",
  //     from: "Київ",
  //     to: "Яремче",
  //     hot: true,
  //   },
  //   {
  //     id: 2,
  //     country: "Україна",
  //     city: "Буковель",
  //     price: 480,
  //     img: "https://upload.wikimedia.org/wikipedia/commons/9/97/%D0%98%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.%D0%93%D0%BE%D1%80%D0%BD%D0%BE-%D0%BB%D1%8B%D0%B6%D0%BD%D1%8B%D0%B9_%D0%BA%D1%83%D1%80%D0%BE%D1%80%D1%82_%D0%91%D1%83%D0%BA%D0%BE%D0%B2%D0%B5%D0%BB%D1%8C.jpg",
  //     hotel: "WOOD HOTEL RESORT & SPA",
  //     photoHotel: "https://cdn.segodnya.ua/i/original/media/image/5f8/9bf/f54/5f89bff545308.jpg.webp",
  //     startDate: "14.06.2024",
  //     finishDate: "",
  //     eat: "сніданок",
  //     duration: 7,
  //     adult: 2,
  //     children: 0,
  //     transfet: "включений",
  //     from: "Київ",
  //     to: "Karpaty",
  //     hot: true,
  //   },

  // ];

  return (
    <div className={styles.tourPageWrapper}>
      <div className={styles.tourPageTitleWrapper}>
        <h1 className={styles.tourPageTitle}>Тури</h1>
        <button className={styles.tourPageBtn} onClick={() => { setFilterIsOpen(val => !val) }}><Filter className={styles.tourPageBtnImg} /></button>
      </div>
      {filterIsOpen ?
        <div className={styles.formWrapper}>
          <form className={styles.form} action="">
            <div className={styles.formCities}>
              Із
              <button type='button' className={styles.formSelectBtn} onClick={() =>
                setlistFromOpen((val) => !val)}>
                {selectorFromValue}
              </button>
              {listFromOpen ?
                <ul className={styles.formList}>
                  <li className={styles.formListElement} onClick={() => {
                    setSelectorFromValue("Київ");
                    setlistFromOpen(false)
                  }}>Київ</li>
                  <li className={styles.formListElement} onClick={() => {
                    setSelectorFromValue("Харків");
                    setlistFromOpen(false)
                  }}>Харків</li>
                  <li className={styles.formListElement} onClick={() => {
                    setSelectorFromValue("Одеса");
                    setlistFromOpen(false)
                  }}>Одеса</li>
                  <li className={styles.formListElement} onClick={() => {
                    setSelectorFromValue("Дніпро");
                    setlistFromOpen(false)
                  }}>Дніпро</li>
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
                    setSelectorToValue("Одеса");
                    setlistToOpen(false)
                  }}>Одеса</li>
                  <li className={styles.formListElement} onClick={() => {
                    setSelectorToValue("Іфвано-Франківськ");
                    setlistToOpen(false)
                  }}>Іфвано-Франківськ</li>
                  <li className={styles.formListElement} onClick={() => {
                    setSelectorToValue("Яремче");
                    setlistToOpen(false)
                  }}>Яремче</li>
                  <li className={styles.formListElement} onClick={() => {
                    setSelectorToValue("Буковель");
                    setlistToOpen(false)
                  }}>Буковель</li>
                </ul>
                : null}
            </div>
            <div className={styles.infoTitle}>
              Дата відправлення
              <DatePicker setdate={setdate} />
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
            <button className={styles.formBtn} onClick={() => isSearch(true)} type='button'>Знайти</button>
          </form ></div>

        : null}
      {search ?
        <>
          <div className={styles.tourPageTitleWrapper}>
            <h1 className={styles.tourPageTitle}>Знайдені тури</h1>
          </div>
          <div className={styles.tourList}>
            {tours.filter((el) => el.city === selectorToValue && el.from === selectorFromValue && el.duration === duration && el.adult === adults && el.children === children && el.startDate === `${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}`).map((el) => <Tour el={el} key={el.id} />)}
          </div>
        </>
        : <div>
          <TourList />
          <div className={styles.tourPageTitleWrapper}>
            <h1 className={styles.tourPageTitle}>Гарячі тури</h1>
          </div>
          <TourList type="hot" />
        </div>
      }

      <section className={styles.footer}>
        <NavLink to={"/"} className={styles.footerLogo}>
          <Spinner className={styles.footerLogoImg} />
          <h1 className={styles.footerLogoText}>TRAVEL TEAM</h1>
        </NavLink>
        <p className={styles.footerText}>All Rights Reserved. Design by Iryna Nadtochyi</p>
      </section>
    </div>);
}

export default ToursPage;
