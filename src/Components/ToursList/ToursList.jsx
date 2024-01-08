import React from 'react';
import styles from "./ToursList.module.scss";
import Tour from '../Tour/Tour';

function ToursList() {

    const tours=[
        {
            id: 1,
            country:"France",
            city:"Paris",
            price: 280,
            img:"https://livedemo00.template-help.com/wt_51676/images/landing-private-airlines-01-570x370.jpg",
        },
        {
            id: 2,
            country:"USA",
            city:"Boston",
            price: 480,
            img:"https://livedemo00.template-help.com/wt_51676/images/landing-private-airlines-02-570x370.jpg",
        },
        {
            id: 3,
            country:"Italy",
            city:"Venice",
            price: 350,
            img:"https://livedemo00.template-help.com/wt_51676/images/landing-private-airlines-03-570x370.jpg",
        },
        {
            id: 4,
            country:"Spain",
            city: "Benidorm",
            price: 350,
            img:"https://livedemo00.template-help.com/wt_51676/images/landing-private-airlines-04-570x370.jpg",
        }
    ];

    return (
        <div className={styles.tourList}>
            {tours.map((el)=><Tour el={el} key={el.id}/>)}
        </div>
    );
}

export default ToursList;
