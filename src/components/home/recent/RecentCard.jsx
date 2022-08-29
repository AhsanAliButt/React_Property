import React, { useState, useEffect } from "react";
import { list } from "../../data/Data";

const RecentCard = () => {
  const [product, setProduct] = useState([]);
  const [value, setValue] = useState(2);
  const token = localStorage.getItem("usersdatatoken");

  console.log("data", product);

  useEffect(() => {
    fetchProducts();
  }, []);

  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const fetchProducts = async () => {
    fetch("http://localhost:8001/api/product/getAllProducts", requestOptions)
      .then((response) => response.json())
      .then((result) => setProduct(result.products))
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <div className="content grid3 mtop">
        {product.map((val, index) => {
          if (val.category !== "Property") {
            return;
          }
          const { name, description, price, category, imageUrl } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={imageUrl} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> "Pakistan"
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>{" "}
                  <label htmlFor="">/sqft</label>
                </div>
                <span> {description} </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
