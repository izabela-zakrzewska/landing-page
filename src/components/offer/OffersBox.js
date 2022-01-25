import React from "react";

const OffersBox = ({ item, id }) => {
  if (item.isNew) {
    return (
      <div key={(item, id)} className="special-offer">
        <div className="dot"></div>
        <div className="dot-item">
          {item.offer} <br />
          (nowość)
        </div>
      </div>
    );
  }

  return (
    <div key={item.id} className="item">
      {item.offer}
    </div>
  );
};
export default OffersBox;
