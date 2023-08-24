import React from "react";
import star from "../assets/images/icon-star.svg";

function RatingComponent({ setIsSummited }) {
  return (
    <div className="w-[430px] h-[430px] bg-dark-blue p-[30px] rounded-3xl">
      <form className="w-full h-full flex flex-col justify-between">
        <div className="rounded-full bg-secondary w-[60px] h-[60px] flex justify-center items-center">
          <img src={star} alt="star_logo" />
        </div>
        <h1 className="text-3xl font-bold">How did we do?</h1>
        <p className="text-light-gray">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex justify-between items-center">
          <button className="rounded-full flex justify-center items-center w-[60px] h-[60px] bg-secondary text-light-gray hover:bg-orange hover:text-white leading-none">1</button>
          <button className="rounded-full flex justify-center items-center w-[60px] h-[60px] bg-secondary text-light-gray hover:bg-orange hover:text-white leading-none">2</button>
          <button className="rounded-full flex justify-center items-center w-[60px] h-[60px] bg-secondary text-light-gray hover:bg-orange hover:text-white leading-none">3</button>
          <button className="rounded-full flex justify-center items-center w-[60px] h-[60px] bg-secondary text-light-gray hover:bg-orange hover:text-white leading-none">4</button>
          <button className="rounded-full flex justify-center items-center w-[60px] h-[60px] bg-secondary text-light-gray hover:bg-orange hover:text-white leading-none">5</button>
        </div>
        <button type="submit" className="w-full p-[15px] bg-orange hover:bg-white hover:text-orange rounded-full flex justify-center items-center leading-none">SUBMIT</button>
      </form>
    </div>
  );
}

export default RatingComponent;
