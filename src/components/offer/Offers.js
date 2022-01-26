import React from "react";
import OffersBox from "./OffersBox";

const Offers = ({ offers }) => {
  return (
    <section className="boxes">
      <h2 id="offer">Czym zajmuje się nasza firma?</h2>
      <div className="container-4">
        {offers.map((item, index) => (
          <OffersBox key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

/*Lista ofert powinna być generowana na podstawie tablicy w JS i funkcji .map

Pojedynczy box oferty powinien być osobnym komponentem, który przyjmuje parametr 
"isNew", ustawiający napis "nowość" oraz czerwoną kropkę zgodnie z jego wartością */
export default Offers;
