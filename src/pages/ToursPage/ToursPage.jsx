import React from 'react';
import TourList from "../../Components/ToursList/ToursList";
import styles from "./ToursPage.module.scss";

function ToursPage() {
  return (
    <div className={styles.tourPageWrapper}>
      <h1 className={styles.tourPageTitle}>Тури</h1>
      <TourList />
    </div>);
}

export default ToursPage;
