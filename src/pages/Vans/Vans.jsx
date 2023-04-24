import React from "react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);

  const typeFilter = searchParams.get("type");
  //console.log(typeFilter);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={van.id} state={{ search: searchParams.toString() }}>
        <img src={van.imageUrl} alt="vanImage" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p className="price-container">
            <span className="price">${van.price}</span>
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "Simple")}
          className="van-type Simple"
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "Luxury")}
          className="van-type Luxury"
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "Rugged")}
          className="van-type Rugged"
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", null)}
          className="van-type clear-filters"
        >
          Clear filters
        </button>
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}

export default Vans;
