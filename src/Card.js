import React from "react";
import Image from "./img/image-equilibrium.jpg";
import Icon from "./img/icon-ethereum.svg";
import IconClock from "./img/icon-clock.svg";
import Avatar from "./img/image-avatar.png";

const Card = () => {
  return (
    <div className=" bg-slate-800 rounded-3xl p-5 font-outfit max-w-xs   ">
      <div className="relative">
        <img src={Image} alt="image" className="rounded-xl" />
      </div>
      <div className="mt-6">
        <h1 className="text-white font-bold hover:text-cyan-300 cursor-pointer  ">
          Equilibrium #3429
        </h1>
        <p className="my-4 text-slate-500 ">
          Our Equilibrium collection promotes balance and calm.{" "}
        </p>
        <div className="flex justify-between w-full">
          <div className="flex w-1/2">
            <img src={Icon} className="mr-2" />
            <p className="text-cyan-300 font-bold">0.041 ETH</p>
          </div>
          <div className="flex w-1/2 justify-end">
            <img src={IconClock} className="mr-2" />
            <p className="text-slate-500">3 days left</p>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-slate-600 my-5 "></div>
      <div className="flex justify-start items-center ">
        <img
          src={Avatar}
          alt="avatar"
          className="w-10 mr-3 border border-white rounded-full"
        />
        <p className="text-slate-500">
          Creation of <span className="text-white font-thin">Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
