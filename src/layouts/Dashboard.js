import React from "react";
import "./Dashboard.scss";
import { BiSearch } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className='dashboard__wrapper'>
      <div className='side__bar'>
        <div className='logo'>OJEN JR</div>
        <div className='nav__links1'>
          <ul>
            <li>Home</li>
            <li>Message</li>
          </ul>
        </div>
        <div className='nav__links2'>
          <h3>SHARE</h3>
          <ul>
            <li>Ranking</li>
            <li>Challenge</li>
            <li>Party</li>
            <li>Connect</li>
            <li>Parade</li>
            <li>Group</li>
          </ul>
        </div>
      </div>

      <div className='dashboard__content'>
        <div className='search__container'>
          <BiSearch className='icon' />
          <input type='text' placeholder='Find Something...' />
          <button type='search'>Search</button>
        </div>
        <div className='notifications__container'>
          <ul>
            <li>bell</li>
            <li>picture</li>
            <li>name</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
