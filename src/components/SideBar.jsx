import React, { useState } from "react";
import Sunny from "../assets/sunny.svg";
import Cloud from "../assets/cloud.svg";
import Rain from "../assets/rain.svg";
import { Search } from "@mui/icons-material";

const SideBar = () => {
  const [search, setSearch] = useState();

  return (
    <div className="w-72 bg-white h-full p-8">
      <form className="flex items-center gap-2">
        <Search />
        <input
          className="placeholder:text-black placeholder:text-sm focus:outline-none"
          type="text"
          placeholder="Search for Places"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <img src={Sunny} alt="" className="w-40 mt-7" />
      <h1 className="text-7xl font-[300] mt-7">
        12
        <sup>
          <span className="text-4xl">o</span>c
        </sup>
      </h1>
      <h4 className="mt-5">
        Monday,<span className="text-gray-400"> 16:00</span>
      </h4>
      <hr className="mt-6 border-slate-300" />
      <ul className="mt-6 flex flex-col gap-6">
        <li className="flex items-center gap-2">
          <img src={Cloud} alt="" />
          <span>Mostly Cloudy</span>
        </li>
        <li className="flex items-center gap-2">
          <img src={Rain} alt="" />
          <span>Rain - 30%</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
