import React from "react";
import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <section>
      <h2>Our Tours</h2>
      <div>
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} removeTour={removeTour} />
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
