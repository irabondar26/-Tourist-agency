import React, { useState } from 'react';
import styles from "./MainPage.module.scss";
import { NavLink } from "react-router-dom";
import ToursList from '../../Components/ToursList/ToursList';


function MainPage() {

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
        <ToursList/>
      </section>
    </div >
  );
}

export default MainPage;
