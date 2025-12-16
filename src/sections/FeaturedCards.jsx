import React from "react";
import { abilities } from "../constants";

const FeaturedCards = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 md:grid-cols-2">
        {abilities.map((ability, index) => (
          <div
            key={ability.title + index}
            className="card-border rounded-lg flex flex-col gap-2 p-8"
          >
            <div className="size-14 flex rounded-full justify-center items-center">
              <img src={ability.imgPath} alt={ability.title} />
            </div>
            <h3 className="text-white-50 text-2xl text-semibold">
              {ability.title}
            </h3>
            <p className="text-white-50 text-lg">{ability.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCards;
