import React from 'react'
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

const MobileNav = () => {
    return (
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
    )
}

export default MobileNav
