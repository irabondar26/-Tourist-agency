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
            img:"https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900",
        },
        {
            id: 2,
            country:"USA",
            city:"Boston",
            price: 480,
            img:"https://www.travelandleisure.com/thmb/_aMbik8KZYsUKc_6_XNeAOzPi84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/boston-massachusetts-BOSTONTG0221-719aef2eeb1c4929b6c839715e34a69e.jpg",
        },
        {
            id: 3,
            country:"Italy",
            city:"Venice",
            price: 350,
            img:"https://thumbs.dreamstime.com/b/top-view-old-town-vanice-sunset-top-view-old-town-vanice-sunset-italy-96710225.jpg",
        },
        {
            id: 4,
            country:"Spain",
            city: "Benidorm",
            price: 350,
            img:"https://www.costablancahills.com/objetos/temp/source/propertysun/costablancahills-noticias_6441083c468b8-source.jpg",
        }
    ];

    return (
        <div className={styles.tourList}>
            {tours.map((el)=><Tour el={el} key={el.id}/>)}
        </div>
    );
}

export default ToursList;
