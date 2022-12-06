import React from "react";
import "../home.css";
import quote from "../../../assets/icons/quote.svg";
import "../home.css";
import people1 from "../../../assets/images/people1.png";
import "../home.css";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
  const cardsData = [
    {
      id: 1,
      image: people1,
      name: "william Herry",
      address: "california",
      message:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      image: people2,
      name: "winson",
      address: "california",
      message:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      image: people3,
      name: "william",
      address: "california",
      message:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];

  return (
    <div>
      <div className="flex justify-between ">
        <div>
          <h1 className="text-appointment ">Testimonial</h1>
          <p className="text-[36px]">What Our Patients Says</p>
        </div>

        <img src={quote} className="w-24 lg:w-48" alt="quote" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 my-20">
        {cardsData.map((card) => (
          <TestimonialCard key={card.id} card={card}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
