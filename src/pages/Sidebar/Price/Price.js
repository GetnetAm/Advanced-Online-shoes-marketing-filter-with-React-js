import React from "react";
import "./Price";
function Price() {
  return (
    <div>
      <h2 className="sidebar-title">Price</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>$0-$50
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sneakers$51-$100
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>$100-$150
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>$150-$200
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>$200-$250
        </label>
      </div>
    </div>
  );
}

export default Price;
