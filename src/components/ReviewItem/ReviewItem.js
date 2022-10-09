import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handelRemoveItem }) => {
  const { id, img, name, price, quantity, shipping } = product;
  return (
    <div className="revirwItem">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details">
        <div className="review-text-details">
          <p className="heading-text">{name}</p>
          <p>
            Price: <span className="price-yellow-text">${price}</span>
          </p>
          <p>Shipping Charge: {quantity}</p>
          <p>Quantity: {shipping}</p>
        </div>
        <div className="review-delete-btn">
          <button onClick={() => handelRemoveItem(id)} className="btn-delete">
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
