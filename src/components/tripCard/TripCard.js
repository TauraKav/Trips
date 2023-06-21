import React from "react";
import styles from "./TripCard.module.css";
import Link from "next/link";

const TripCard = ({ destination, id, imageUrl, date, duration }) => {
    return (
      <>
        <Link  className={styles.link} href={`/trip/${id}`}>
          <div className={styles.card}>
            <h1 className={styles.destination}>{destination}</h1>
            <img className={styles.image} src={imageUrl} />
            <div className={styles.date}>{date}</div>
            <div className={styles.duration}> Trip duration - {duration} days</div>
          </div>
        </Link>
      </>
    );
  };
  
  export default TripCard;