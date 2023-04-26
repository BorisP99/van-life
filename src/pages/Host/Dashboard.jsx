import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`This is ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
      <div className="edit-link">
        <span>Edit</span>
      </div>
    </Link>
  ));

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income" className="link">
          Details
        </Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        <img src="../images/Star.png" className="star" alt="Star Img" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews" className="link">
          Details
        </Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans" className="link">
            View all
          </Link>
        </div>
        <section>{hostVansEls}</section>
      </section>
    </>
  );
};

export default Dashboard;
