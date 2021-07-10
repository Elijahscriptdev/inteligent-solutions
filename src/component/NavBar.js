import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className='content__nav'>
      <ul>
        <li>
          Ranking{" "}
          <span>
            <RiArrowDropDownLine className='icon' />
          </span>
        </li>
        <li>
          Challenge{" "}
          <span>
            <RiArrowDropDownLine className='icon' />
          </span>
        </li>
        <li>
          Party{" "}
          <span>
            <RiArrowDropDownLine className='icon' />
          </span>
        </li>
        <li>
          Connect{" "}
          <span>
            <RiArrowDropDownLine className='icon' />
          </span>
        </li>
        <li>
          Parade{" "}
          <span>
            <RiArrowDropDownLine className='icon' />
          </span>
        </li>
        <li>
          Group{" "}
          <span>
            <RiArrowDropDownLine className='icon' />
          </span>
        </li>
        <li>
          Connect{" "}
          <span>
            <RiArrowDropDownLine className='icon' />
          </span>
        </li>
        <li>
          Parade{" "}
          <span>
            <RiArrowDropDownLine className='icon' />
          </span>
        </li>
        <li>
          Group{" "}
          <span>
            <RiArrowDropDownLine className='icon' />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
