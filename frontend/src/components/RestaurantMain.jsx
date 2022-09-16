/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RestaurantMain() {
  const [results, setResults] = useState([]);
  const [place, setPlace] = useState([]);

  const onInputChange = (e) => {
    setPlace({ [e.target.name]: e.target.value });
  };

//   useEffect(() => {
//     setPlace = "restaurants in Charlotte"
//   })
  let navigate = useNavigate();
  const URL =
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAMIEaC7A2F1kLf5k6KqLlhM85xi4BwM-s&location=35.1152086,-80.9825862&radius=5000&type=restaurant";

  fetch(URL)
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
    //   console.log(jsonData.results);
      setResults(jsonData.results);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
    <section className="mapArea">

      <header>
        <h2> Restaurants near you </h2>
      </header>
      <iframe
        title="map"
        width="950"
        height="650"
        frameborder="0"
        style={{ border: 0 }}
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyAMIEaC7A2F1kLf5k6KqLlhM85xi4BwM-s&q=Restaurants around Steele Creek"
        allowfullscreen
      ></iframe>

      <p id="demo"></p>
      <section className="container">
        <div className="items item1">
          <div id="container">
            <div id="map"></div>
            <div id="sidebar">
              <h2>Results</h2>
              <ul id="places">
                {results.map((shop, index) => (
                  <tr>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{shop.name}</td>
                    <td>Rating: {shop.rating}</td>
                    <td>
                      <a
                        className="btn btn-primary mx-2"
                        target="_blank"
                        href={`https://www.google.com/search?q=` + shop.name}
                      >
                        Find Restaurant
                      </a>
                      <Link
                        className="btn btn-primary mx-2"
                        to="/reservation"
                      >
                        Set reservation
                      </Link>
                    </td>
                  </tr>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </section>
      </section>
    </>
  );
}
