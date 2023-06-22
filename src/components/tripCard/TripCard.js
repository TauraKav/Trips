import React from "react";
import styles from "./TripCard.module.css";
import Link from "next/link";

const TripCard = ({ country, id, imageUrl, date, duration, price }) => {
  return (
    <>
      <Link className={styles.link} href={`/trip/${id}`}>
        <div className={styles.card}>
          <h1 className={styles.destination}>{country}</h1>
          <img className={styles.image} src={imageUrl} />
          <div className={styles.textWrapper}>
            
            <div className={styles.dateWrapper}>
              <div className={styles.date}>{date}</div>
              <div className={styles.duration}> Trip duration - {duration} days</div>
            </div>

            <div className={styles.price}>{price} € </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TripCard;