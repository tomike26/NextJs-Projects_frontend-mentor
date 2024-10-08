import React from "react";
import { datas } from "../../../utils/data";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="landing-page-section">
      <div className="landing-page-details">
        <div className="dessert-section">
          <h1>Desserts</h1>
          <div className="desserts-container">
            {datas.map((data, index) => (
              <div className="dessert-info" key={index}>
                <Image
                  src={data.image.desktop}
                  alt={data.name}
                  width={300}
                  height={200}
                  className="dessert-image"
                />
                <div className="dessert-details">
                  <p>{data.category}</p>
                  <p>{data.name}</p>
                  <p>{data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-section">
          <div className="cart-details">
            <h1>lorem</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
