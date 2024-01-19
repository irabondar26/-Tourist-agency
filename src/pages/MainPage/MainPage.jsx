import React, { useState } from 'react';
import styles from "./MainPage.module.scss";
import { NavLink } from "react-router-dom";
import ToursList from '../../Components/ToursList/ToursList';
import { Carousel, CarouselItem} from 'react-bootstrap';


function MainPage() {

  const testimonials = [
    {
      id: 1,
      img: "https://livedemo00.template-help.com/wt_51676/images/quote-user-1-210x210.jpg",
      name: 'Ann McMillan',
      text: 'I wanted to thank you very much for planning the trip to France for my boyfriend and me. It was amazing and exceeded my expectations! We had a wonderful time and were very pleased with the accommodations in Paris and Bayeux. Our private/small tour guides were fantastic! I appreciate all the effort to get us to the Eiffel Tower finally.'
    },
    {
      id: 2,
      img: "https://livedemo00.template-help.com/wt_51676/images/quote-user-2-210x210.jpg",
      name: 'Debra Ortega',
      text: 'I had a marvelous time in our travels to Madagascar, Zimbabwe and Botswana, I had just wonderful experiences.I loved the location of the Gorges Camp as I felt like it was only the time we got to see real and rural Africans and how they truly lived. The service was amazing and everyone was very attentive!'
    },
    {
      id: 3,
      img: "https://livedemo00.template-help.com/wt_51676/images/quote-user-3-210x210.jpg",
      name: 'Samantha Smith',
      text: "Just wanted to say many, many thanks for helping me set up an amazing Costa Rican adventure! My nephew and I had a blast! All of the accommodations were perfect as were the activities that we did (canopy, coffee tour, hikes, fishing, and massages!) We have such fond memories and can't thank you enough!"
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
      <section>
        <img className={styles.mainImg} src="https://w.forfun.com/fetch/1e/1e6e2c0e090932aeb463def6dcacaf8c.jpeg" alt="" />
        <div className={styles.mainInfo}>
          <h1 className={styles.mainInfoTite}>Travel through Ukraine</h1>
          <p className={styles.mainInfoText}>
            Our travel agency is ready to offer you an exciting vacation that is designed to fit your own needs and wishes. </p>
          <NavLink to={"/contacts"} className={styles.mainInfoBtn}>learn more</NavLink>
        </div>
        <form className={styles.form} action="">
          <h2 className={styles.formTitle}>Find your tour</h2>
          <div className={styles.formCities}>
            From
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
            To
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
              Depart Date
              <button type='button' className={styles.infoDateBtn}>Choose the date</button>
            </div>
            <div className={styles.infoTitle}>
              Duration
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
              Adults
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
              Children
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
          <button className={styles.formBtn}>search tour</button>
        </form >
      </section>
      <section className={styles.tours}>
        <h2 className={styles.toursTitle}>hot tours</h2>
        <div className={styles.toursTitleAddition}>
          <p className={styles.toursTitleAdditionText}>our best tours</p>
          <NavLink to="tours" className={styles.toursTitleAdditionBtn} >view all tours</NavLink>
        </div>
        <ToursList />
      </section>
      <section className={styles.testimonials}>
        <h2 className={styles.testimonialsTitle}>TESTIMONIALS</h2>
        <Carousel>
          {testimonials.map((el) =>
            <CarouselItem key={el.id}>
                <img src={el.img} alt="" />
                <div>
                  <h3>{el.name}</h3>
                  <p>{el.text}</p>
                </div>
            </CarouselItem>
          )}
        </Carousel>
      </section>
    </div >
  );
}

export default MainPage;
