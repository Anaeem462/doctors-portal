import React from "react";

const TestimonialCard = ({ card }) => {
  const { id, image, name, address, message } = card;
  return (
    <div>
      <div className="card w-96 bg-base-100 mx-auto shadow-2xl mb-7">
        <div className="card-body">
          <p>{message}</p>
        </div>

        <div className="flex items-center my-5 mx-4">
          <img
            src={image}
            alt={name}
            className="mr-4 w-[75px] border border-primary rounded-full p-1"
          />
          <div>
            <p className="text-xl text-neutral font-semibold">{name}</p>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
