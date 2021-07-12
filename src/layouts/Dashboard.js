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
  faHeart,
  faThumbsDown,
  faMapMarker,
  faBars,
  faBell,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [query, setQuery] = useState("guys");
  const [pics, setPics] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const key = process.env.REACT_APP_UNSPLASH_KEY;

  const handleNotifications = () => {
    setShowNotification(!showNotification);
  };

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

  console.log("pics", pics);

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
        <div className='mobile__header'>
          <div className='logo'>
            <FontAwesomeIcon icon={faGem} /> bluecube
          </div>

          <div className='menu'>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
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
              <li className='bell__icon' onClick={handleNotifications}>
                <FontAwesomeIcon icon={faBell} />
              </li>
              <li className='profile__img'>
                <img
                  src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1570185801/image_2.1_qc4ywr.png'
                  alt='img'
                />
              </li>
              <li className='name'>Elijah</li>
            </ul>
            {showNotification}
            {showNotification && (
              <>
                <div className='arrow__up'>
                  <FontAwesomeIcon icon={faCaretUp} />
                </div>
                <div className='notification__wrapper'>
                  <div className='notification__content'>
                    <div className='profile__img'>
                      <img
                        src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1570185801/image_2.1_qc4ywr.png'
                        alt='img'
                      />
                    </div>
                    <div className='notification__msg'>
                      <h3>Micheal Liked you</h3>
                      <p>abpout 20 minutes ago</p>
                    </div>
                    <div className='notification_icon'>
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  <div className='notification__content two'>
                    <div className='profile__img'>
                      <img
                        src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1570185801/image_2.1_qc4ywr.png'
                        alt='img'
                      />
                    </div>
                    <div className='notification__msg'>
                      <h3>Micheal Liked you</h3>
                      <p>abpout 20 minutes ago</p>
                    </div>
                    <div className='notification_icon'>
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  <div className='notification__content'>
                    <div className='profile__img'>
                      <img
                        src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1570185801/image_2.1_qc4ywr.png'
                        alt='img'
                      />
                    </div>
                    <div className='notification__msg'>
                      <h3>Micheal Liked you</h3>
                      <p>abpout 20 minutes ago</p>
                    </div>
                    <div className='notification_icon'>
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                </div>
              </>
            )}
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
                <div className='more__info'>
                  <p className='name'>
                    {data?.user?.first_name},{" "}
                    <span>{data?.user?.total_photos}</span>{" "}
                  </p>
                  <p className='location'>
                    <FontAwesomeIcon icon={faMapMarker} />{" "}
                    {data?.user?.location}
                  </p>
                  <div className='social'>
                    <p className='heart'>
                      <FontAwesomeIcon icon={faHeart} />
                    </p>
                    <p className='thumb'>
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
