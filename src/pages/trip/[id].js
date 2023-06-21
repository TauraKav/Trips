import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./trip.module.css";
import Navbar from "../../components/navbar/Navbar";
import { useRouter } from "next/router";

const trip = () => {
    const [trip, setTrip] = useState();

    const router = useRouter();

    const fetchEvent = async () => {
        console.log(router.query.id);
        console.log(router);
        const response = await axios.get(
            `https://649316f4428c3d2035d15013.mockapi.io/journeys/${router.query.id}`,
            { userId: "1" }
        );

        const { data } = response;
        setTrip(data);

    };

    useEffect(() => {
        router.query.id &&
            fetchEvent();
    }, [router.query.id]
    )

    return (
        <div className={styles.wrapper}>

            {trip && (
                <>
                    <div className={styles.imgWrapper}>
                        <h1 className={styles.city}>{trip.destination}</h1>
                        <img src={trip.image_url} className={styles.image} />
                    </div>

                    <div className={styles.text}>
                        <h3>{trip.date}</h3>
                        <h3>Trip duration -  {trip.duration} days</h3>
                        <button className={styles.orderButton}>Book</button>
                    </div>
                </>
            )}

        </div>
    )
};


export default trip