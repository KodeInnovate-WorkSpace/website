import React from "react";
import data from "../../constants/data.json";
const FeaturedCard = () => {
  return data.map((d) =>
    d.featured ? (
      <div
        key={d.id}
        className="w-64 h-72 rounded-lg flex flex-col justify-between items-start p-4 mx-2"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${d.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-slate-700 text-white px-2 text-sm rounded-sm">
          <p>{d.tag}</p>
        </div>

        <div>
          <h1 className="text-white">{d.name}</h1>
          <p className="text-white">Beds: {d.bedrooms}</p>
        </div>
      </div>
    ) : null
  );
};

export default FeaturedCard;
