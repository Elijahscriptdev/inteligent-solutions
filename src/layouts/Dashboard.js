import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import "./Dashboard.scss";
import NavBar from "../component/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStickyNote,
  faChessRook,
  faHome,
  faHollyBerry,
  faLink,
  faPersonBooth,
  faUsers,
  faGlassCheers,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [query, setQuery] = useState("family");
  const [pics, setPics] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const key = process.env.REACT_APP_UNSPLASH_KEY;

  const getImageData = async () => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${key}`
      );
      const data = res?.data?.results;
      setPics(data);
      setIsloading(false);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const searchPhotos = async (e) => {
    e.preventDefault();
    getImageData();
  };

  useEffect(() => {
    getImageData();
  }, []);

  return (
    <div className='dashboard__wrapper'>
      <div className='side__bar'>
        <div className='logo'>
          <FontAwesomeIcon icon={faGem} /> bluecube
        </div>
        <div className='nav__links1'>
          <ul>
            <li>
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>{" "}
              Home
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faStickyNote} />
              </span>{" "}
              Message
            </li>
          </ul>
        </div>
        <div className='nav__links2'>
          <h3>SHARE</h3>
          <ul>
            <li>
              <span>
                <FontAwesomeIcon icon={faChessRook} />
              </span>{" "}
              Ranking
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faHollyBerry} />
              </span>{" "}
              Challenge
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faGlassCheers} />
              </span>{" "}
              Party
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faLink} />
              </span>{" "}
              Connect
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faPersonBooth} />
              </span>{" "}
              Parade
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faUsers} />
              </span>{" "}
              Group
            </li>
          </ul>
        </div>
      </div>

      <div className='dashboard__content'>
        {/* <Search /> */}
        <div className='search__wrapper'>
          <div className='search__container'>
            <BiSearch className='icon' />
            <form onSubmit={searchPhotos}>
              <input
                type='text'
                placeholder='Find Something...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type='submit'>Search</button>
            </form>
          </div>
          <div className='notifications__container'>
            <ul>
              <li>bell</li>
              <li>picture</li>
              <li>name</li>
            </ul>
          </div>
        </div>
        <NavBar />
        <div className='image__cards'>
          {isLoading ? (
            <p>loading...</p>
          ) : (
            pics &&
            pics.map((data) => (
              <div className='cards' key={data.id}>
                <img alt={data.alt_description} src={data.urls.small} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
