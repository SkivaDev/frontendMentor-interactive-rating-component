import React from "react";
import thankYou from "../assets/images/illustration-thank-you.svg";

function AppreciationComponent({ ratingNumber }) {
  return (
    <div className="w-[430px] h-[430px] bg-dark-blue p-[30px] rounded-3xl flex flex-col justify-between items-center py-[45px]">
      <div>
        <div className=" w-auto h-[120px] mb-7">
          <img className=" h-full" src={thankYou} alt="thankYou" />
        </div>
        <div className="bg-medium-gray px-[15px] py-[8px] rounded-full flex justify-center items-center leading-none">
          You selected {ratingNumber} out of 5
        </div>
      </div>
      <div >
        <h1 className="text-3xl font-bold text-center mb-3">Thank you!</h1>
        <p className="text-light-gray text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default AppreciationComponent;
