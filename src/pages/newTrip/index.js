import React, { useState } from "react";
import styles from "./NewTrip.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";


const NewTripPage = () => {
    const router = useRouter();
  
    const [destination, setDestination] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    const [image_url, setImageUrl] = useState("");
    const [isSuccess, setSuccess] = useState(false);

    const addNewTrip = async () => {
      try {
        const response = await axios.post("https://649316f4428c3d2035d15013.mockapi.io/journeys", {
          destination: destination,
           duration: duration,
           price: price,
           date: date,
          country: country,
          image_url: image_url,
         });

         console.log (response)

         if (response.status === 201) {
          setSuccess(true);
        
          setTimeout(() => {
            router.push("/");
          }, 3000);
        }

      } catch (err) {
        console.log(err);
      }
      
    };
  
    return (
      <div>
        <Navbar/>
        
        <div className={styles.tripForm}>
          <input
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            placeholder="City"
          />
  
          <input
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            placeholder="Duration"
          />
  
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="Price"
          />
  
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Date"
          />
  
          <input
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            placeholder="Country"
          />
  
          <input
            value={image_url}
            onChange={(event) => setImageUrl(event.target.value)}
            placeholder="Image Url"
          />

          <button onClick={addNewTrip}>Add a new trip</button>

          {isSuccess && <div>Trip was added successfully</div>}
        </div>

        <Footer/>
      </div>
    );
  };
  
  export default NewTripPage;