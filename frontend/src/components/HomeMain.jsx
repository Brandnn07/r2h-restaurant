import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function HomeMain() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/user/7");
    console.log(result.data);
    setUsers(result.data);
  };

  return (
    <>
      <figure className="figure">
        <h1 className="homeTitle">Let's Eat</h1>
        <br />
        <br />
        <h2>Hello {users.name}!</h2>
        <p>Your username incase you forgot: {users.username}</p>
        <b>Your current reservation: {users.reservation}</b>
        <section className="homeMain">
        <h3>Who we are</h3>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("../images/fastFoodEatOften-950649808-650x450.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../images/istockphoto-495799500-612x612.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../images/photo-1592861956120-e524fc739696.jpg")} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br />
<br />
<br />
        <p>
          Let's Eat is a global operation who's purpose and mission is to
          provide everyone around the world with an easy to access way at
          looking for restaurants in their area. Users are able to query via
          their location and find local restaurants along with the reviews of
          said restaurants. You are also able to connect with friends and family
          and coordinate reservations with one another.
        </p>
        <br />
        <br />
        <br />
        <p>
          Let's Eat connects people with great local businesses. With trusted
          local business information, photos and review content, Let's Eat
          provides a one-stop local platform for consumers to discover, connect
          and transact with local businesses of all sizes by making it easy to
          request a quote, join a waitlist or make a reservation, and make an
          appointment or purchase. Let's Eat was founded in San Francisco in
          2004.
        </p>
        </section>
      </figure>
    </>
  );
}
