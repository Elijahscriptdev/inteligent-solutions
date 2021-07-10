import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Unsplash, { toJson } from "unsplash-js";

const Search = () => {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  console.log("query", query);

  const key = process.env.REACT_APP_UNSPLASH_KEY;

  const unsplash = new Unsplash({
    accessKey: key,
  });

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query, 1, 10)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
    console.log("pics", pics);
  };

  useEffect(() => {}, [pics]);

  return (
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
  );
};

export default Search;
