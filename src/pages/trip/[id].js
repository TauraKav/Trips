import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./trip.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useRouter } from "next/router";

const trip = () => {
    const [trip, setTrip] = useState();
    const [booking, setBooking] = useState('');


    const router = useRouter();

    const fetchEvent = async () => {
        try {
            const response = await axios.get(
                `https://649316f4428c3d2035d15013.mockapi.io/journeys/${router.query.id}`,
                { userId: "1" }
            );

            const { data } = response;
            setTrip(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        router.query.id &&
            fetchEvent();
    }, [router.query.id]
    )

    const bookTrip = () => {
       
        setBooking ( "Thank you, come again")
        setTimeout(() => {
            router.push("/");
          }, 3000);
        }

    return (
        <>
            <Navbar />
            <div className={styles.tripsWrapper}>
                <div className={styles.wrapper}>
                    {trip && (
                        <>
                            <div className={styles.imgWrapper}>
                                <h1 className={styles.country}>{trip.country}</h1>
                                <h3 className={styles.city}>{trip.destination}</h3>
                                <img src={trip.image_url} className={styles.image} />
                            </div>

                            <div className={styles.text}>
                                <div>{trip.date}</div>
                                <div>Trip duration -  {trip.duration} days</div>
                                <div> Price: {trip.price} € </div>
                                <button onClick= {bookTrip} className={styles.orderButton}>Book</button>
                            </div>
                        </>
                    )}
                </div>
                <div className={styles.bookingButton}>{booking}</div>
            </div>

            
            <Footer />
        </>
    )
};


export default trip