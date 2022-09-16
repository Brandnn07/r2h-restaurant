import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ReservationPage() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    reservation: "",
  });

  const { name, username, email, reservation } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    console.log("this is going")
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/7`, user);
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/7`);
    setUser(result.data);
  };
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)} className="row g-3">
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            value={email}
            className="form-control"
            id="inputEmail4"
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Username
          </label>
          <input
            type={"text"}
            value={username}
            className="form-control"
            placeholder=""
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            Restaurant
          </label>
          <input
            type={"text"}
            className="form-control"
            value={"Wine Shop At Rivergate"}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            At what time would you prefer?
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" for="gridCheck">
              Subscribe to notifications
            </label>
          </div>
        </div>
        <div className="col-12">
          <Link to="/">
            <button type="submit" className="btn btn-primary">
              Reserve
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
