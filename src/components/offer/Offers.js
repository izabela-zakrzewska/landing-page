import React from "react";
import OffersBox from "./OffersBox";

const Offers = ({ offers }) => {
  return (
    <section className="boxes">
      <h2 id="offer">Czym zajmuje się nasza firma?</h2>
      <div className="container-4">
        <div className="special-offer">
          <div className="dot"></div>
          <div className="dot-item">
            Usługa 1 <br />
            (nowość)
          </div>
        </div>
        /* {offers.map(() => return;)} */
        <div className="item">Usługa 2</div>
        <div className="item">Usługa 3</div>
        <div className="item">Usługa 4</div>
        <div className="item">Usługa 5</div>
        <div className="item">Usługa 6</div>
      </div>
    </section>
  );
};
/* Lista ofert powinna być generowana na podstawie tablicy w JS i funkcji .map

Pojedynczy box oferty powinien być osobnym komponentem, który przyjmuje parametr 
"isNew", ustawiający napis "nowość" oraz czerwoną kropkę zgodnie z jego wartością */
export default Offers;
